import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { productMetrics } from '../../data/mockData';
import { Package, Star, AlertTriangle, TrendingUp } from 'lucide-react';

export const ProductAnalytics: React.FC = () => {
  const getInventoryStatus = (inventory: number) => {
    if (inventory < 30) return { status: 'Critical', color: 'text-red-600 bg-red-50' };
    if (inventory < 100) return { status: 'Low Stock', color: 'text-orange-600 bg-orange-50' };
    return { status: 'In Stock', color: 'text-green-600 bg-green-50' };
  };

  const revenueData = productMetrics.map(product => ({
    name: product.name.split(' ').slice(0, 2).join(' '),
    revenue: product.revenue,
    margin: product.margin
  }));

  const scatterData = productMetrics.map(product => ({
    x: product.units,
    y: product.margin,
    name: product.name,
    revenue: product.revenue
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Product Intelligence Dashboard</h2>
        <p className="text-slate-600 mt-1">Comprehensive product performance analysis and inventory optimization insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue Performance by Product</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Sales Volume vs Profit Margin</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={scatterData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="x" 
                type="number" 
                stroke="#64748b" 
                fontSize={12}
                name="units"
              />
              <YAxis 
                dataKey="y" 
                type="number" 
                stroke="#64748b" 
                fontSize={12}
                name="margin"
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'x') return [value, 'Units Sold'];
                  if (name === 'y') return [`${value}%`, 'Profit Margin'];
                  return [value, name];
                }}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Scatter dataKey="y" fill="#10b981" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Product Performance Overview</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Product Name</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Category</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Revenue</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Units Sold</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Profit Margin</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Customer Rating</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Stock Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {productMetrics.map((product) => {
                const inventoryStatus = getInventoryStatus(product.inventory);
                return (
                  <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 text-slate-400" />
                        <span className="font-medium text-slate-800">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{product.category}</td>
                    <td className="py-3 px-4 text-right font-medium">${product.revenue.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">{product.units.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">{product.margin}%</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${inventoryStatus.color}`}>
                        {product.inventory} units
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Top Performing Categories</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Electronics</span>
              <span className="font-semibold text-green-600">$450K</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Furniture</span>
              <span className="font-semibold text-blue-600">$320K</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Wearables</span>
              <span className="font-semibold text-purple-600">$220K</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Inventory Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-sm">2 products critically low</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-orange-600" />
              <span className="text-sm">3 products need restocking</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4 text-green-600" />
              <span className="text-sm">15 products well-stocked</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Quality Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Avg Rating</span>
              <span className="font-semibold">4.6/5.0</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Return Rate</span>
              <span className="font-semibold text-green-600">2.1%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Customer Satisfaction</span>
              <span className="font-semibold text-green-600">94%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
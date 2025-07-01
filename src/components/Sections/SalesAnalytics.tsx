import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MetricCard } from '../Cards/MetricCard';
import { salesData } from '../../data/mockData';
import { TrendingUp, ShoppingCart, DollarSign, Percent } from 'lucide-react';

export const SalesAnalytics: React.FC = () => {
  const totalRevenue = salesData.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;
  const avgConversion = salesData.reduce((sum, day) => sum + day.conversionRate, 0) / salesData.length;

  const chartData = salesData.map(day => ({
    date: new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    orders: day.orders,
    aov: day.averageOrderValue
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Sales Performance Analytics</h2>
        <p className="text-slate-600 mt-1">Comprehensive sales metrics and performance trends for TechMart's product lines</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Weekly Revenue"
          value={totalRevenue}
          change={12.5}
          changeLabel="vs last week"
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Total Orders"
          value={totalOrders}
          change={8.2}
          changeLabel="vs last week"
          icon={ShoppingCart}
          color="blue"
        />
        <MetricCard
          title="Avg Order Value"
          value={`$${avgOrderValue.toFixed(0)}`}
          change={4.1}
          changeLabel="vs last week"
          icon={TrendingUp}
          color="purple"
        />
        <MetricCard
          title="Conversion Rate"
          value={`${avgConversion.toFixed(1)}%`}
          change={0.3}
          changeLabel="vs last week"
          icon={Percent}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Daily Order Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="orders" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Average Order Value Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
              <YAxis 
                stroke="#64748b" 
                fontSize={12}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'AOV']}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="aov" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Sales Channel Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">$485K</div>
            <div className="text-sm text-slate-600">Website Sales</div>
            <div className="text-xs text-green-600 mt-1">+15.2% vs last month</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">$312K</div>
            <div className="text-sm text-slate-600">Mobile App</div>
            <div className="text-xs text-green-600 mt-1">+23.8% vs last month</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">$128K</div>
            <div className="text-sm text-slate-600">Social Commerce</div>
            <div className="text-xs text-green-600 mt-1">+8.4% vs last month</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">$95K</div>
            <div className="text-sm text-slate-600">Marketplace</div>
            <div className="text-xs text-red-600 mt-1">-2.1% vs last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};
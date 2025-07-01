import React from 'react';
import { MetricCard } from '../Cards/MetricCard';
import { RevenueChart } from '../Charts/RevenueChart';
import { CustomerSegmentChart } from '../Charts/CustomerSegmentChart';
import { salesData, customerSegments } from '../../data/mockData';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

export const DashboardOverview: React.FC = () => {
  const totalRevenue = salesData.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const totalCustomers = customerSegments.reduce((sum, segment) => sum + segment.size, 0);
  const avgConversion = salesData.reduce((sum, day) => sum + day.conversionRate, 0) / salesData.length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Executive Dashboard</h2>
        <p className="text-slate-600 mt-1">Real-time business performance metrics for TechMart's operations</p>
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
          title="Orders Processed"
          value={totalOrders.toLocaleString()}
          change={8.2}
          changeLabel="vs last week"
          icon={ShoppingCart}
          color="blue"
        />
        <MetricCard
          title="Active Customers"
          value={totalCustomers.toLocaleString()}
          change={5.7}
          changeLabel="vs last month"
          icon={Users}
          color="purple"
        />
        <MetricCard
          title="Conversion Rate"
          value={`${avgConversion.toFixed(1)}%`}
          change={0.3}
          changeLabel="vs last week"
          icon={TrendingUp}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={salesData} />
        <CustomerSegmentChart data={customerSegments} />
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Business Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">+23%</div>
            <div className="text-sm text-slate-600">Mobile sales growth this quarter</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">4.8★</div>
            <div className="text-sm text-slate-600">Average customer satisfaction rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">89%</div>
            <div className="text-sm text-slate-600">Customer retention rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};
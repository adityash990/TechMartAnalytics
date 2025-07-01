import React from 'react';
import { CustomerSegmentChart } from '../Charts/CustomerSegmentChart';
import { customerSegments } from '../../data/mockData';
import { Users, TrendingUp, AlertTriangle, Award } from 'lucide-react';

export const CustomerInsights: React.FC = () => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return Award;
      case 'medium': return TrendingUp;
      case 'high': return AlertTriangle;
      default: return Users;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Customer Analytics & Insights</h2>
        <p className="text-slate-600 mt-1">Deep dive into customer behavior patterns and lifetime value analysis</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerSegmentChart data={customerSegments} />
        
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Customer Segment Performance</h3>
          <div className="space-y-4">
            {customerSegments.map((segment) => {
              const RiskIcon = getRiskIcon(segment.churnRisk);
              return (
                <div key={segment.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getRiskColor(segment.churnRisk)}`}>
                      <RiskIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">{segment.name}</h4>
                      <p className="text-sm text-slate-600">{segment.size.toLocaleString()} customers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-800">${(segment.value / 1000).toFixed(0)}K</p>
                    <p className={`text-sm ${segment.growthRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {segment.growthRate >= 0 ? '+' : ''}{segment.growthRate.toFixed(1)}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Customer Retention Risk</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-green-600">Highly Engaged</span>
              <span className="font-semibold">4,650 customers</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-orange-600">Needs Attention</span>
              <span className="font-semibold">11,000 customers</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-600">At Risk of Churning</span>
              <span className="font-semibold">1,800 customers</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Growth Champions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>First-Time Buyers</span>
              <span className="font-semibold text-green-600">+22.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Premium Members</span>
              <span className="font-semibold text-green-600">+12.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Repeat Customers</span>
              <span className="font-semibold text-green-600">+8.2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue by Customer Type</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Premium (7%)</span>
              <span className="font-semibold">$850K</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Standard (51%)</span>
              <span className="font-semibold">$2.1M</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Loyal (20%)</span>
              <span className="font-semibold">$1.2M</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Customer Journey Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-slate-700 mb-3">Average Customer Lifecycle</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Time to First Purchase</span>
                <span className="font-medium">3.2 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Average Order Frequency</span>
                <span className="font-medium">Every 28 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Customer Lifetime Value</span>
                <span className="font-medium">$1,247</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-slate-700 mb-3">Engagement Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Email Open Rate</span>
                <span className="font-medium">24.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">App Session Duration</span>
                <span className="font-medium">8.5 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Support Satisfaction</span>
                <span className="font-medium">4.6/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
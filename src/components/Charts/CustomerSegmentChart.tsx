import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomerSegment } from '../../types/analytics';

interface CustomerSegmentChartProps {
  data: CustomerSegment[];
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export const CustomerSegmentChart: React.FC<CustomerSegmentChartProps> = ({ data }) => {
  const chartData = data.map(segment => ({
    name: segment.name,
    value: segment.size,
    revenue: segment.value
  }));

  const renderTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0].payload;
      return (
        <div className="bg-white/95 backdrop-blur-sm p-3 border border-slate-200 rounded-lg shadow-lg">
          <p className="font-semibold text-slate-800">{data.name}</p>
          <p className="text-sm text-slate-600">Customers: {data.value.toLocaleString()}</p>
          <p className="text-sm text-slate-600">Revenue: ${data.revenue.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Customer Segments</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={renderTooltip} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
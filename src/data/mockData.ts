import { SalesData, CustomerSegment, ProductMetrics, MLPrediction, Recommendation } from '../types/analytics';

export const salesData: SalesData[] = [
  { date: '2024-01-01', revenue: 125000, orders: 450, averageOrderValue: 278, conversionRate: 3.2 },
  { date: '2024-01-02', revenue: 132000, orders: 478, averageOrderValue: 276, conversionRate: 3.4 },
  { date: '2024-01-03', revenue: 128000, orders: 465, averageOrderValue: 275, conversionRate: 3.1 },
  { date: '2024-01-04', revenue: 145000, orders: 520, averageOrderValue: 279, conversionRate: 3.6 },
  { date: '2024-01-05', revenue: 138000, orders: 495, averageOrderValue: 279, conversionRate: 3.3 },
  { date: '2024-01-06', revenue: 142000, orders: 510, averageOrderValue: 278, conversionRate: 3.5 },
  { date: '2024-01-07', revenue: 155000, orders: 555, averageOrderValue: 279, conversionRate: 3.8 },
];

export const customerSegments: CustomerSegment[] = [
  { id: '1', name: 'Premium Members', size: 1250, value: 850000, growthRate: 12.5, churnRisk: 'low' },
  { id: '2', name: 'Repeat Customers', size: 3400, value: 1200000, growthRate: 8.2, churnRisk: 'low' },
  { id: '3', name: 'Standard Buyers', size: 8900, value: 2100000, growthRate: 5.1, churnRisk: 'medium' },
  { id: '4', name: 'First-Time Buyers', size: 2100, value: 320000, growthRate: 22.3, churnRisk: 'medium' },
  { id: '5', name: 'At-Risk Customers', size: 1800, value: 180000, growthRate: -15.2, churnRisk: 'high' },
];

export const productMetrics: ProductMetrics[] = [
  { id: '1', name: 'Wireless Headphones Pro', category: 'Electronics', revenue: 285000, units: 950, margin: 42, inventory: 120, rating: 4.8 },
  { id: '2', name: 'Smart Fitness Watch', category: 'Wearables', revenue: 220000, units: 1100, margin: 38, inventory: 85, rating: 4.6 },
  { id: '3', name: 'Premium Coffee Maker', category: 'Appliances', revenue: 180000, units: 450, margin: 35, inventory: 35, rating: 4.7 },
  { id: '4', name: 'Ergonomic Office Chair', category: 'Furniture', revenue: 320000, units: 640, margin: 28, inventory: 22, rating: 4.5 },
  { id: '5', name: 'Smart Home Hub', category: 'Electronics', revenue: 165000, units: 550, margin: 45, inventory: 75, rating: 4.4 },
];

export const mlPredictions: MLPrediction[] = [
  {
    period: 'Next 30 Days',
    predictedRevenue: 4200000,
    confidence: 85,
    factors: [
      { name: 'Seasonal Shopping Trends', impact: 0.25 },
      { name: 'Digital Marketing ROI', impact: 0.18 },
      { name: 'New Product Launches', impact: 0.22 },
      { name: 'Market Competition', impact: 0.15 },
      { name: 'Customer Behavior Patterns', impact: 0.20 },
    ]
  },
  {
    period: 'Next Quarter (Q2 2024)',
    predictedRevenue: 12800000,
    confidence: 78,
    factors: [
      { name: 'Market Expansion Strategy', impact: 0.30 },
      { name: 'Competitive Pricing Pressure', impact: -0.12 },
      { name: 'Technology Innovation', impact: 0.25 },
      { name: 'Customer Acquisition Cost', impact: 0.20 },
      { name: 'Brand Loyalty Programs', impact: 0.17 },
    ]
  }
];

export const recommendations: Recommendation[] = [
  {
    id: '1',
    type: 'inventory',
    title: 'Urgent: Restock Ergonomic Office Chair',
    description: 'Current inventory (22 units) is critically low for our best-selling furniture item. Immediate reorder of 200 units recommended to avoid stockouts during peak season.',
    impact: 'high',
    effort: 'low',
    estimatedValue: 85000
  },
  {
    id: '2',
    type: 'marketing',
    title: 'Customer Retention Campaign',
    description: 'Launch targeted email and SMS campaign for 1,800 at-risk customers with personalized discount offers and product recommendations.',
    impact: 'high',
    effort: 'medium',
    estimatedValue: 120000
  },
  {
    id: '3',
    type: 'product',
    title: 'Expand Smart Home Product Line',
    description: 'Smart Home Hub showing 45% profit margin and strong customer ratings. Consider adding smart speakers, security cameras, and lighting systems.',
    impact: 'medium',
    effort: 'high',
    estimatedValue: 250000
  },
  {
    id: '4',
    type: 'customer',
    title: 'Premium Customer Loyalty Program',
    description: 'Create exclusive benefits for premium members including early access to sales, free shipping, and dedicated customer support to maintain low churn.',
    impact: 'medium',
    effort: 'medium',
    estimatedValue: 95000
  }
];
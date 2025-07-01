export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
  conversionRate: number;
}

export interface CustomerSegment {
  id: string;
  name: string;
  size: number;
  value: number;
  growthRate: number;
  churnRisk: 'low' | 'medium' | 'high';
}

export interface ProductMetrics {
  id: string;
  name: string;
  category: string;
  revenue: number;
  units: number;
  margin: number;
  inventory: number;
  rating: number;
}

export interface MLPrediction {
  period: string;
  predictedRevenue: number;
  confidence: number;
  factors: Array<{
    name: string;
    impact: number;
  }>;
}

export interface Recommendation {
  id: string;
  type: 'product' | 'marketing' | 'inventory' | 'customer';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'high' | 'medium' | 'low';
  estimatedValue: number;
}
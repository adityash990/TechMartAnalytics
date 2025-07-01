import React from 'react';
import { recommendations } from '../../data/mockData';
import { 
  Lightbulb, 
  Package, 
  Users, 
  TrendingUp, 
  Target,
  ArrowRight,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export const Recommendations: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product': return Package;
      case 'marketing': return Target;
      case 'inventory': return AlertCircle;
      case 'customer': return Users;
      default: return Lightbulb;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'product': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'marketing': return 'bg-green-50 text-green-600 border-green-200';
      case 'inventory': return 'bg-red-50 text-red-600 border-red-200';
      case 'customer': return 'bg-purple-50 text-purple-600 border-purple-200';
      default: return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Strategic Business Recommendations</h2>
        <p className="text-slate-600 mt-1">AI-generated actionable insights to optimize TechMart's performance and growth</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec) => {
          const TypeIcon = getTypeIcon(rec.type);
          return (
            <div key={rec.id} className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg border ${getTypeColor(rec.type)}`}>
                  <TypeIcon className="h-5 w-5" />
                </div>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(rec.impact)}`}>
                    {rec.impact} impact
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEffortColor(rec.effort)}`}>
                    {rec.effort} effort
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">{rec.title}</h3>
              <p className="text-slate-600 mb-4">{rec.description}</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Estimated ROI</p>
                  <p className="text-xl font-bold text-green-600">${rec.estimatedValue.toLocaleString()}</p>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <span>Execute</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Strategic Priority Matrix</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-600 mb-2">
              <div></div>
              <div className="text-center">Low Effort</div>
              <div className="text-center">High Effort</div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="text-xs font-medium text-slate-600 flex items-center">High Impact</div>
              <div className="bg-green-100 p-3 rounded text-center text-xs">
                <CheckCircle className="h-4 w-4 text-green-600 mx-auto mb-1" />
                <div>Quick Wins</div>
                <div className="font-medium">2 initiatives</div>
              </div>
              <div className="bg-orange-100 p-3 rounded text-center text-xs">
                <TrendingUp className="h-4 w-4 text-orange-600 mx-auto mb-1" />
                <div>Major Projects</div>
                <div className="font-medium">1 initiative</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="text-xs font-medium text-slate-600 flex items-center">Low Impact</div>
              <div className="bg-blue-100 p-3 rounded text-center text-xs">
                <Lightbulb className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                <div>Fill-ins</div>
                <div className="font-medium">1 initiative</div>
              </div>
              <div className="bg-slate-100 p-3 rounded text-center text-xs">
                <AlertCircle className="h-4 w-4 text-slate-600 mx-auto mb-1" />
                <div>Avoid</div>
                <div className="font-medium">0 initiatives</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Implementation Roadmap</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Week 1-2: Immediate Action</h4>
                <p className="text-sm text-slate-600">Restock critical inventory items to prevent stockouts</p>
              </div>
              <span className="text-sm font-medium text-green-600">$85K ROI</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Week 3-4: Customer Focus</h4>
                <p className="text-sm text-slate-600">Launch targeted retention campaign for at-risk customers</p>
              </div>
              <span className="text-sm font-medium text-blue-600">$120K ROI</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Month 2-3: Loyalty Program</h4>
                <p className="text-sm text-slate-600">Develop premium customer loyalty program</p>
              </div>
              <span className="text-sm font-medium text-orange-600">$95K ROI</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Q2: Product Expansion</h4>
                <p className="text-sm text-slate-600">Expand smart home product line based on demand</p>
              </div>
              <span className="text-sm font-medium text-purple-600">$250K ROI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Success Metrics & KPIs</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">$550K</div>
            <div className="text-sm text-slate-600">Total Potential ROI</div>
            <div className="text-xs text-green-600 mt-1">Over next 6 months</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">15%</div>
            <div className="text-sm text-slate-600">Revenue Increase</div>
            <div className="text-xs text-green-600 mt-1">Expected quarterly growth</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">92%</div>
            <div className="text-sm text-slate-600">Customer Retention</div>
            <div className="text-xs text-green-600 mt-1">Target retention rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">3.8%</div>
            <div className="text-sm text-slate-600">Conversion Rate</div>
            <div className="text-xs text-green-600 mt-1">Projected improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};
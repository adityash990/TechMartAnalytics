import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mlPredictions } from '../../data/mockData';
import { Brain, TrendingUp, Target, Zap } from 'lucide-react';

export const MLPredictions: React.FC = () => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600 bg-green-50';
    if (confidence >= 60) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">AI-Powered Sales Forecasting</h2>
        <p className="text-slate-600 mt-1">Machine learning models predicting TechMart's future performance and market trends</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mlPredictions.map((prediction, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800">{prediction.period}</h3>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(prediction.confidence)}`}>
                {prediction.confidence}% confidence
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-3xl font-bold text-slate-800">
                ${(prediction.predictedRevenue / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm text-slate-600">Predicted Revenue</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-slate-700">Key Influencing Factors</h4>
              {prediction.factors.map((factor, factorIndex) => (
                <div key={factorIndex} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{factor.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${factor.impact >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.abs(factor.impact) * 100}%` }}
                      />
                    </div>
                    <span className={`text-sm font-medium ${factor.impact >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {factor.impact >= 0 ? '+' : ''}{(factor.impact * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Brain className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-800">Model Accuracy</h3>
          </div>
          <p className="text-2xl font-bold text-slate-800">94.2%</p>
          <p className="text-sm text-slate-600">Historical prediction accuracy over 12 months</p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-800">Growth Forecast</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">+18.5%</p>
          <p className="text-sm text-slate-600">Expected quarterly revenue growth</p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-800">Prediction Confidence</h3>
          </div>
          <p className="text-2xl font-bold text-slate-800">82%</p>
          <p className="text-sm text-slate-600">Average confidence across all forecasts</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue Forecast vs Historical Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[
            { period: 'Current Month', actual: 3800000, predicted: null },
            { period: 'Next Month', actual: null, predicted: 4200000 },
            { period: 'Month +2', actual: null, predicted: 4500000 },
            { period: 'Month +3', actual: null, predicted: 4300000 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="period" stroke="#64748b" fontSize={12} />
            <YAxis 
              stroke="#64748b" 
              fontSize={12}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip 
              formatter={(value) => [`$${value?.toLocaleString()}`, value ? 'Predicted' : 'Actual']}
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="actual" fill="#64748b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="predicted" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">AI Model Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-slate-700 mb-3">Market Trend Analysis</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Electronics demand expected to surge 25% in Q2</li>
              <li>• Seasonal patterns indicate peak sales in March-April</li>
              <li>• Mobile commerce growth accelerating at 23% monthly</li>
              <li>• Customer acquisition costs decreasing by 8%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-700 mb-3">Risk Factors</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Supply chain disruptions may impact 12% of inventory</li>
              <li>• Competitor pricing strategies affecting margins</li>
              <li>• Economic indicators suggest cautious consumer spending</li>
              <li>• New product launches creating market uncertainty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
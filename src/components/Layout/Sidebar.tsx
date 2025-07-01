import React from 'react';
import { 
  BarChart3, 
  Users, 
  Package, 
  Brain, 
  Lightbulb, 
  Home,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { id: 'dashboard', name: 'Executive Dashboard', icon: Home },
  { id: 'sales', name: 'Sales Performance', icon: TrendingUp },
  { id: 'customers', name: 'Customer Analytics', icon: Users },
  { id: 'products', name: 'Product Intelligence', icon: Package },
  { id: 'predictions', name: 'AI Forecasting', icon: Brain },
  { id: 'recommendations', name: 'Strategic Insights', icon: Lightbulb },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <div className="w-64 bg-white/80 backdrop-blur-lg border-r border-slate-200 h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <BarChart3 className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-slate-800">TechMart Analytics</h1>
            <p className="text-xs text-slate-500">Business Intelligence Suite</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
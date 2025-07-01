import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { DashboardOverview } from './components/Sections/DashboardOverview';
import { SalesAnalytics } from './components/Sections/SalesAnalytics';
import { CustomerInsights } from './components/Sections/CustomerInsights';
import { ProductAnalytics } from './components/Sections/ProductAnalytics';
import { MLPredictions } from './components/Sections/MLPredictions';
import { Recommendations } from './components/Sections/Recommendations';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'sales':
        return <SalesAnalytics />;
      case 'customers':
        return <CustomerInsights />;
      case 'products':
        return <ProductAnalytics />;
      case 'predictions':
        return <MLPredictions />;
      case 'recommendations':
        return <Recommendations />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 p-8 overflow-auto">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;
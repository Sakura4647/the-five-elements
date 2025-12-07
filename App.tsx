import React, { useState } from 'react';
import { TABS } from './constants';
import { TabButton } from './components/TabButton';
import { ContentArea } from './components/ContentArea';

const App: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(TABS[0].id);

  const activeTab = TABS.find(tab => tab.id === activeTabId) || TABS[0];

  return (
    <div className="min-h-screen bg-[#f3eee3] flex flex-col text-stone-800 font-sans">
      
      {/* Top Decoration */}
      <div className="h-2 bg-stone-800 w-full" />

      <header className="pt-12 pb-6 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-serif text-stone-600 tracking-[0.2em] mb-3">
          玩轉五行
        </h1>
        <p className="text-sm md:text-base text-stone-500 font-light tracking-widest">
          循著五行流轉，探索你的身心節奏
        </p>
      </header>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#f3eee3]/95 backdrop-blur-sm border-b border-stone-300 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar md:justify-center space-x-2 md:space-x-8 pb-1">
            {TABS.map((tab) => (
              <TabButton 
                key={tab.id}
                tab={tab} 
                isActive={tab.id === activeTabId} 
                onClick={setActiveTabId} 
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow px-4 py-12 md:py-16">
        <ContentArea tab={activeTab} />
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-400 py-8 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-serif text-lg mb-4 opacity-90 tracking-wide">
            臺灣精油芳療年會
          </p>
          <div className="h-px w-16 bg-stone-600 mx-auto mb-4" />
          <p className="text-xs tracking-wider">
            &copy; {new Date().getFullYear()} ZenNum Project. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Global Transition Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
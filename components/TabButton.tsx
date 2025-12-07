import React from 'react';
import { TabData } from '../types';

interface TabButtonProps {
  tab: TabData;
  isActive: boolean;
  onClick: (id: string) => void;
}

export const TabButton: React.FC<TabButtonProps> = ({ tab, isActive, onClick }) => {
  const Icon = tab.icon;
  
  return (
    <button
      onClick={() => onClick(tab.id)}
      className={`
        relative flex flex-col items-center justify-center min-w-[100px] px-4 py-4 md:py-6 transition-all duration-300 ease-in-out group outline-none
        ${isActive ? 'text-stone-800' : 'text-stone-400 hover:text-stone-600'}
      `}
      aria-selected={isActive}
      role="tab"
    >
      <div 
        className={`
          p-3 rounded-full mb-2 transition-all duration-300
          ${isActive ? 'bg-stone-200 shadow-inner' : 'bg-transparent group-hover:bg-stone-100'}
        `}
      >
        <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
      </div>
      
      <span className={`text-sm md:text-base font-medium whitespace-nowrap ${isActive ? 'font-bold' : ''}`}>
        {tab.title}
      </span>

      {/* Active Indicator Line */}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-1 bg-stone-600 rounded-t-full" />
      )}
    </button>
  );
};
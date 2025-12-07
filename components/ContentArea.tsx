import React from 'react';
import { TabData } from '../types';
import { Image as ImageIcon } from 'lucide-react';

interface ContentAreaProps {
  tab: TabData;
}

export const ContentArea: React.FC<ContentAreaProps> = ({ tab }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-stone-50 px-8 py-10 border-b border-stone-100 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4 tracking-wide">
            {tab.title}
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            {tab.description}
          </p>
        </div>

        {/* Content Placeholder Area */}
        <div className="p-8 md:p-12">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] border-2 border-dashed border-stone-300 rounded-xl bg-stone-50 flex flex-col items-center justify-center gap-4 text-stone-400 transition-colors hover:border-stone-400 hover:bg-stone-100 cursor-default">
            <div className="p-4 bg-white rounded-full shadow-sm">
              <ImageIcon size={48} strokeWidth={1} />
            </div>
            <p className="text-lg font-medium tracking-widest uppercase">
              {tab.placeholderText}
            </p>
            <p className="text-xs text-stone-300">Placeholder Area</p>
          </div>
          
          <div className="mt-8 space-y-4">
             {/* Fake Content Lines (Skeleton loader style aesthetic) */}
             <div className="h-4 bg-stone-100 rounded w-3/4 mx-auto"></div>
             <div className="h-4 bg-stone-100 rounded w-2/3 mx-auto"></div>
             <div className="h-4 bg-stone-100 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
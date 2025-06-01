"use client";
import React, { useState } from 'react';

const tabList = [
  'Project',
  'Saved',
  'Shared',
  'Achievement',
];

interface TabsProps {
  onTabChange?: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabList[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="flex gap-6 border-b border-gray-200 mb-6">
      {tabList.map((tab) => (
        <button
          key={tab}
          className={`pb-2 text-base font-medium transition-colors relative ${
            activeTab === tab
              ? 'text-[#F15A29] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#F15A29] after:rounded font-bold'
              : 'text-gray-700 hover:text-[#F15A29] font-semibold'
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs; 
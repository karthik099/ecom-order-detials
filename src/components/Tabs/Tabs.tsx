import React from 'react';

export interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => (
  <div className="flex space-x-2 mb-4">
    {tabs.map(tab => (
      <button
        key={tab.value}
        className={`px-4 py-2 rounded-t-lg border-b-2 font-semibold text-sm transition-colors duration-200 focus:outline-none ${activeTab === tab.value ? 'border-yellow-500 text-black-600 bg-gray-200' : 'border-transparent text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
        onClick={() => onTabChange(tab.value)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default Tabs;

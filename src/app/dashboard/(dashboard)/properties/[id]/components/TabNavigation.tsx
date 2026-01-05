import React from "react";
import { TabType } from "./types";

interface TabNavigationProps {
  tabs: Array<{ id: TabType; label: string }>;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <div className="border-b-[1px] border-[#0000001A] mb-4 sm:mb-6 overflow-x-auto px-4">
      <div className="flex gap-x-1 flex-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm shrink-0 font-[400] whitespace-nowrap transition-all duration-300 relative ${
              activeTab === tab.id
                ? "text-black"
                : "text-[#00000066] hover:text-black"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all duration-300"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}



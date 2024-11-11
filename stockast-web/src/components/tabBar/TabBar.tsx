import React, { useState } from 'react';
import { TabBarProps } from '../../types/TabBar.types';

const TabBar = ({
  labels,
  labelColors,
  isSlideAnimation = true,
  tabContents,
}: TabBarProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className='flex'>
        {labels.map((label, index) => (
          <SingleTab
            key={index}
            index={index}
            label={label}
            labelColor={labelColors[index]}
            isActive={activeTab == index}
            onClick={handleTab}
            opacity={0.1}
            bgColor='stock-red'
          />
        ))}
      </div>
      <div>{tabContents[activeTab]}</div>
    </div>
  );
};

const SingleTab = ({
  index,
  isActive,
  label,
  labelColor,
  bgColor,
  opacity,
  onClick,
}: {
  index: number;
  isActive: boolean;
  label: string;
  labelColor: string;
  bgColor: string;
  opacity: string;
  onClick: (index: number) => void;
}) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`flex-grow cursor-pointer rounded py-2 text-center transition-colors ${
        isActive
          ? `font-semibold ${labelColor}`
          : 'bg-[--dark-blue] font-normal'
      }`}
    >
      {label}
    </div>
  );
};

export default TabBar;

import React from 'react';

export type TabBarProps = {
  labels: string[];
  labelColors: string[];
  isSlideAnimation: boolean;
  tabContents: React.ReactNode[];
};

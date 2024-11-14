import { InputHTMLAttributes, ReactNode } from 'react';

export interface TabBarProps {
  children: ReactNode;
  selectedTab: number;
  onTabChange: (index: number) => void;
}

export interface TabProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

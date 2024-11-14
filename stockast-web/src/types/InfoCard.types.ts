import { ReactNode } from 'react';

export interface InfoCardContextType {
  value: number;
  originalValue: number | null;
}
export interface InfoCardProps {
  children: ReactNode;
}

export interface InfoCardContentProps {
  label: string;
  iconUrl: string;
}

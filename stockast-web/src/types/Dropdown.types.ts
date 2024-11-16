import { ReactNode } from 'react';

export interface DropdownContextType {
  options?: string[];
  onChange: (options: string[]) => void;
}

export interface DropdownProps {
  children: ReactNode;
  options?: string[];
  ref?: React.Ref<HTMLDivElement>;
  onChange: (values: string[]) => void;
}

export interface TriggerProps {
  label: string;
  handleModalVisible: () => void;
}

export interface ModalProps {
  children: ReactNode;
  trigger: ReactNode;
}

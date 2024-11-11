import { InputHTMLAttributes, ChangeEvent } from 'react';

export interface RadioOptionType {
  label: string;
  name: string;
  value: string;
}

export interface RadioGroupProps {
  options: RadioOptionType[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface RadioOptionProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

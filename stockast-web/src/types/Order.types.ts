import { useRef, useState } from 'react';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';

export interface ValueControlProps {
  defaultValue: number | null; // 기본 값
  min: number; // 최소 값
  max: number; // 최대 값
  step: number; // 증가,감소 단위
  unit: string; // 수량 단위 (ex. 원, 주)
  disabled?: boolean; // 활성화 여부
  placeHolder?: string | null; // 미리보기 텍스트
  disabledPlaceHolder?: string | null; // 비활성화 미리보기 텍스트
}

export enum PriceCategory {
  CUSTOM_PRICE,
  MARKET_PRICE,
}
export interface FormComponent {
  control: Control<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  watch: UseFormWatch<FormValues>;
}
export interface OrderQuantityProps extends FormComponent {
  defaultValue: number;
  enabled: boolean;
}

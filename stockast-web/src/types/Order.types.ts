import {
  Control,
  FieldError,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { PriceCategoryEnum } from '../enums/PriceCategory.enum';
import { Form } from 'react-router-dom';

export interface ValueControlProps {
  defaultValue: number | null; // 기본 값
  min: number; // 최소 값
  max: number; // 최대 값
  step: number; // 증가,감소 단위
  unit: string; // 수량 단위 (ex. 원, 주)
  disabled?: boolean; // 활성화 여부
  placeholder?: string; // 미리보기 텍스트
  showPlaceholder?: boolean; // 미리보기를 보여줄 지 여부
  error?: FieldError | undefined; // 검증 에러
}
export interface FormComponent {
  control?: Control<FormValues>;
  setValue?: UseFormSetValue<FormValues>;
  watch?: UseFormWatch<FormValues>;
  error?: FieldError | undefined;
}
export interface OrderQuantityProps extends FormComponent {
  defaultPrice: number; // 기본 가격 (시장가)
  maxAskPrice: number; // 최대 매수 호가
  minAskPrice: number; // 최소 매수 호가
  availableAmount: number; // 주문 가능한 금액
}

export interface OrderSummaryProps extends FormComponent {
  availableAmount: number;
}

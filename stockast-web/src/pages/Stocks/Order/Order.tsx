import React, { ReactNode, useState } from 'react';
import Divider from '../../../components/Divder';
import { useForm } from 'react-hook-form';
import OrderQuantity from './OrderQuantity';
import PriceCategory from './PriceCategory';
import OrderMode from './OrderMode';
import OrderSubmit from './OrderSubmit';
import { PriceCategoryEnum } from '../../../enums/PriceCategory.enum';
import OrderSummary from './OrderSummary';

interface FormValues {
  priceCategory: PriceCategoryEnum; // 가격 타입(시장가, 지정가)
  orderPrice: number; // 주문 가격
  quantity: number; // 수량
  totalCost: number; // 총 주문 금액
}

const Order = () => {
  const availableAmount = 1000000;
  const marketPrice = 54100;

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      priceCategory: PriceCategoryEnum.CUSTOM_PRICE,
      orderPrice: marketPrice,
      quantity: 0,
    },
  });

  const onSubmit = (data: FormValues) => {
    if (data.quantity === 0) {
      setError('quantity', { type: 'manual', message: '수량을 입력해주세요.' });
      return;
    }
    alert('주문 완료');
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col space-y-3 rounded-xl bg-neutral-800 p-5'
    >
      <p className='text-lg font-semibold'>주문하기</p>
      <table className='w-full'>
        <tbody>
          <OrderMode />
          <PriceCategory control={control} />
          <OrderQuantity
            availableAmount={availableAmount}
            defaultPrice={marketPrice}
            control={control}
            setValue={setValue}
            watch={watch}
            maxAskPrice={70000}
            minAskPrice={30000}
            error={errors.quantity}
          />
        </tbody>
      </table>
      <Divider />
      <OrderSummary watch={watch} availableAmount={availableAmount} />
      <OrderSubmit />
    </form>
  );
};

export default Order;

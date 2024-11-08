import React from 'react';
import { GoQuestion } from 'react-icons/go';
import { PiCurrencyKrwFill } from 'react-icons/pi';

const AvailableBalance = () => {
  return (
    <div className='my-8'>
      <p className='text-sm text-neutral-200'>주문가능금액</p>
      <p className='text-lg font-semibold'>1,000,000원</p>
      <div className='flex w-full'>
        <BalanceCard />
        <BalanceCard />
      </div>
    </div>
  );
};

const BalanceCard = () => {
  return (
    <div className='m-1 w-full rounded-xl bg-neutral-800 p-3'>
      <div className='flex items-center space-x-0.5'>
        <PiCurrencyKrwFill />
        <p>원화</p>
      </div>
      <p className='my-1 font-medium'>6,971원</p>
      <div className='flex items-center space-x-1'>
        <p className='text-sm font-light text-neutral-300'>6,971원 출금 가능</p>
        <GoQuestion className='text-neutral-300' />
      </div>
    </div>
  );
};

export default AvailableBalance;

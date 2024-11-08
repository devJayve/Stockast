import React from 'react';
import { PiCurrencyKrwFill } from 'react-icons/pi';
import { GoQuestion } from 'react-icons/go';

const InvestedBalance = () => {
  return (
    <div className='my-8'>
      <p className='text-sm text-neutral-200'>투자 중인 금액</p>
      <div className='flex items-baseline space-x-1'>
        <p className='text-lg font-semibold'>1,000,000원</p>
        <p className='text-sm text-red-500'>(10.0%)</p>
      </div>
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
      <div className='flex items-center space-x-1'>
        <img src='/images/korea_flag.png' width='10px' />
        <p className='text-sm'>국내주식</p>
      </div>
      <p className='my-1 font-medium'>6,971원</p>
      <div className='flex items-center space-x-1 text-sm text-red-500'>
        <p>+100,000원</p>
        <p>(45.2%)</p>
      </div>
    </div>
  );
};

export default InvestedBalance;

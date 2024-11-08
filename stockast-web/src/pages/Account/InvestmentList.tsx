import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentList = () => {
  return (
    <div className='my-8 flex w-full space-x-5'>
      <ul className='flex-1'>
        <InvestmentTile />
        <InvestmentTile />
        <InvestmentTile />
        <InvestmentTile />
      </ul>
      <ul className='flex-1'>
        <InvestmentTile />
        <InvestmentTile />
        <InvestmentTile />
      </ul>
    </div>
  );
};

const InvestmentTile = () => {
  return (
    <Link to='/stocks'>
      <li className='flex cursor-pointer justify-between py-1'>
        <div className='flex items-center space-x-2'>
          <img
            className='h-8 w-8 rounded-full'
            src='/images/samsung_icon.png'
          />
          <div>
            <p>삼성전자</p>
            <p className='text-xs text-neutral-400'>10주</p>
          </div>
        </div>
        <div className='justify-items-end'>
          <p className='font-semibold'>800,000원</p>
          <p className='text-sm text-red-500'>+80,000(10.0%)</p>
        </div>
      </li>
    </Link>
  );
};

export default InvestmentList;

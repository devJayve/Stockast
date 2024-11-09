import React from 'react';

const StockHeader = () => {
  return (
    <div className='mb-3 flex justify-between'>
      <div className='flex space-x-2'>
        <img className='w-12 rounded-xl' src='/images/samsung_icon.png' />
        <div>
          <div className='flex space-x-1'>
            <p className='font-semibold'>삼성전자</p>
            <p className='text-neutral-400'>005930</p>
          </div>
          <div className='flex items-baseline space-x-1'>
            <p className='text-lg font-semibold'>57,000원</p>
            <p className='text-sm'>어제보다 </p>
            <p className='text-sm text-blue-500'>-500원 (0.8%)</p>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-3'>
        <KeyMetric title='시가총액' value='379.1조원' />
        <KeyMetric title='1일 최저' value='379.1조원' />
        <KeyMetric title='1일 최고' value='379.1조원' />
        <KeyMetric title='1년 최저' value='379.1조원' />
        <KeyMetric title='1년 최고' value='379.1조원' />
      </div>
    </div>
  );
};

const KeyMetric = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className='flex space-x-1.5'>
      <div className='w-0.25 my-1.5 bg-neutral-500'></div>
      <div>
        <p className='text-neu-400 text-sm font-medium'>{title}</p>
        <p className='text-sm font-medium'>{value}</p>
      </div>
    </div>
  );
};

export default StockHeader;

import React from 'react';
import { StockIndexProps } from '../../types/stock.types';

const StockIndex: React.FC<StockIndexProps> = ({
  title,
  imageUrl,
  indexPrice,
  changePrice,
  changeRate,
}) => {
  const isPositive = parseFloat(changePrice) > 0;
  const rateColor = isPositive ? 'text-red-500' : 'text-blue-500';

  return (
    <div className='inline-block w-[200px] flex-shrink-0 flex-col rounded-xl bg-neutral-800 p-5'>
      <div className='flex items-center space-x-1'>
        <p>{title}</p>
        <img className='h-4 w-auto' src={imageUrl} alt={title} />
      </div>
      <p className='text-xl font-bold'>{indexPrice}</p>
      <p className={rateColor}>
        {changePrice} ({changeRate}%)
      </p>
    </div>
  );
};

export default StockIndex;

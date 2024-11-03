import React from 'react';
import StockIndex from './StockIndex';
import { StockIndexProps } from '../../types/stock.types';

const dummyList: StockIndexProps[] = [
  {
    title: '코스피',
    indexPrice: '2542.36',
    imageUrl: '/images/korea_flag.png',
    changePrice: '-13.79',
    changeRate: '0.5',
  },
  {
    title: '코스피',
    indexPrice: '2542.36',
    imageUrl: '/images/korea_flag.png',
    changePrice: '-13.79',
    changeRate: '0.5',
  },
  {
    title: '코스피',
    indexPrice: '2542.36',
    imageUrl: '/images/korea_flag.png',
    changePrice: '-13.79',
    changeRate: '0.5',
  },
  {
    title: '코스피',
    indexPrice: '2542.36',
    imageUrl: '/images/korea_flag.png',
    changePrice: '-13.79',
    changeRate: '0.5',
  },
];

const StockIndexList = () => {
  return (
    <div className='mb-10 mt-10'>
      <p className='text-2xl'>주가 지수</p>
      <div className='scrollbar-hide flex space-x-4 overflow-x-auto whitespace-nowrap'>
        {dummyList.map((stock, index) => (
          <StockIndex
            key={index}
            title={stock.title}
            imageUrl={stock.imageUrl}
            indexPrice={stock.indexPrice}
            changePrice={stock.changePrice}
            changeRate={stock.changeRate}
          />
        ))}
      </div>
    </div>
  );
};

export default StockIndexList;

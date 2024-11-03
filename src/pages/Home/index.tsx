import React from 'react';
import StockIndexList from './StockIndexList';
import StockChart from './StockChart';

function Home() {
  return (
    <div className='flex flex-col'>
      <StockIndexList />
      <StockChart />
    </div>
  );
}

export default Home;

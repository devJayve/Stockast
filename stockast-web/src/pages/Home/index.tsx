import React from 'react';
import StockIndexList from './StockIndexList';
import StockChart from './StockChart';
import LineGraph from '../../components/Graph/LineGraph';

function Home() {
  return (
    <div className='flex flex-col'>
      <StockIndexList />
      <LineGraph />
      <StockChart />
    </div>
  );
}

export default Home;

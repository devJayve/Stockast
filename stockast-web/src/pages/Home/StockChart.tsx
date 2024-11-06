import React from 'react';
import './../../styles/table.css';

const dummyData = [
  {
    stock: '삼성전자',
    currentPrice: 70000,
    changeRate: '+1.25%',
    tradingValue: '2조 3000억',
    tradingVolume: '1,200,000',
  },
  {
    stock: '카카오',
    currentPrice: 120000,
    changeRate: '-0.85%',
    tradingValue: '1조 5000억',
    tradingVolume: '900,000',
  },
  {
    stock: '네이버',
    currentPrice: 300000,
    changeRate: '+0.45%',
    tradingValue: '7000억',
    tradingVolume: '450,000',
  },
  {
    stock: '현대차',
    currentPrice: 250000,
    changeRate: '+2.10%',
    tradingValue: '1조 2000억',
    tradingVolume: '600,000',
  },
  {
    stock: 'LG화학',
    currentPrice: 800000,
    changeRate: '-1.50%',
    tradingValue: '9000억',
    tradingVolume: '300,000',
  },
];

const StockChart = () => {
  return (
    <div className='p-5'>
      <p className='my-2 text-xl font-semibold'>실시간 차트</p>
      <table className='w-full'>
        <tbody>
          <tr className='table-header'>
            <th className='w-[30%] py-2 text-left'>종목</th>
            <th className='w-[20%]'>현재가</th>
            <th className='w-[20%]'>등락률</th>
            <th className='w-[15%]'>거래대금</th>
            <th className='w-[15%]'>거래량</th>
          </tr>
        </tbody>
        <tbody>
          {dummyData.map((record, index) => (
            <tr key={index} className='text-right'>
              <td className='flex py-2 text-left'>
                <img
                  className='mx-2 rounded-full object-cover object-center'
                  src='/images/samsung_icon.png'
                  width='15px'
                />
                <p>{record.stock}</p>
              </td>
              <td>{record.currentPrice}</td>
              <td>{record.changeRate}</td>
              <td>{record.tradingValue}</td>
              <td>{record.tradingVolume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockChart;

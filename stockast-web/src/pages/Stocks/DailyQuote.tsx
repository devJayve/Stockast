import React from 'react';

const DailyQuote = () => {
  return (
    <div className='bg-neutral-850 my-4 flex flex-col rounded-xl p-4'>
      <p className='font-semibold'>일별 실시간 시세</p>
      <div className='my-2 flex w-full rounded-lg bg-neutral-700 py-1'>
        <button className='flex-1'>실시간</button>
        <button className='flex-1'>일별</button>
      </div>
      <div>
        <table className='w-full space-y-1 text-right'>
          <tr className='border-b-0.5 border-neutral-500 text-sm text-neutral-300'>
            <th className='w-[25%] py-2 text-left font-light'>체결가</th>
            <th className='w-[25%] font-light'>체결량</th>
            <th className='w-[25%] font-light'>등락률</th>
            <th className='w-[25%] font-light'>거래량</th>
          </tr>
          <SingleQuoteTile />
          <SingleQuoteTile />
          <SingleQuoteTile />
          <SingleQuoteTile />
        </table>
      </div>
    </div>
  );
};

const SingleQuoteTile = () => {
  return (
    <tr className='text-sm text-neutral-300'>
      <td className='py-1 text-left'>57,100원</td>
      <td>14,892</td>
      <td className='text-red-500'>+0.17%</td>
      <td>13,564,588</td>
    </tr>
  );
};

export default DailyQuote;

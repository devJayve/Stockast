import React, { useState } from 'react';
import clsx from 'clsx';

interface HistoryItem {
  date: string;
  time: string;
  stockName: string;
  transactionType: string;
  transactionAmount: string;
  balance: string;
}

const dummyData: HistoryItem[] = Array(20)
  .fill(0)
  .map((_, index) => ({
    date: `11.${15 - (index % 10)}`,
    time: `${10 + (index % 12)}:${index % 60}`.padStart(5, '0'),
    stockName: ['애플', '테슬라', 'CIBR', 'XLK', 'DGRO'][index % 5],
    transactionType: index % 3 === 0 ? '외화배당금입금' : '판매',
    transactionAmount:
      index % 2 === 0
        ? `$${(0.21 * index).toFixed(2)}`
        : `-$${(0.45 * index).toFixed(2)}`,
    balance: `$${(1128.54 - index * 5).toFixed(2)}`,
  }));

const HistoryList = () => {
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);
  const [isPending, setIsPending] = useState(false); // 애니메이션 중인지 상태 관리

  const handleSelectItem = (item: HistoryItem) => {
    if (selectedItem === item) {
      // 닫기
      setIsPending(true); // 애니메이션 시작
      setTimeout(() => {
        setSelectedItem(null);
        setIsPending(false); // 애니메이션 종료
      }, 300); // 애니메이션 시간 (Tailwind `duration-300`에 맞춤)
    } else {
      setIsPending(true); // 애니메이션 시작
      setTimeout(() => {
        setSelectedItem(item);
        setIsPending(false); // 애니메이션 종료
      }, 300);
    }
  };

  return (
    <div className='flex h-screen bg-neutral-900 text-white transition-all duration-300'>
      {/* 리스트 영역 */}
      <div
        className={clsx(
          'overflow-y-auto border-r border-neutral-700 p-4 transition-all duration-300',
          selectedItem ? 'w-2/3' : 'w-full'
        )}
      >
        <ul className='space-y-4'>
          {dummyData.map((item, index) => (
            <li
              key={index}
              className='flex cursor-pointer justify-between border-b border-neutral-700 pb-3 hover:bg-neutral-800'
              onClick={() => handleSelectItem(item)}
            >
              <div className='flex flex-col'>
                <p className='text-sm text-gray-400'>{item.date}</p>
                <p className='text-sm'>{item.stockName}</p>
                <p className='text-xs text-gray-500'>
                  {item.time} | {item.transactionType}
                </p>
              </div>
              <div className='flex flex-col items-end'>
                <p
                  className={`font-semibold ${
                    item.transactionAmount.startsWith('-')
                      ? 'text-red-500'
                      : 'text-blue-500'
                  }`}
                >
                  {item.transactionAmount}
                </p>
                <p className='text-sm text-gray-400'>{item.balance}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 상세 정보 영역 */}
      <div
        className={clsx(
          'overflow-y-auto p-6 transition-all duration-300',
          selectedItem ? 'w-1/3' : 'w-0'
        )}
      >
        {!isPending && selectedItem ? (
          <div className='opacity-100'>
            <h2 className='text-lg font-semibold'>{selectedItem.stockName}</h2>
            <p className='text-xl font-bold text-blue-500'>
              {selectedItem.transactionAmount}
            </p>
            <p className='mt-2 text-sm text-gray-400'>
              거래유형: {selectedItem.transactionType}
            </p>
            <p className='text-sm text-gray-400'>
              입금일시: {selectedItem.date} {selectedItem.time}
            </p>
            <p className='text-sm text-gray-400'>총 금액(세전): $0.25</p>
            <p className='text-sm text-gray-400'>외국납부세금: $0.04</p>
            <p className='text-sm text-gray-400'>수수료: $0.00</p>
          </div>
        ) : (
          <div className='opacity-0'></div> // 애니메이션 중에는 비우기
        )}
      </div>
    </div>
  );
};

export default HistoryList;

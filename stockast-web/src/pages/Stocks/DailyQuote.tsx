import React, { useState } from 'react';
import TabBar from '../../components/TabBar';
import MetricsTable from '../../components/MetricsTable';

interface RealtimePrice {
  tradePrice: string; // 체결가 (예: '57,100원')
  tradeVolume: number; // 체결량 (예: 14892)
  changeRate: string; // 등락률 (예: '+0.17%')
  accumulatedVolume: number; // 실시간 시세 (예: 13564588)
}

const realtimePriceDummy: RealtimePrice[] = [
  {
    tradePrice: '57,100원',
    tradeVolume: 14892,
    changeRate: '+0.17%',
    accumulatedVolume: 13564588,
  },
  {
    tradePrice: '58,000원',
    tradeVolume: 10345,
    changeRate: '-0.05%',
    accumulatedVolume: 12500000,
  },
  {
    tradePrice: '56,700원',
    tradeVolume: 20340,
    changeRate: '+0.25%',
    accumulatedVolume: 14500000,
  },
  {
    tradePrice: '57,500원',
    tradeVolume: 17980,
    changeRate: '-0.13%',
    accumulatedVolume: 12345678,
  },
];

const DailyQuote = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className='flex flex-1 flex-col rounded-xl bg-neutral-800 p-4'>
      <p className='font-semibold'>일별 실시간 시세</p>
      <TabBar
        onTabChange={setSelectedTab}
        selectedTab={selectedTab}
        hasBackground={true}
      >
        <TabBar.InterfaceTab value={0} label='실시간' />
        <TabBar.InterfaceTab value={1} label='실시간' />
      </TabBar>

      <MetricsTable>
        <MetricsTable.Header>
          <MetricsTable.Column>체결가</MetricsTable.Column>
          <MetricsTable.Column>체결량</MetricsTable.Column>
          <MetricsTable.Column>등락률</MetricsTable.Column>
          <MetricsTable.Column>거래량</MetricsTable.Column>
        </MetricsTable.Header>
        <MetricsTable.Body>
          {realtimePriceDummy.map((price, index) => (
            <MetricsTable.Row key={index}>
              <MetricsTable.Cell>{price.tradePrice}</MetricsTable.Cell>
              <MetricsTable.Cell>{price.tradeVolume}</MetricsTable.Cell>
              <MetricsTable.Cell>{price.changeRate}</MetricsTable.Cell>
              <MetricsTable.Cell>{price.accumulatedVolume}</MetricsTable.Cell>
            </MetricsTable.Row>
          ))}
        </MetricsTable.Body>
      </MetricsTable>
    </div>
  );
};

export default DailyQuote;

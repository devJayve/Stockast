import React, { useMemo } from 'react';
import TabBar from '../../components/TabBar/TabBar';

const labels: string[] = ['구매', '판매', '대기'];
const labelColors: string[] = [
  'text-stock-red',
  'text-stock-blue',
  'text-stock-green',
];

const Order = () => {
  const tabContents = useMemo(() => [
    <PurchasePanel key='purchase' />,
    <SellPanel key='sell' />,
    <PendingPanel key='pending' />,
  ]);

  return (
    <div>
      <p>주문하기</p>
      <TabBar
        labels={labels}
        labelColors={labelColors}
        tabContents={tabContents}
      />
    </div>
  );
};

const PurchasePanel = () => {
  return <div>구매 영역</div>;
};
const SellPanel = () => {
  return <div>판매 영역</div>;
};
const PendingPanel = () => {
  return <div>대기 영역</div>;
};

export default Order;

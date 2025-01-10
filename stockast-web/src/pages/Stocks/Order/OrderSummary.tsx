import InterfaceBlock from '../../../components/Blocks/InterfaceBlock';
import { formatCurrency } from '../../../utils/formatUtils';
import React from 'react';
import { OrderSummaryProps } from '../../../types/Order.types';

const OrderSummary: React.FC<OrderSummaryProps> = ({
  watch,
  availableAmount,
}) => {
  const orderPrice = watch('orderPrice');
  const quantity = watch('quantity');
  const totalCost = orderPrice * quantity;
  return (
    <table className='w-full'>
      <tbody>
        <AvailableAmount availableAmount={availableAmount} />
        <TotalOrderPrice totalCost={totalCost} />
      </tbody>
    </table>
  );
};
const AvailableAmount = ({ availableAmount }: { availableAmount: number }) => {
  return (
    <InterfaceBlock className='font-semibold' title='구매가능 금액'>
      <p className='text-right font-semibold'>
        {formatCurrency(availableAmount)}
      </p>
    </InterfaceBlock>
  );
};

const TotalOrderPrice = ({ totalCost }: { totalCost: number }) => {
  return (
    <InterfaceBlock className='font-semibold' title='총 주문 금액'>
      <p className='text-right font-semibold'>{formatCurrency(totalCost)}</p>
    </InterfaceBlock>
  );
};

export default OrderSummary;

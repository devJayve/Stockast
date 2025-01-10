import React, { useState } from 'react';
import { OrderQuantityProps } from '../../../types/Order.types';
import ValueControl from '../../../components/ValueControl/ValueControl';
import TabBar from '../../../components/TabBar';
import InterfaceBlock from '../../../components/Blocks/InterfaceBlock';
import { PriceCategoryEnum } from '../../../enums/PriceCategory.enum';
import { Controller } from 'react-hook-form';

const OrderQuantity: React.FC<OrderQuantityProps> = ({
  defaultPrice,
  control,
  watch,
  setValue,
  maxAskPrice,
  minAskPrice,
  availableAmount,
  error,
}) => {
  const priceCategory = watch('priceCategory');
  const orderPrice = watch('orderPrice');

  // 주식 수량 input에 대한 placeholder 값 함수
  const getQuantityPlaceholder = () => {
    if (orderPrice != defaultPrice) {
      return '수량 입력';
    }
    return `최대 ${Math.floor(availableAmount / defaultPrice)}주 가능`;
  };

  const setQuantity = (value: number) => {
    setValue('quantity', value);
  };

  return (
    <InterfaceBlock title='수량'>
      {
        <div className='w-full flex-col space-y-2'>
          {/*주식 가격에 대한 control*/}
          <Controller
            name='orderPrice'
            control={control}
            render={({ field }) => (
              <ValueControl
                {...field}
                defaultValue={defaultPrice}
                max={maxAskPrice}
                min={minAskPrice}
                step={100}
                unit='원'
                disabled={priceCategory === PriceCategoryEnum.MARKET_PRICE}
                showPlaceholder={
                  priceCategory === PriceCategoryEnum.MARKET_PRICE
                }
                placeholder='최대한 빠른 가격'
              />
            )}
          />
          {/*주식 수량에 대한 control*/}
          <Controller
            name='quantity'
            control={control}
            render={({ field }) => (
              <div>
                <ValueControl
                  {...field}
                  defaultValue={0}
                  max={1000000}
                  min={1}
                  step={1}
                  unit='주'
                  showPlaceholder={field.value === 0 || field.value === ''}
                  placeholder={`${getQuantityPlaceholder()}`}
                  error={error}
                />
                {error && (
                  <p className='text-sm text-red-500'>{error.message}</p>
                )}
              </div>
            )}
          />
          <QuantityRatio
            setQuantity={setQuantity}
            availableAmount={availableAmount}
            stockPrice={orderPrice}
          />
        </div>
      }
    </InterfaceBlock>
  );
};

interface QuantityRatioProps {
  availableAmount: number;
  stockPrice: number;
  setQuantity: (value: number) => void;
}

const QuantityRatio: React.FC<QuantityRatioProps> = ({
  availableAmount,
  stockPrice,
  setQuantity,
}) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const tabClassname = 'flex-grow rounded-xl border-1 border-neutral-500';

  // 탭에 대한 onChange 함수
  const handleTabChange = (value: number) => {
    setSelectedTab(value);
    calOrderQuantityByRatio(value);
  };

  // 구매 가능한 금액 비율에 맞는 주식 수량 계산 함수
  const calOrderQuantityByRatio = (percentage: number) => {
    const orderAmount = availableAmount * percentage;
    const maxQuantity = Math.floor(orderAmount / stockPrice);
    setQuantity(maxQuantity > 0 ? maxQuantity : 0);
  };

  return (
    <TabBar selectedTab={selectedTab} onTabChange={handleTabChange}>
      <TabBar.CircleTab value={0.1} label='10%' className={tabClassname} />
      <TabBar.CircleTab value={0.25} label='25%' className={tabClassname} />
      <TabBar.CircleTab value={0.5} label='50%' className={tabClassname} />
      <TabBar.CircleTab value={1} label='최대' className={tabClassname} />
    </TabBar>
  );
};

export default OrderQuantity;

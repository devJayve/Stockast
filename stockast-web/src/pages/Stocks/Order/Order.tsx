import React, { ReactNode, useState } from 'react';
import TabBar from '../../components/TabBar/TabBar';
import Divider from '../../components/Divder';
import DropDown from '../../components/Dropdown';
import Dropdown from '../../components/Dropdown';
import useDropdown from '../../hooks/useDropdown';
import ValueControl from '../../components/ValueControl/ValueControl';
import { formatCurrency } from '../../utils/formatUtils';
import clsx from 'clsx';
import {
  Control,
  Controller,
  useForm,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { OrderQuantityProps } from '../../types/Order';
import availableBalance from '../Account/AvailableBalance';

enum OrderEnum {
  CUSTOM_PRICE,
  MARKET_PRICE,
}

interface FormValues {
  orderType: OrderEnum; // 주문 타입(시장가, 지정가)
  orderPrice: number; // 주문 가격
  quantity: number; // 수량
}

const Order = () => {
  const availablePrice = 1000000;
  const marketPrice = 54100;

  const { control, handleSubmit, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      orderType: OrderEnum.CUSTOM_PRICE,
      orderPrice: marketPrice,
      quantity: 0,
    },
  });

  const onSubmit = (data: FormValues) => {
    alert('주문 완료');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col space-y-3 rounded-xl bg-neutral-800 p-5'
    >
      <p className='text-lg font-semibold'>주문하기</p>
      <table className='w-full'>
        <tbody>
          <OrderMode />
          <PriceType />
          <OrderMethod control={control} setValue={setValue} watch={watch} />
          <OrderQuantity
            defaultValue={marketPrice}
            control={control}
            setValue={setValue}
            watch={watch}
          />
        </tbody>
      </table>
      <Divider />
      <table className='w-full'>
        <tbody>
          <AvailableSeed />
          <TotalOrderPrice />
        </tbody>
      </table>
      <PurchaseButton />
    </form>
  );
};

const InterfaceBlock = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <tr>
      <td className={clsx(className, 'w-[1%] whitespace-nowrap py-1.5 pr-2')}>
        {title}
      </td>
      <td className='py-1.5'>{children}</td>
    </tr>
  );
};

const OrderMode = () => {
  const { options, onChange, isModalVisible, handleModalVisible, ref } =
    useDropdown(false);

  const modes = ['예약 주문', '조건 주문'];

  return (
    <InterfaceBlock title='주문 유형'>
      {
        <DropDown options={options} onChange={onChange} ref={ref}>
          <Dropdown.Trigger
            handleModalVisible={handleModalVisible}
            label={options ?? '선택하기'}
          />
          {isModalVisible && (
            <Dropdown.Modal>
              {modes.map((mode, index) => (
                <Dropdown.Item key={index} label={mode} />
              ))}
            </Dropdown.Modal>
          )}
        </DropDown>
      }
    </InterfaceBlock>
  );
};

const OrderQuantity: React.FC<OrderQuantityProps> = ({
  defaultValue,
  enabled,
  setValue,
  control,
  watch,
}) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const orderType = watch('orderType');

  const calculateMaxQuantity = (
    availableAmount: number,
    stockPrice: number
  ): number => {
    if (stockPrice <= 0) {
      return 0;
    }
    return Math.floor(availableAmount / stockPrice);
  };

  const maxAskPrice = 70000;
  const minAskPrice = 30000;
  return (
    <InterfaceBlock title='수량'>
      {
        <div className='w-full flex-col'>
          <ValueControl
            defaultValue={defaultValue}
            max={maxAskPrice}
            min={minAskPrice}
            step={100}
            unit='원'
            disabled={orderType === OrderEnum.MARKET_PRICE}
            disabledPlaceHolder='최대한 빠른 가격'
          />
          <ValueControl defaultValue={null} max={} min={} step={1} unit='주' />
          <TabBar selectedTab={selectedTab} onTabChange={setSelectedTab}>
            <TabBar.CircleTab value={0} label='10%' className='flex-grow' />
            <TabBar.CircleTab value={1} label='25%' className='flex-grow' />
            <TabBar.CircleTab value={2} label='50%' className='flex-grow' />
            <TabBar.CircleTab value={3} label='최대' className='flex-grow' />
          </TabBar>
        </div>
      }
    </InterfaceBlock>
  );
};

interface OrderMethodProps {
  control: Control<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  watch: UseFormWatch<FormValues>;
}

const OrderMethod: React.FC<OrderMethodProps> = ({
  control,
  setValue,
  watch,
}) => {
  return (
    <InterfaceBlock title='주문방법'>
      <Controller
        name='orderType'
        control={control}
        render={({ field }) => (
          <TabBar
            selectedTab={field.value}
            onTabChange={(value) => setValue('orderType', value)}
            hasBackground={true}
          >
            <TabBar.InterfaceTab value={0} label={'수량'} />
            <TabBar.InterfaceTab value={1} label={'소수점'} />
          </TabBar>
        )}
      />
    </InterfaceBlock>
  );
};

const PriceType = () => {
  const [priceType, setPriceType] = useState(0);

  return (
    <InterfaceBlock title='구매가격'>
      <TabBar
        selectedTab={priceType}
        onTabChange={setPriceType}
        hasBackground={true}
      >
        <TabBar.InterfaceTab value={0} label={'지정가'} />
        <TabBar.InterfaceTab value={1} label={'시장가'} />
      </TabBar>
    </InterfaceBlock>
  );
};

const AvailableSeed = () => {
  return (
    <InterfaceBlock className='font-semibold' title='구매가능 금액'>
      <p className='text-right font-semibold'>{formatCurrency(1000000)}</p>
    </InterfaceBlock>
  );
};

const TotalOrderPrice = () => {
  return (
    <InterfaceBlock className='font-semibold' title='총 주문 금액'>
      <p className='text-right font-semibold'>0원</p>
    </InterfaceBlock>
  );
};

const PurchaseButton = () => {
  return (
    <button
      type='submit'
      className='rounded-xl bg-red-500 py-2 text-center font-medium'
    >
      구매하기
    </button>
  );
};

export default Order;

import React, { ReactNode, useState } from 'react';
import TabBar from '../../components/TabBar/TabBar';
import Divider from '../../components/Divder';
import DropDown from '../../components/Dropdown';
import Dropdown from '../../components/Dropdown';
import useDropdown from '../../hooks/useDropdown';
import ValueControl from '../../components/ValueControl/ValueControl';
import { formatCurrency } from '../../utils/formatUtils';
import clsx from 'clsx';

const Order = () => {
  return (
    <div className='flex w-full flex-col space-y-3 rounded-xl bg-neutral-800 p-5'>
      <p className='text-lg font-semibold'>주문하기</p>
      <table className='w-full'>
        <tbody>
          <OrderMode />
          <PriceType />
          <OrderMethod />
          <OrderQuantity />
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
    </div>
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

const OrderQuantity = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <InterfaceBlock title='수량'>
      {
        <div className='w-full flex-col'>
          <ValueControl />
          <ValueControl />
          {/*<TabBar selectedTab={selectedTab} onTabChange={setSelectedTab}>*/}
          {/*  <TabBar.CircleTab value={0} label='10%' />*/}
          {/*  <TabBar.CircleTab value={1} label='25%' />*/}
          {/*  <TabBar.CircleTab value={2} label='50%' />*/}
          {/*  <TabBar.CircleTab value={3} label='최대' />*/}
          {/*</TabBar>*/}
        </div>
      }
    </InterfaceBlock>
  );
};

const OrderMethod = () => {
  const [orderMethod, setOrderMethod] = useState(0);

  return (
    <InterfaceBlock title='주문방법'>
      <TabBar
        selectedTab={orderMethod}
        onTabChange={setOrderMethod}
        hasBackground={true}
      >
        <TabBar.InterfaceTab value={0} label={'수량'} />
        <TabBar.InterfaceTab value={1} label={'소수점'} />
      </TabBar>
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
    <div className='rounded-xl bg-red-500 py-2 text-center font-medium'>
      구매하기
    </div>
  );
};

export default Order;

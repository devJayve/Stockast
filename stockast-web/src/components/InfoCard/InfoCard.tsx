import React, { createContext, ReactNode, useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import {
  InfoCardContentProps,
  InfoCardContextType,
  InfoCardProps,
} from '../../types/InfoCard.types';
import ValueDisplay from '../ValueDisplay/ValueDisplay';

const InfoCardContext: InfoCardContextType | null = createContext(null);

const useInfoCardContext = () => {
  const context = useContext(InfoCardContext);
  if (!context) {
    throw Error('useInfoCardContext');
  }
  return context;
};

const InfoCard = ({
  children,
  value,
  originalValue,
}: InfoCardProps & InfoCardContextType) => {
  return (
    <InfoCardContext.Provider value={{ value, originalValue }}>
      <div className='relative flex space-x-2 rounded-xl bg-neutral-800 p-5'>
        {children}
      </div>
    </InfoCardContext.Provider>
  );
};

const Stat = ({ children }: { children: ReactNode }) => {
  return <div className='flex min-h-16 flex-col'>{children}</div>;
};
const IndexContent = ({ label, iconUrl }: InfoCardContentProps) => {
  return (
    <div className='flex h-full flex-col justify-between'>
      <div className='flex items-baseline space-x-1'>
        <span className='text-sm'>{label}</span>
        <img className='h-2.5 w-auto' src={iconUrl} />
      </div>
      <p className='text-xl font-semibold'>729.04</p>
    </div>
  );
};

const BalanceContent = ({ label, iconUrl }: InfoCardContentProps) => {
  const { value } = useInfoCardContext();
  return (
    <div className='flex h-full flex-col justify-between'>
      <div className='flex items-baseline space-x-1'>
        <img className='h-2.5 w-auto' src={iconUrl} />
        <span className='text-sm'>{label}</span>
      </div>
      <p className='font-medium'>{value}원</p>
    </div>
  );
};

const ChangeRate = () => {
  const { value, originalValue } = useInfoCardContext();
  return (
    <div>
      <ValueDisplay value={value} originValue={originalValue} />
    </div>
  );
};

const Chart = () => {
  return <div className='bg-white'>차트</div>;
};

const Detail = () => {
  return (
    <div className='absolute inset-0 z-10 flex cursor-pointer items-end justify-end rounded-xl p-3 text-white opacity-0 transition-opacity duration-300 hover:opacity-100'>
      <div className='flex items-center'>
        <span>자세히 보기</span>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

InfoCard.Stat = Stat;
InfoCard.IndexContent = IndexContent;
InfoCard.BalanceContent = BalanceContent;
InfoCard.ChangeRate = ChangeRate;
InfoCard.Chart = Chart;
InfoCard.Detail = Detail;

export default InfoCard;

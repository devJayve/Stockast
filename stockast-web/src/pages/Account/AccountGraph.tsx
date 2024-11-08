import React, { useState } from 'react';
import {
  GRAPH_INTERVAL,
  getGraphIntervalLabel,
} from '../../enums/GraphInterval.enum';
const AccountGraph = () => {
  const [selectedInterval, setSelectedInterval] = useState<GRAPH_INTERVAL>(
    GRAPH_INTERVAL.WEEK
  );

  const changeInterval = (interval: GRAPH_INTERVAL) => {
    setSelectedInterval(interval);
  };

  return (
    <div>
      <Header />
      <Graph interval={selectedInterval} />
      <label className='my-2 flex space-x-2'>
        {Object.values(GRAPH_INTERVAL).map((interval, index) => (
          <GraphVisualRadio
            key={index}
            title={getGraphIntervalLabel(interval)}
            value={interval}
            changeInterval={changeInterval}
            isActive={selectedInterval == interval}
          />
        ))}
      </label>
    </div>
  );
};

const Header = () => {
  return (
    <div className='my-2'>
      <p className='text-xl font-semibold'>1,000,000원</p>
      <div className='flex'>
        <p className='mr-2'>지난주보다</p>
        <p className='text-red-500'>+100,000원(10.0%)</p>
      </div>
    </div>
  );
};

const Graph = ({ interval }: { interval: GRAPH_INTERVAL }) => {
  return <div className='h-[200px] w-full bg-blue-500'>{interval}</div>;
};

const GraphVisualRadio = ({
  title,
  value,
  changeInterval,
  isActive,
}: {
  title: string;
  value: string;
  changeInterval: (interval: string) => void;
  isActive: boolean;
}) => {
  return (
    <div
      className={`cursor-pointer rounded-2xl px-4 py-0.5 font-light text-neutral-300 ${isActive && 'bg-white bg-opacity-10 font-normal text-white'}`}
      onClick={() => changeInterval(value)}
    >
      {title}
    </div>
  );
};

export default AccountGraph;

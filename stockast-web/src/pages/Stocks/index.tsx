import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StockHeader from './StockHeader';
import StockGraph from './StockGraph';
import DailyQuote from './DailyQuote';
import Order from './Order';

const Stocks = () => {
  const { stockId } = useParams();

  const [width, setWidth] = useState(() => {
    const savedWidth = localStorage.getItem('resizableWidth');
    return savedWidth ? parseFloat(savedWidth) : 70;
  });

  const [isResizing, setIsResizing] = useState(false);
  const minWidth = 20;
  const maxWidth = 80;

  function handleMouseDown() {
    setIsResizing(true);
  }

  function handleMouseMove(e) {
    let newWidth = (e.clientX / window.innerWidth) * 100;
    if (newWidth < minWidth) newWidth = minWidth;
    if (newWidth > maxWidth) newWidth = maxWidth;

    setWidth(newWidth);
  }
  function handleMouseUp() {
    setIsResizing(false);
  }

  useEffect(() => {
    localStorage.setItem('resizableWidth', width.toString());
  }, [width]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className='flex h-full flex-col'>
      <StockHeader />
      <ResizedLayout handleMouseDown={handleMouseDown} width={width} />
    </div>
  );
};

const ResizedLayout = ({
  width,
  handleMouseDown,
}: {
  width: number;
  handleMouseDown: () => void;
}) => {
  return (
    <div className='flex flex-grow'>
      <div className='flex-col' style={{ width: `${width}%` }}>
        <StockGraph />
        <DailyQuote />
      </div>
      <div
        className='w-1 cursor-col-resize bg-blue-500'
        onMouseDown={handleMouseDown}
      ></div>
      <div className='flex-grow'>
        <Order />
      </div>
    </div>
  );
};

export default Stocks;

import React, { useEffect, useRef } from 'react';
import { Chart, dispose, init, LineType } from 'klinecharts';
import generatedDataList from './generatedDataList';

const StockChart = () => {
  const chart = useRef<Chart | null>();
  const paneId = useRef<string>('');

  useEffect(() => {
    chart.current = init('stock-chart', {
      styles: {
        grid: {
          horizontal: {
            color: '#646464',
          },
          vertical: {
            color: '#646464',
          },
        },
        xAxis: {
          axisLine: {
            color: '#646464',
          },
          tickLine: {
            color: '#646464',
          },
          tickText: {
            color: '#dcdcdc',
          },
        },
        yAxis: {
          axisLine: {
            color: '#646464',
          },
          tickLine: {
            color: '#646464',
          },
          tickText: {
            color: '#dcdcdc',
          },
        },
        candle: {
          tooltip: {
            showRule: 'none',
          },
          bar: {
            upColor: '#3e6ff5',
            downColor: '#da3334',
            upWickColor: '#3e6ff5',
            downWickColor: '#da3334',
            upBorderColor: '#3e6ff5',
            downBorderColor: '#da3334',
            noChangeColor: '#ffffff',
          },
          priceMark: {
            high: {
              color: '#da3334',
            },
            low: {
              color: '#3e6ff5',
            },
            last: {
              upColor: '#3e6ff5',
              downColor: '#da3334',
            },
          },
        },
      },
    });

    chart?.current?.createIndicator('VOL', false, { id: paneId.current });
    chart.current?.overrideIndicator({
      name: 'VOL',
      styles: {
        bars: [
          {
            upColor: '#3e6ff5',
            downColor: '#da3334',
            noChangeColor: '#ffffff',
          },
        ],
        lines: [],
      },
    });
    chart?.current?.applyNewData(generatedDataList());
    return () => {
      dispose('real-time-k-line');
    };
  }, []);

  return (
    <div className='flex w-full flex-1 flex-col rounded-xl bg-neutral-800 p-5'>
      <div id='stock-chart' className='flex flex-grow' />
    </div>
  );
};

export default StockChart;

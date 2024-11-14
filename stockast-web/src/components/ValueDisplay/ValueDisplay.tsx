import React from 'react';
import clsx from 'clsx';

interface ValueDisplayProps {
  value: number;
  originValue: number;
}

const ValueDisplay = ({ value, originValue }: ValueDisplayProps) => {
  const difference = (value - originValue).toFixed(2);

  function formatDifference() {
    return parseFloat(difference) > 0 ? `+${difference}` : difference;
  }

  const changeRate =
    originValue !== 0 ? ((difference / originValue) * 100).toFixed(2) : '0';

  const getColor = () => {
    if (difference > 0) return 'text-red-500';
    if (difference < 0) return 'text-blue-500';
    return 'text-gray-500';
  };

  return (
    <div
      className={clsx('flex items-baseline space-x-1 font-medium', getColor())}
    >
      <p>{formatDifference()}</p>
      <p>({changeRate}%)</p>
    </div>
  );
};

export default ValueDisplay;

import React, { useEffect, useRef, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const ValueControl = () => {
  const defaultValue = 12342;
  const [quantity, setQuantity] = useState<number>(defaultValue);
  const ref = useRef<HTMLInputElement>(null);
  const min = 1;
  const max = 100000;
  const step = 1;
  const currency = '원';
  const updateQuantity = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      setQuantity(newValue);
    }
  };

  const handleIncrement = () => updateQuantity(quantity + step);
  const handleDecrement = () => updateQuantity(quantity - step);
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value.replace(/,/g, ''), 10);
    if (inputValue === '' || isNaN(inputValue)) {
      setQuantity('');
      return;
    }
    setQuantity(inputValue);
  };

  const handleBlur = () => {
    if (quantity === '') {
      setQuantity(defaultValue);
    }
  };

  useEffect(() => {
    if (ref.current) {
      const inputElement = ref.current;
      inputElement.style.width = `${inputElement.value.length + 1}ch`; // 동적 크기 조정
    }
  }, [quantity]);

  return (
    <div className='flex items-center justify-between rounded-lg border-1 border-white/20 p-1'>
      <div className='flex'>
        <input
          ref={ref}
          type='number'
          value={quantity}
          onBlur={handleBlur}
          onChange={handleQuantityChange}
          className='min-w-0 bg-transparent'
        />
        <span>{currency}</span>
      </div>
      <div className='flex'>
        <button onClick={handleDecrement} className=''>
          <FiMinus size={15} strokeWidth={2} opacity={0.5} />
        </button>
        <button onClick={handleIncrement}>
          <FiPlus size={15} strokeWidth={2} opacity={0.5} />
        </button>
      </div>
    </div>
  );
};

export default ValueControl;

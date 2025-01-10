import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { ValueControlProps } from '../../types/Order.types';
import { formatNumberWithComma } from '../../utils/formatUtils';
import clsx from 'clsx';

const ValueControl = forwardRef<HTMLInputElement, ValueControlProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      max,
      min,
      step = 1,
      unit,
      disabled,
      placeholder,
      showPlaceholder,
      error,
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [quantity, setQuantity] = useState<string>(
      formatNumberWithComma(value as number)
    );

    // step 만큼 값을 증가, 감소시키는 함수
    const handleIncrement = () => updateQuantity(Number(value) + step);
    const handleDecrement = () => updateQuantity(Number(value) - step);

    // 최소, 최대을 넘지 않도록 조절하는 함수
    const updateQuantity = (newValue: number) => {
      if (newValue >= min && newValue <= max) {
        onChange(newValue);
      }
    };

    // 수량 변화시 NaN 등 이상 값 방지하는 함수
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = parseInt(e.target.value.replace(/,/g, ''), 10);
      if (isNaN(inputValue)) {
        onChange('');
        return;
      }
      onChange(inputValue);
    };

    // blur시 값 초기화하는 함수
    const handleBlur = () => {
      if (value === '') {
        onChange(defaultValue);
      }
    };

    useEffect(() => {
      setQuantity(formatNumberWithComma(value));
      if (inputRef.current) {
        const inputElement = inputRef.current;
        if (disabled || showPlaceholder) {
          inputElement.style.width = '100%';
        } else {
          inputElement.style.width = `${inputElement.value.length + 0.5}ch`;
        }
      }
    }, [value, disabled]);

    return (
      <div
        className={clsx(
          'flex items-center justify-between rounded-lg border-1 border-white/20 px-3 py-1',
          error && 'border-red-500'
        )}
      >
        <div className='flex'>
          <input
            ref={inputRef}
            type='text'
            value={showPlaceholder ? '' : formatNumberWithComma(value)}
            placeholder={showPlaceholder ? placeholder : ''}
            onBlur={handleBlur}
            onChange={handleQuantityChange}
            className='min-w-0 bg-transparent focus:outline-none'
            disabled={disabled}
          />
          {!showPlaceholder && <span>{unit}</span>}
        </div>
        <div className='flex gap-x-1'>
          <button
            type='button'
            disabled={disabled}
            onClick={handleDecrement}
            className=''
          >
            <FiMinus size={15} strokeWidth={2} opacity={0.5} />
          </button>
          <button type='button' disabled={disabled} onClick={handleIncrement}>
            <FiPlus size={15} strokeWidth={2} opacity={0.5} />
          </button>
        </div>
      </div>
    );
  }
);

ValueControl.displayName = 'ValueControl';
export default ValueControl;

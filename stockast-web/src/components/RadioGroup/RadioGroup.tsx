import React from 'react';
import { RadioGroupProps, RadioOptionProps } from '../../types/Radio.types';

const RadioGroup = ({
  options,
  onChange,
  value,
  activeColor = 'bg-neutral-200/20',
}: RadioGroupProps) => {
  return (
    <div className='my-2 flex space-x-2'>
      {options.map((option) => {
        const optionId = `radio-option-${option.label}`;
        const isChecked = value === option.value;

        return (
          <RadioOption
            key={optionId}
            id={optionId}
            label={option.label}
            value={option.value}
            checked={isChecked}
            onChange={onChange}
            activeColor={activeColor}
          />
        );
      })}
    </div>
  );
};

const RadioOption = ({
  label,
  id,
  value,
  activeColor,
  checked,
  ...rest
}: RadioOptionProps) => {
  return (
    <div className='flex'>
      <input
        type='radio'
        value={value}
        id={id}
        checked={checked}
        {...rest}
        className='peer'
      />
      <label
        htmlFor={id}
        className={`cursor-pointer rounded-full px-3 py-1 text-neutral-200 peer-checked:font-semibold peer-checked:text-white ${checked && `${activeColor}`}`}
      >
        <span>{label}</span>
      </label>
    </div>
  );
};

export default RadioGroup;

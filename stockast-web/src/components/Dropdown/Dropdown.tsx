import React, { createContext, useContext, forwardRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
  DropdownContextType,
  DropdownProps,
  ModalProps,
  TriggerProps,
} from '../../types/Dropdown.types';
import clsx from 'clsx';

const DropdownContext: DropdownContextType | null = createContext(null);

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw Error('Drowdown context has problem');
  }
  return context;
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, ...rest }, ref) => {
    return (
      <DropdownContext.Provider value={{ ...rest }}>
        <div ref={ref} className='relative'>
          {children}
        </div>
      </DropdownContext.Provider>
    );
  }
);
const Modal = ({ controls, children }: ModalProps) => {
  return (
    <div className='absolute top-full w-full rounded-xl bg-neutral-700 p-2'>
      <div>{children}</div>
      {controls}
    </div>
  );
};

const Trigger = ({ label, handleModalVisible }: TriggerProps) => {
  return (
    <div
      className='flex items-center justify-between rounded-lg border-1 border-white/20 p-2'
      onClick={handleModalVisible}
    >
      {label}
      <IoIosArrowDown opacity='0.5' />
    </div>
  );
};

const Item = ({ label }: { label: string }) => {
  const { options, onChange } = useDropdownContext();

  const isActive = Array.isArray(options)
    ? options.includes(label)
    : options === label;
  return (
    <div
      className={clsx({ 'bg-blue-950': isActive })}
      onClick={() => onChange(label)}
    >
      {label}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.Modal = Modal;
Dropdown.Trigger = Trigger;
Dropdown.Item = Item;

export default Dropdown;

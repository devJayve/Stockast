import React, { ReactNode } from 'react';
import { Props } from '../../types/MetricsTable.types';
import clsx from 'clsx';

const MetricsTable = ({ children }: React.PropsWithChildren) => {
  return <table className='table-auto text-neutral-300'>{children}</table>;
};

const Header = ({ children }: React.PropsWithChildren) => {
  return (
    <thead>
      <tr className='border-b-0.5 border-neutral-500 text-right text-sm text-neutral-300'>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const className =
              index === 0
                ? `${child.props.className || ''} text-left`
                : child.props.className;
            return React.cloneElement(child, { className });
          }
          return child;
        })}
      </tr>
    </thead>
  );
};

const Column = ({ children, className }: Props) => {
  return <th className={clsx('py-2', className)}>{children}</th>;
};

const Row = ({ children, className }: Props) => {
  return (
    <tr className={clsx('text-right', className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const className =
            index === 0
              ? `${child.props.className || ''} text-left`
              : child.props.className;
          return React.cloneElement(child, { className });
        }
        return child;
      })}
    </tr>
  );
};

const Body = ({ children, className }: Props) => {
  return <tbody className={className}>{children}</tbody>;
};

const Cell = ({ children, className }: Props) => {
  return <td className={clsx('py-1', className)}>{children}</td>;
};

MetricsTable.Header = Header;
MetricsTable.Column = Column;
MetricsTable.Body = Body;
MetricsTable.Row = Row;
MetricsTable.Cell = Cell;

export default MetricsTable;

import React, { ReactNode } from 'react';
import clsx from 'clsx';

const InterfaceBlock = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <tr>
      <td className={clsx(className, 'w-[1%] whitespace-nowrap py-1.5 pr-2')}>
        {title}
      </td>
      <td className='py-1.5'>{children}</td>
    </tr>
  );
};

export default InterfaceBlock;

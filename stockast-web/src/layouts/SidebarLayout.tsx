import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import clsx from 'clsx';

const SidebarLayout = () => {
  const tabs = [
    { name: '자산', path: '/account/asset' },
    { name: '거래 내역', path: '/account/transaction' },
    { name: '주문 내역', path: '/account/orders' },
    { name: '판매 수익', path: '/account/profit' },
  ];

  return (
    <div className='flex h-screen bg-neutral-900 text-white'>
      <aside className='flex flex-col space-y-4 border-r border-neutral-800 px-6 py-4'>
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              clsx(
                'py-2 text-left font-medium transition-all duration-300 hover:text-blue-400',
                isActive && 'font-semibold text-blue-500'
              )
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </aside>
      <main className='flex-grow p-8'>
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;

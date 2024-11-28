import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';

const SidebarLayout = () => {
  const tabs = [
    { name: '자산', path: '/account/asset' },
    { name: '거래 내역', path: '/account/transaction' },
    { name: '주문 내역', path: '/account/orders' },
    { name: '판매 수익', path: '/account/profit' },
  ];

  return (
    <div className='h-screen flex-col bg-neutral-900 text-white'>
      <nav className='flex items-center justify-between p-4'>
        <img src='/images/logo.png' width='80px' />
        <div className='flex space-x-6'>
          <Link to='/'>홈</Link>
          <Link to='/account/asset'>내 계좌</Link>
        </div>
        <div></div>
      </nav>
      <div className='flex'>
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
    </div>
  );
};

export default SidebarLayout;

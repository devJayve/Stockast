import React from 'react';
import AccountGraph from './AccountGraph';
import InvestedBalance from './InvestedBalance';
import AvailableBalance from './AvailableBalance';
import InvestmentList from './InvestmentList';

const Account = () => {
  return (
    <div className='mx-8'>
      <AccountGraph />
      <InvestmentList />
      <AvailableBalance />
      <InvestedBalance />
    </div>
  );
};

export default Account;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Account from './pages/Account';
import NonFooterLayout from './layouts/NonFooterLayout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
      </Route>
      <Route element={<NonFooterLayout />}></Route>
    </Routes>
  );
};

export default App;

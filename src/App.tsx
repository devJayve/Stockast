import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Account from './pages/Account';
import NonFooterLayout from './layouts/NonFooterLayout';
import { Provider } from 'react-redux';
import store from './store';
import AuthRoute from './components/AuthRoute';
import Signin from './pages/Signin';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route element={<Layout />}>
          <Route element={<AuthRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
          </Route>
        </Route>
        <Route element={<NonFooterLayout />}></Route>
      </Routes>
    </Provider>
  );
};

export default App;

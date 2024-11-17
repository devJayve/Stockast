import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Signin from '../../pages/Signin';
import Layout from '../../layouts/Layout';
import AuthRoute from './AuthRoute';
import Home from '../../pages/Home';
import Account from '../../pages/Account';
import NonFooterLayout from '../../layouts/NonFooterLayout';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/authSlice';
import NotAuthRoute from './NotAuthRoute';
import Landing from '../../pages/Landing';
import { verifyToken } from '../../services/AuthService';
import Stocks from '../../pages/Stocks';
import NotFound from '../../pages/NotFound';
import { authUser } from '../../api/userApi';
import Test from '../../pages/Test';
import SidebarLayout from '../../layouts/SidebarLayout';
import Profit from '../../pages/Profit';
import Orders from '../../pages/Orders';
import Transaction from '../../pages/Transaction';

const MainRoutes = () => {
  const isDevMode = process.env.NODE_ENV === 'development';
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user?.isAuth);
  const isLoading = useSelector((state) => state.isLoading);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch]);

  if (isLoading) {
    return <Landing />;
  }

  return (
    <Routes>
      {/* 로그인한 유저만 이동가능한 경로 */}
      <Route element={<AuthRoute isAuth={isAuth} />}>
        <Route element={<Layout />}>
          {isDevMode && <Route path='/test' element={<Test />} />}
          <Route path='/' element={<Home />} />
          <Route path='/stocks/:stockId' element={<Stocks />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        {/*내 계좌 사이드바에 해당하는 경로*/}
        <Route element={<SidebarLayout />}>
          <Route path='/account/asset' element={<Account />} />
          <Route path='/account/transaction' element={<Transaction />} />
          <Route path='/account/orders' element={<Orders />} />
          <Route path='/account/profit' element={<Profit />} />
        </Route>
        <Route element={<NonFooterLayout />}></Route>
      </Route>
      {/* 로그인하지 않은 유저만 이동가능한 경로 */}
      <Route element={<NotAuthRoute isAuth={isAuth} />}>
        <Route path='/signin' element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;

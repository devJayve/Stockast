import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from '../../pages/Signin';
import Layout from '../../layouts/Layout';
import AuthRoute from './AuthRoute';
import Home from '../../pages/Home';
import Account from '../../pages/Account';
import NonFooterLayout from '../../layouts/NonFooterLayout';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { login, logout } from '../../store/authSlice';
import NotAuthRoute from './NotAuthRoute';
import Landing from '../../pages/Landing';

const MainRoutes = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(login({ uid, displayName, email, photoURL }));
      } else {
        dispatch(logout());
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) {
    return <Landing />;
  }

  return (
    <Routes>
      {/* 로그인한 유저만 이동가능한 경로 */}
      <Route element={<AuthRoute />}>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
        </Route>
        <Route element={<NonFooterLayout />}></Route>
      </Route>
      {/* 로그인하지 않은 유저만 이동가능한 경로 */}
      <Route element={<NotAuthRoute />}>
        <Route path='/signin' element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;

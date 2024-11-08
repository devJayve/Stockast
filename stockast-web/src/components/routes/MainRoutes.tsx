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
import { verifyToken } from '../../services/AuthService';
import firebase from 'firebase/compat';

const MainRoutes = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const isValid = await verifyToken();
      console.log('isValid', isValid);
      if (isValid) {
        const test_user = { uid: '', displayName: '', email: '', photoURL: '' };

        dispatch(
          login({
            uid: test_user.uid,
            displayName: test_user.displayName,
            email: test_user.email,
            photoURL: test_user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      setIsLoading(false);
    }

    checkAuth();
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store';

const Signin = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleLogin = () => {
    dispatch(login());
  };

  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return (
    <div>
      <h3>Stockasting</h3>
      <button className='bg-blue-900 text-white' onClick={handleLogin}>
        로그인하기
      </button>
    </div>
  );
};

export default Signin;

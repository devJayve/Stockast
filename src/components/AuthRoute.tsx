import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? <Outlet /> : <Navigate to='/signin' replace />;
};

export default AuthRoute;

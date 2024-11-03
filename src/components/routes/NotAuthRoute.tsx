import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate, Outlet } from 'react-router-dom';

const NotAuthRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? <Navigate to='/' replace /> : <Outlet />;
};

export default NotAuthRoute;

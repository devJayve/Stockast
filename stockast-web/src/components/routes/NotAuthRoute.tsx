import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate, Outlet } from 'react-router-dom';

const NotAuthRoute = ({ isAuth }: { isAuth: boolean }) => {
  return isAuth ? <Navigate to='/' replace /> : <Outlet />;
};

export default NotAuthRoute;

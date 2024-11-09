import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = ({ isAuth }: { isAuth: boolean }) => {
  return isAuth ? <Outlet /> : <Navigate to='/signin' replace />;
};

export default AuthRoute;

import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../api/userApi';

function Layout() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logoutUser(dispatch);
  };

  return (
    <div className='flex h-screen w-screen flex-col'>
      <nav className='flex items-center justify-between p-4'>
        <img src='/images/logo.png' width='80px' />
        <div className='flex space-x-6'>
          <Link to='/'>홈</Link>
          <Link to='/account/asset'>내 계좌</Link>
        </div>
        <div></div>
      </nav>

      <main className='container mx-auto min-h-0 flex-grow px-4'>
        <Outlet />
      </main>

      <footer className='flex items-center justify-center bg-neutral-900 p-4'>
        <button onClick={handleLogout}>로그아웃</button>
      </footer>
    </div>
  );
}

export default Layout;

import { Outlet, Link } from 'react-router-dom';
import { signOutWithGoogle } from '../services/AuthService';

function Layout() {
  const handleLogout = async () => {
    await signOutWithGoogle();
  };

  return (
    <div>
      <nav className='flex items-center justify-between p-4'>
        <img src='/images/logo.png' width='80px' />
        <div className='flex space-x-6'>
          <Link to='/'>홈</Link>
          <Link to='/account'>내 계좌</Link>
        </div>
        <div></div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <button onClick={handleLogout}>로그아웃</button>
      </footer>
    </div>
  );
}

export default Layout;

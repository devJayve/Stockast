import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

function Layout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/account'>계좌 정보</Link>
      </nav>

      <main>
        <Outlet /> {/* 자식 경로의 컴포넌트가 여기에 렌더링됨 */}
      </main>

      <footer>
        <p>Footer Content</p>
        <button onClick={handleLogout}>로그아웃</button>
      </footer>
    </div>
  );
}

export default Layout;

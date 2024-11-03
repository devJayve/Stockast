import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NonFooterLayout = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/account'>계좌 정보</Link>
      </nav>

      <main>
        <Outlet /> {/* 자식 경로의 컴포넌트가 여기에 렌더링됨 */}
      </main>
    </div>
  );
};

export default NonFooterLayout;

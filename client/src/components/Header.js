import { Link, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';

function Header() {
  return (
    <>
      <nav>
        <Link to="/">로고</Link> about products for teams 검색{' '}
        <Link to="login">로그인</Link> <Link to="signup">회원가입</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default Header;

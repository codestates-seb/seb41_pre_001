import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">로고</Link> about products for teams 검색{' '}
        <Link to="login">로그인</Link> <Link to="signup">회원가입</Link>
      </nav>
    </header>
  );
}

export default Header;

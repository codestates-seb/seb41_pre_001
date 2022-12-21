import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const Nav = styled.nav`
  height: 50px;
  background-color: grey;
`;

function TempHeader() {
  return (
    <>
      <Nav>
        <Link to="/">로고</Link> about products for teams 검색{' '}
        <Link to="/login">로그인</Link> <Link to="/signup">회원가입</Link>
      </Nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default TempHeader;

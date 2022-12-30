import styled from 'styled-components';
import { useRef } from 'react';
import { ReactComponent as ILogo } from '../asset/logo/logo-stackoverflow.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Line from '../components/Line';
import StyledInput, { INPUT_TYPE_SEARCH } from '../components/StyledInput';

import { ControlledMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/transitions/slide.css';
import NavSidebar from './NavSidebar';
import { IS_ALIVE, logout } from '../util/tokenHelper';

const HamburgerContainer = styled.div`
  display: ${(props) => (props.isBugerVisible ? 'inline-block' : 'none')};
`;

const NavigationContainer = styled.div`
  position: fixed;
  width: 100vw;
  background-color: #f8f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  font: unset;
`;

const Navigation = styled.nav`
  width: 1270px;
  height: 50px;
  display: inline-flex;
  background-color: #f8f9f9;
  flex-direction: row;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 166px;
  height: 47px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const Btn = styled(Link)`
  height: 35px;
  padding: 6px 8px;
  margin: 0px 4px;
  background-color: ${(props) => (props.fill ? '#e1ecf4' : '#169aff')};
  color: ${(props) => (props.fill ? '#39739d' : 'white')};
  border: ${(props) => (props.fill ? '#39739d' : '169aff')} solid 1px;
  border-radius: 2px;
  text-align: center;
`;

const Logout = styled.button`
  height: 35px;
  padding: 6px 8px;
  background-color: #e36049;
  color: white;
  border: #39739d solid 1px;
  border-radius: 2px;
  text-align: center;
  font-size: 16px;
`;

/**
 * Created by @KimTank
 * @param { isOpen, setOpen, isBugerVisible, setIsBugerVisible }
 * @returns <NavigationContainer>
 */
function Header({ isOpen, setOpen, isBugerVisible, setIsBugerVisible }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const outCo = 'https://stackoverflow.co/';
  const outCoTe = 'https://stackoverflow.co/teams/';
  const handleLogout = () => {
    //로그아웃 서버에 토큰저장안함.
    logout();
    navigate('/login');
  };

  return (
    <NavigationContainer>
      <Line />
      <Navigation>
        <HamburgerContainer
          ref={ref}
          onPointerEnter={() => setOpen(true)}
          isBugerVisible={isBugerVisible}
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={16}
            direction={'right'}
            duration={0.1}
            rounded
          />
        </HamburgerContainer>
        <ControlledMenu
          state={isOpen ? 'open' : 'closed'}
          anchorRef={ref}
          onPointerLeave={() => setOpen(false)}
          onClose={() => setOpen(false)}
          transition
        >
          <NavSidebar />
        </ControlledMenu>
        <LogoContainer>
          <Link to="/">
            <ILogo width="150px" height="30px" />
          </Link>
        </LogoContainer>
        <StyledInput
          isBugerVisible={isBugerVisible}
          placeholder={'Search...'}
          type={INPUT_TYPE_SEARCH}
        />
        <a href={outCo} style={{ margin: '0px 4px' }}>
          About
        </a>
        <a href={outCoTe} style={{ margin: '0px 4px' }}>
          For Teams
        </a>
        <Btn fill="true" to="login">
          Log in
        </Btn>
        <Btn to="signup">Sign up</Btn>
        {IS_ALIVE() ? <Logout onClick={handleLogout}>Log out</Logout> : ''}
        <button onClick={() => setIsBugerVisible(!isBugerVisible)} />
        <Link to="temp">임시</Link>
      </Navigation>
      <Line grey={'true'} />
    </NavigationContainer>
  );
}

export default Header;

import styled from 'styled-components';
import { useRef } from 'react';
import { ReactComponent as ILogo } from '../asset/logo/logo-stackoverflow.svg';
import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Line from '../components/Line';
import StyledInput, { INPUT_TYPE_SEARCH } from '../components/StyledInput';

import { ControlledMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/transitions/slide.css';
import NavSidebar from './NavSidebar';

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
  width: 60px;
  padding: 6px 8px;
  background-color: ${(props) => (props.fill ? '#e1ecf4' : '#169aff')};
  color: ${(props) => (props.fill ? '#39739d' : 'white')};
  border: ${(props) => (props.fill ? '#39739d' : '169aff')} solid 1px;
  border-radius: 2px;
  text-align: center;
`;

const Span = styled.span`
  padding: 6px 4px;
`;

/**
 * Created by @KimTank
 * @param { isOpen, setOpen, isBugerVisible, setIsBugerVisible }
 * @returns <NavigationContainer>
 */
function Header({ isOpen, setOpen, isBugerVisible, setIsBugerVisible }) {
  const outCo = 'https://stackoverflow.co/';
  const outCoTe = 'https://stackoverflow.co/teams/';
  const ref = useRef(null);

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
        <Span>
          <a href={outCo}>About</a>
        </Span>
        <Span>
          <a href={outCoTe}>For Teams</a>
        </Span>
        <Span>
          <Btn fill="true" to="login">
            Log in
          </Btn>
        </Span>
        <Span>
          <Btn to="signup">Sign up</Btn>
        </Span>
        <button onClick={() => setIsBugerVisible(!isBugerVisible)} />
      </Navigation>
      <Line grey={'true'} />
    </NavigationContainer>
  );
}

export default Header;

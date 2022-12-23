import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ILogo } from '../asset/logo/logo-stackoverflow.svg';
import { ReactComponent as ISearch } from '../asset/icon/icon-search.svg';
import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';

const Navigation = styled.nav`
  width: 100vw;
  height: 50px;
  background-color: #f8f9f9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font: unset;
`;

const LogoContainer = styled.div`
  width: 166px;
  height: 47px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const SearchContainer = styled.div`
  background-color: white;
  border: #babfc4 solid 1px;
  border-radius: 4px;
  width: 800px;
  padding: 8px 8px;
  margin: 0px 8px;
  display: flex;
  align-items: center;

  &:focus,
  &:focus-within {
    outline: none;
    border-color: #aedafc;
    border-width: 4px;
  }
`;

const Span = styled.span`
  padding: 6px 4px;
`;

const InputSearch = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
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

const Line = styled.hr`
  background-color: ${(props) => (props.grey ? '#babfc4' : '#f48225')};
  height: ${(props) => (props.grey ? '1px' : '4px')};
`;

function Header() {
  const [isOpen, setOpen] = useState(false);

  const searchInputRef = React.createRef();
  const searchInputPlaceholder = 'Search...';
  const outCo = 'https://stackoverflow.co/';
  const outCoTe = 'https://stackoverflow.co/teams/';

  return (
    <header style={{ position: 'fixed' }}>
      <Line />
      <Navigation>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={16}
          direction={'right'}
          duration={0.1}
          rounded
        />
        <LogoContainer>
          <Link to="/">
            <ILogo width="150px" height="30px" />
          </Link>
        </LogoContainer>
        <SearchContainer>
          <ISearch />
          <InputSearch
            ref={searchInputRef}
            placeholder={searchInputPlaceholder}
            onMouseEnter={() => searchInputRef.current.focus()}
          />
        </SearchContainer>{' '}
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
      </Navigation>
      <Line grey />
    </header>
  );
}

export default Header;

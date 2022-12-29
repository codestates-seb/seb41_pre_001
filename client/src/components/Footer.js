import styled from 'styled-components';
import { ReactComponent as Logo } from '../asset/logo/logo-glyph-md.svg';
import { handleDonateMe } from '../util/alertStore';

const FooterContainer = styled.footer`
  min-width: 640px;
  max-width: 100%;
  width: 100%;
  height: 322px;
  background-color: black;
  color: #919996;
  display: flex;
  flex-direction: 'row';
  align-items: stretch;
  justify-content: center;
  padding: 30px 10px;
  font-size: 13px;
`;

const DirectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 70px 0px 20px;
`;

const Title = styled.strong`
  font-size: 14px;
  color: #babfc4;
  padding: 0px 0px 16px 0px;
`;

/**
 * Created by TY
 * @param { title, contents = [] }
 * @returns
 */
const FooterList = ({ title, contents = [] }) => {
  return (
    <>
      <DirectionDiv>
        <Title>{title}</Title>
        <ul>
          {contents.map((data, index) => (
            <li style={{ padding: '0px 0px 8px 0px' }} key={index}>
              {data}
            </li>
          ))}
        </ul>
      </DirectionDiv>
    </>
  );
};

const Span = styled.span`
  padding: 0px 8px 0px 0px;
`;

/**
 * Created by @KimTank
 * @returns <FooterContainer>
 */
function Footer() {
  const handleClick = () => {
    handleDonateMe();
  };
  return (
    <FooterContainer onClick={() => handleClick()}>
      <Logo width="64px" />
      <FooterList title={'STACK OVERFLOW'} contents={['Questions', 'Help']} />
      <FooterList
        title={'PRODUCTS'}
        contents={['Teams', 'Advertising', 'Collectives', 'Talent']}
      />
      <FooterList
        title={'COMPANY'}
        contents={[
          'About',
          'Press',
          'Work Here',
          'Legal',
          'Privacy Policy',
          'Terms of Service',
          'Contact Us',
          'Cookie Settings',
          'Cookie Policy',
        ]}
      />
      <FooterList
        title={'STACK EXCHANGE NETWORK'}
        contents={[
          'Technology',
          'Culture & recreation',
          'Life & arts',
          'Science',
          'Professional',
          'Business',
          '　',
          'API',
          'Data',
        ]}
      />
      <div style={{ width: '320px' }}>
        <div style={{ height: '80%' }}>
          <Span>Blog</Span>
          <Span>Facebook</Span>
          <Span>Twitter</Span>
          <Span>LinkedIn</Span>
          <Span>Instagram</Span>
        </div>
        <div style={{ height: '20%' }}>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.12.21.43127
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

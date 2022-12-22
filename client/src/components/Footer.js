import styled from 'styled-components';

function Footer() {
  const FooterContainer = styled.footer`
    background-color: black;
    color: white;
  `;
  const FooterIn = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <FooterContainer>
      <FooterIn>
        <div>아이콘</div>
        <div>스택오버</div>
        <div>상품</div>
        <div>회사</div>
        <div>교환망</div>
        <div>
          <div>링크</div>
          made by footer
        </div>
      </FooterIn>
    </FooterContainer>
  );
}

export default Footer;

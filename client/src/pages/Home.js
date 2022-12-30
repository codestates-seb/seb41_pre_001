import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { MainContainer } from '../styles/StyledStore';
import styled from 'styled-components';

const StyledMainContainer = styled(MainContainer)`
  background-color: #ffffff;
`;

function Home() {
  return (
    <StyledMainContainer>
      <Main />
      <Sidebar />
    </StyledMainContainer>
  );
}

export default Home;

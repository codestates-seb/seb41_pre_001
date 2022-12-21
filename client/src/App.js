import TempHeader from './components/TempHeader';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import TempNavSidebar from './components/TempNavSidebar';
import TempSidebar from './components/TempSidebar';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: aqua;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <header>
          <TempHeader />
        </header>
        <BodyContainer>
          <TempNavSidebar />
          <main>메인</main>
          <TempSidebar />
        </BodyContainer>
        <footer>푸터</footer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

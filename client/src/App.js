import styled from 'styled-components';
import Header from './components/Header';
import NavSidebar from './components/NavSidebar';
import Footer from './components/Footer';

const BodyContainer = styled.div`
  min-width: 1270px;
  max-width: 1270px;
  background-color: azure;
  display: flex;
`;

function App() {
  return (
    <div className="appContainer">
      <Header />
      <BodyContainer>
        <NavSidebar />
      </BodyContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;

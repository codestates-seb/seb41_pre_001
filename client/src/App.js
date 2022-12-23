import styled from 'styled-components';
import Header from './components/Header';
import NavSidebar from './components/NavSidebar';
import Footer from './components/Footer';

const BodyContainer = styled.div`
  min-width: 1270px;
  max-width: 1270px;
  background-color: azure;
  padding-top: 56px;
  display: flex;
`;

function App() {
  return (
    <div className="appContainer">
      <Header />
      <BodyContainer>
        <NavSidebar />
        <div className="mainContainer"></div>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default App;

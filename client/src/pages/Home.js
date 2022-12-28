import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { MainWithSidebarContainer } from '../styles/StyledStore';


function Home() {
  return (
    <>
      <Sidebar />
      <MainWithSidebarContainer>
         <Main />
        <Sidebar />
      </MainWithSidebarContainer>
    </>
  );
}

export default Home;

import Sidebar from '../components/Sidebar';
import TopQuestions from '../components/TopQuestions';
import { MainWithSidebarContainer } from '../styles/StyledStore';

function Home() {
  return (
    <>
      <MainWithSidebarContainer>
        <TopQuestions />
        <Sidebar />
      </MainWithSidebarContainer>
    </>
  );
}

export default Home;

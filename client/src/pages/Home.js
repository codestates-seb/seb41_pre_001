import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { MainWithSidebarContainer } from '../styles/StyledStore';

function Home() {
  return (
    <>
      <MainWithSidebarContainer>
        <div>
          <Link to="questionCreate">ask asdfasdfasdf</Link>
        </div>
        <Sidebar />
      </MainWithSidebarContainer>
    </>
  );
}

export default Home;

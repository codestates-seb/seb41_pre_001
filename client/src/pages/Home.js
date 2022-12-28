import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { MainWithSidebarContainer } from '../styles/StyledStore';

function Home() {
  return (
    <>
      <MainWithSidebarContainer>
        <div>
          <Link to="questionCreate">
            <fieldset>Ask Questions!</fieldset>
          </Link>
        </div>
        <Sidebar />
      </MainWithSidebarContainer>
    </>
  );
}

export default Home;

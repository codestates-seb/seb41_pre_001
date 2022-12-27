import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AskBox = styled.div`
  margin: 10px;
  padding: 10px;
  height: 50px;
  border: 1px solid hsl(206deg 90% 70%);
`;

function Home() {
  return (
    <>
      <section className="mainSection withSideBar">
        <AskBox>
          <Link to="questionCreate">Ask Question</Link>
        </AskBox>
        <Sidebar />
      </section>
    </>
  );
}

export default Home;

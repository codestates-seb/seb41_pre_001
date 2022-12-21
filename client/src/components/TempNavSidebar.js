import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import TempQuestions from '../pages/TempQuestions';

const Sidebar = styled.div`
  width: 170px;
  height: 100%;
  background-color: aliceblue;
`;

const Section = styled.section`
  border: 1px solid black;
`;

function TempNavSidebar() {
  const handleNotWork = (e) => {
    alert(e.target.value);
  };
  return (
    <>
      <Sidebar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>public</li>
          <ul>
            <li>
              <Link to="/">Questions</Link>
            </li>
            <li>
              <button onClick={() => handleNotWork()}>Tags</button>
            </li>
            <li>
              <button onClick={() => handleNotWork()}>Users</button>
            </li>
            <li>
              <button onClick={() => handleNotWork()}>Companies</button>
            </li>
          </ul>
          <li>COLLECTIVES</li>
          <li>
            <button onClick={() => handleNotWork()}>Explore Collectives</button>
          </li>
          <li>
            <br />
            TEAMS
          </li>
        </ul>
        <Section>
          <p>
            <strong>Stack Overflow for Teams</strong> Start collaborating and
            sharing organizational knowledge.
          </p>
          <div>사진머시기 {`>`}_? 대화창 머시기 V</div>
          <div>
            <button>Create a free Team</button>
            <button>Why Teams?</button>
          </div>
        </Section>
      </Sidebar>

      <Routes>
        <Route path="/" element={<TempQuestions />} />
      </Routes>
    </>
  );
}

export default TempNavSidebar;

import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
import { handleDonateMe } from '../util/alertStore';
import Home from '../pages/Home';
import TempQuestions from '../pages/TempQuestions';
import Tags from '../pages/Tags';
import User from '../pages/User';
import Companies from '../pages/Companies';
import ExploreCollectives from '../pages/ExploreCollectives';

const Sidebar = styled.div`
  max-width: 170px;
  min-width: 170px;
  height: 100%;
  background-color: aliceblue;
`;

const Teams = styled.aside`
  background-color: antiquewhite;
`;

function NavSidebar() {
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
              <Link to="questions">Questions</Link>
            </li>
            <li>
              <Link to="tags">tags</Link>
            </li>
            <li>
              <Link to="user">User</Link>
            </li>
            <li>
              <Link to="companies">Companies</Link>
            </li>
          </ul>
          <li>COLLECTIVES</li>
          <li>
            <Link to="exploreCollectives">Explore Collectives</Link>
          </li>
          <li>
            <br />
            TEAMS
          </li>
        </ul>
        <Teams>
          <p>
            <strong>Stack Overflow for Teams</strong> Start collaborating and
            sharing organizational knowledge.
          </p>
          <div>사진머시기 {`>`}_? 대화창 머시기 V</div>
          <div>
            <button onClick={() => handleDonateMe()}>Create a free Team</button>
            <button onClick={() => handleDonateMe()}>Why Teams?</button>
          </div>
        </Teams>
      </Sidebar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="questions" element={<TempQuestions />}></Route>
        <Route path="tags" element={<Tags />}></Route>
        <Route path="user" element={<User />}></Route>
        <Route path="companies" element={<Companies />}></Route>
        <Route
          path="exploreCollectives"
          element={<ExploreCollectives />}
        ></Route>
      </Routes>
    </>
  );
}

export default NavSidebar;

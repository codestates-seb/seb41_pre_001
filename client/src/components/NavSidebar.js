import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { handleDonateMe } from '../util/alertStore';
import { setRoute } from '../util/routeStore';

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

      {setRoute()}
    </>
  );
}

export default NavSidebar;

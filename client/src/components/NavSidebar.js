import styled from 'styled-components';
import { MenuItem } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
import { ReactComponent as IconStar } from '../asset/icon/icon-star.svg';
import { ReactComponent as IconAlertCycle } from '../asset/icon/icon-alertcycle.svg';
import { ReactComponent as IconGlobe } from '../asset/icon/icon-globe.svg';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  max-width: 170px;
  min-width: 170px;
  height: 100%;
  background-color: white;
  padding-top: 24px;
  padding-bottom: 30px;
`;

const CommonLi = styled(MenuItem)`
  width: 164px;
  height: 30px;
  padding-left: 10px;
  background-color: transparent;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const SubTitle = styled(CommonLi)`
  color: #6a737c;
  font-size: 11px;
  padding-top: 15px;
`;

const IconTitle = styled(CommonLi)`
  padding: 0px 0px 0px 30px;
`;

function NavSidebar() {
  return (
    <SidebarContainer>
      <Sidebar>
        <ul>
          <CommonLi>
            <Link to="/">Home</Link>
          </CommonLi>
          <SubTitle>PUBLIC</SubTitle>
          <ul>
            <CommonLi>
              <IconGlobe width="20px" height="15px" />
              <Link to="questions"> Questions</Link>
            </CommonLi>
            <IconTitle>
              <Link to="tags">tags</Link>
            </IconTitle>
            <IconTitle>
              <Link to="user">User</Link>
            </IconTitle>
            <IconTitle>
              <Link to="companies">Companies</Link>
            </IconTitle>
          </ul>
          <SubTitle>
            COLLECTIVES
            <IconAlertCycle width="80px" height="15px" />
          </SubTitle>
          <CommonLi>
            <IconStar padding="10px" />
            <Link to="exploreCollectives">Explore Collectives</Link>
          </CommonLi>
          <SubTitle>
            TEAMS
            <IconAlertCycle width="120px" height="15px" />
          </SubTitle>
          <CommonLi>
            <IconStar padding="10px" />
            <Link to="exploreCollectives">Create free Team</Link>
          </CommonLi>
        </ul>
      </Sidebar>
      <hr style={{ border: '1px solid #E0E3E5', width: '1', height: '100%' }} />
    </SidebarContainer>
  );
}

export default NavSidebar;

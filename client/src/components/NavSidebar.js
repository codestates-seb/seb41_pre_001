import styled from 'styled-components';
import { MenuItem } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
import { ReactComponent as IconStar } from '../asset/icon/icon-star.svg';
import { ReactComponent as IconAlertCycle } from '../asset/icon/icon-alertcycle.svg';
import { ReactComponent as IconGlobe } from '../asset/icon/icon-globe.svg';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid gery;
`;

const Sidebar = styled.div`
  max-width: 170px;
  min-width: 170px;
  height: 100%;
  padding-top: 24px;
  padding-bottom: 30px;
`;

const CommonLi = styled(MenuItem)`
  width: 164px;
  height: 34px;
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

const SubLi = styled(CommonLi)`
  padding: 0px 0px 0px 30px;
`;

/**
 * Created by @KimTank
 * TODO 실제값 엮어줘야됨
 * @returns <SidebarContainer>
 */
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
              <Link to="/"> Questions</Link>
            </CommonLi>
            <SubLi>
              {/* <Link to="tags">Tags</Link> */}
              <a href="https://stackoverflow.com/tags">Tags</a>
            </SubLi>
            <SubLi>
              <Link to="user">User</Link>
            </SubLi>
            <SubLi>
              {/* <Link to="companies">Companies</Link> */}
              <a href="https://stackoverflow.com/jobs/companies">Companies</a>
            </SubLi>
          </ul>
          <SubTitle>
            COLLECTIVES
            <IconAlertCycle width="80px" height="15px" />
          </SubTitle>
          <CommonLi>
            <IconStar padding="10px" />
            <a href="https://stackoverflow.com/collectives">
              Explore Collectives
            </a>
            {/* <Link to="exploreCollectives">Explore Collectives</Link> */}
          </CommonLi>
          <SubTitle>
            TEAMS
            <IconAlertCycle width="120px" height="15px" />
          </SubTitle>
          <CommonLi>
            <IconStar padding="10px" />
            <a href="https://try.stackoverflow.co/why-teams/?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta">
              Create free Team
            </a>
            {/* <Link to="exploreCollectives">Create free Team</Link> */}
          </CommonLi>
        </ul>
      </Sidebar>
    </SidebarContainer>
  );
}

export default NavSidebar;

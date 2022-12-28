import styled from 'styled-components';
import Section from '../components/Section';
import { sidebarData } from '../data/dumyData';
import { handleDonateMe } from '../util/alertStore';

const SidebarContainer = styled.section`
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  padding: 0px 24px 24px 24px;
`;

/**
 * Created by @KimTank
 * @returns <SidebarContainer>
 */
function Sidebar() {
  const handleClick = () => {
    handleDonateMe();
  };
  return (
    <SidebarContainer onClick={() => handleClick()}>
      <Section props={sidebarData.section1} />
      <Section props={sidebarData.section2} />
      <Section props={sidebarData.section3} />
      <Section props={sidebarData.section4} />
      <Section props={sidebarData.section5} />
      <Section props={sidebarData.section6} />
      <Section props={sidebarData.section7} />
      <Section props={sidebarData.section8} />
      <Section props={sidebarData.section9} />
    </SidebarContainer>
  );
}

export default Sidebar;

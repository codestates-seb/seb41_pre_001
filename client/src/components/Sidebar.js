import styled from 'styled-components';

const SidebarContainer = styled.section`
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  background-color: lime;
`;

function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <section>
          <p>
            <strong>The Overflow Blog</strong>
          </p>
          <ul>
            <li>Use Git tactically</li>
            <li>Let’s talk about our favorite terminal tools</li>
          </ul>
        </section>
        <section>
          <p>
            <strong>Featured on Meta</strong>
          </p>
          <ul>
            <li>Help us identify new roles for community members</li>
            <li>Navigation and UI research starting soon</li>
            <li>
              2022 Community Moderator Election Results - now with two more
              mods!
            </li>
            <li>
              Proposing a Community-Specific Closure Reason for non-English
              content
            </li>
            <li>Temporary policy: ChatGPT is banned</li>
            <li>{`I'm standing down as a moderator`}</li>
          </ul>
        </section>
        <section>
          <p>Collectives</p>
          <ul>
            <li>Google Cloud</li>
            <li>Twilio</li>
            <li>AWS</li>
          </ul>
        </section>
        <aside>광고</aside>
        <p>
          <strong>Related Tags</strong>
        </p>
        <ul>
          <li>python x 29</li>
          <li>javascript x 24</li>
          <li>android x 18</li>
          <li>reactjs x 16</li>
          <li>node.js x 14</li>
          <li>ios x 12</li>
          <li>swift x 12</li>
          <li>react-native x 10</li>
          <li>flutter x 10</li>
          <li>typescript x 9</li>
          <li>more related tags</li>
        </ul>
        <p>
          <strong>Hot Network Questions</strong>
        </p>
        <ul>
          <li>House Rules: Exploding dice for damage in 5e</li>
          <li>Sum every second digit in a number</li>
          <li>
            Comparing two rooted n-ary trees irrespective of the order of
            children nodes?
          </li>
          <li>
            What do you say when people ate the food you cooked until nothing is
            left?
          </li>
          <li>
            Why is the root filesystem so small on a clean Fedora 37 install
          </li>
          <li>How to pack a desktop pc for overseas travel?</li>
          <li>
            If Mars and Venus were habitable, by when would they have been
            colonized?
          </li>
          <li>
            Can an unidentified pearl be used as a component for the Identify
            spell?
          </li>
          <li>
            When can we say an activity happening in the middle of the night?
          </li>
          <li>How to interpret quantum fields?</li>
          <li>
            How does Santa keep locations updated for all of his gift
            recipients?
          </li>
          <li>
            {`May my distinguished referee award be withdrawn if I inform the editors that I've actually left academia?`}
          </li>
          <li>more hot questions</li>
        </ul>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;

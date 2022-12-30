import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { MainContainer } from '../styles/StyledStore';
import styled from 'styled-components';

const StyledMainContainer = styled(MainContainer)`
  background-color: #ffffff;
`;

function Home() {
  console.log(process.env.REACT_APP_EP_SIGNUP);
  console.log(process.env.REACT_APP_EP_SIGNOUT);
  console.log(process.env.REACT_APP_EP_LOGIN);
  console.log(process.env.REACT_APP_EP_LOGOUT);
  console.log(process.env.REACT_APP_EP_USER);
  console.log(process.env.REACT_APP_EP_POSTS_CREATE);
  console.log(process.env.REACT_APP_EP_POSTS_LIKES);
  console.log(process.env.REACT_APP_EP_POSTS_DETAIL);
  console.log(process.env.REACT_APP_EP_POSTS_EDIT);
  console.log(process.env.REACT_APP_EP_COMMENT);
  console.log(process.env.REACT_APP_EP_COMMENT_LIKES);
  console.log(process.env.REACT_APP_EP_POSTS_UNLIKES);
  console.log(process.env.REACT_APP_EP_COMMENT_UNLIKES);
  console.log(process.env.REACT_APP_EP_POSTS_LIST);
  console.log(process.env.REACT_APP_EP_POSTS_DELETE);
  return (
    <StyledMainContainer>
      <Main />
      <Sidebar />
    </StyledMainContainer>
  );
}

export default Home;

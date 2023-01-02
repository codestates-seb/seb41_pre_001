import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import User from './pages/User';
import QuestionDetail from './pages/QuestionDetail';
import Companies from './components/Companies';
import Login from './pages/Login';
import Signup from './pages/Signup';
import QuestionCreate from './pages/QuestionCreate';
import { Route, Routes } from 'react-router-dom';
import ReactModal from 'react-modal';
import QuestionEdit from './pages/QuestionEdit';
import {
  getCOMMENT_CREATE,
  getCOMMENT_DELETE,
  getCOMMENT_EDIT,
  getCOMMENT_LIKES,
  getCOMMENT_UNLIKES,
  getPOSTS_CREATE,
  getPOSTS_DELETE,
  getPOSTS_DETAIL,
  getPOSTS_EDIT,
  getPOSTS_LIKES,
  getPOSTS_LIST,
  getPOSTS_UNLIKES,
  getUSER_EDIT,
  getUSER_LOGIN,
  getUSER_SIGNOUT,
  getUSER_SIGNUP,
  getUSER_USER,
} from './util/urlStore';

const BodyContainer = styled.div`
  padding-top: 53px;
  display: flex;
`;

ReactModal.setAppElement('#root');

const AppContainer = styled.div`
  min-width: 640px;
  max-width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isBugerVisible] = useState(true);

  // useEffect(() => , [isOpen]);
  console.log(22222);
  console.log(getUSER_SIGNUP());
  console.log(2222);
  console.log(getUSER_SIGNOUT({ userId: 0 }));
  console.log(2222);
  console.log(getUSER_LOGIN());
  console.log(2222);
  console.log(getUSER_USER({ userId: 0 }));
  console.log(2222);
  console.log(getUSER_EDIT({ userId: 0 }));
  console.log(2222);
  console.log(getPOSTS_CREATE());
  console.log(2222);
  console.log(getPOSTS_LIST());
  console.log(2222);
  console.log(getPOSTS_DETAIL({ postId: 1 }));
  console.log(2222);
  console.log(getPOSTS_EDIT({ postId: 1 }));
  console.log(2222);
  console.log(getPOSTS_DELETE({ postId: 1 }));
  console.log(2222);
  console.log(getPOSTS_LIKES({ postId: 1 }));
  console.log(2222);
  console.log(getPOSTS_UNLIKES({ postId: 1 }));
  console.log(2222);
  console.log(getCOMMENT_CREATE({ postId: 1 }));
  console.log(2222);
  console.log(getCOMMENT_EDIT({ postId: 1, commentId: 2 }));
  console.log(2222);
  console.log(getCOMMENT_DELETE({ postId: 1, commentId: 2 }));
  console.log(2222);
  console.log(getCOMMENT_LIKES({ postId: 1, commentId: 2 }));
  console.log(2222);
  console.log(getCOMMENT_UNLIKES({ postId: 1, commentId: 2 }));
  console.log(2222);
  return (
    <AppContainer id="app">
      <Header
        isOpen={isOpen}
        setOpen={setOpen}
        isBugerVisible={isBugerVisible}
      />
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="questionDetail" element={<QuestionDetail />} />
          <Route path="main" element={<main />} />
          <Route path="user" element={<User />} />
          <Route path="companies" element={<Companies />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="questionCreate" element={<QuestionCreate />} />
          <Route path="questionEdit" element={<QuestionEdit />} />
        </Routes>
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;

import { useState } from 'react';

import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import main from './main.js';
import Tags from './pages/Tags';
import User from './pages/User';
import QuestionDetail from './pages/QuestionDetail';
import Companies from './components/Companies';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExploreCollectives from './pages/ExploreCollectives';
import QuestionCreate from './pages/QuestionCreate';
import { Route, Routes } from 'react-router-dom';
import ReactModal from 'react-modal';
import QuestionList from './pages/QuestionList';
import Temp from './pages/Temp';

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
  const [isBugerVisible, setIsBugerVisible] = useState(true);

  // useEffect(() => , [isOpen]);

  return (
    <AppContainer id="app">
      <Header
        isOpen={isOpen}
        setOpen={setOpen}
        isBugerVisible={isBugerVisible}
        setIsBugerVisible={setIsBugerVisible}
      />
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="questions" element={<QuestionList />} />
          <Route path="temp" element={<Temp />} />
          <Route path="questionDetail" element={<QuestionDetail />} />
          <Route path="main" element={<main />} />
          <Route path="tags" element={<Tags />} />
          <Route path="user" element={<User />} />
          <Route path="companies" element={<Companies />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="exploreCollectives" element={<ExploreCollectives />} />
          <Route path="questionCreate" element={<QuestionCreate />} />
        </Routes>
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;

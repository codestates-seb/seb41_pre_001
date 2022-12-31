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

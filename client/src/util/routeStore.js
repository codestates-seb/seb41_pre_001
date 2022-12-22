import Home from '../pages/Home';
import QuestionList from '../pages/QuestionList';
import Tags from '../pages/Tags';
import User from '../pages/User';
import Companies from '../components/Companies';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ExploreCollectives from '../pages/ExploreCollectives';
import QuestionCreate from '../pages/QuestionCreate';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

export const setRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="questions" element={<QuestionList />} />
      <Route path="tags" element={<Tags />} />
      <Route path="user" element={<User />} />
      <Route path="companies" element={<Companies />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="exploreCollectives" element={<ExploreCollectives />} />
      <Route path="questionCreate" element={<QuestionCreate />} />
    </Routes>
  );
};

export const Btn = styled(Link)`
  height: 35px;
  width: 60px;
  padding: 6px 8px;
  background-color: ${(props) => (props.fill ? '#e1ecf4' : '#169aff')};
  color: ${(props) => (props.fill ? '#39739d' : 'white')};
  border: ${(props) => (props.fill ? '#39739d' : '169aff')} solid 1px;
  border-radius: 2px;
  text-align: center;
`;

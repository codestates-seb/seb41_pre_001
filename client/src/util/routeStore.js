import Home from '../pages/Home';
import QuestionList from '../pages/QuestionList';
import Tags from '../pages/Tags';
import User from '../pages/User';
import Companies from '../components/Companies';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ExploreCollectives from '../pages/ExploreCollectives';
import QuestionCreate from '../pages/QuestionCreate';
import { Route, Routes } from 'react-router-dom';

export const setRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="questions" element={<QuestionList />}></Route>
      <Route path="tags" element={<Tags />}></Route>
      <Route path="user" element={<User />}></Route>
      <Route path="companies" element={<Companies />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="exploreCollectives" element={<ExploreCollectives />}></Route>
      <Route path="questionCreate" element={<QuestionCreate />}></Route>
    </Routes>
  );
};

// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QuestionRow from './QuestionRow';

/**
 * Created by @SW
 * @returns <MainBody>
 */
function Main() {
  const Askbtn = useNavigate();

  const handleAskBtn = () => {
    Askbtn('/questionCreate');
  };

  // const [QuestionL, SetQuestionL] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('board/posts?page=1&size=3', { withCredentials: true })
  //     .then((res) => {
  //       const { data } = res;
  //       SetQuestionL(data);
  //     })
  //     .catch((error) => alert(error));
  // }, []);

  return (
    <MainBody>
      <MainTitle>
        <h2>Top Questions</h2>
        <button onClick={() => handleAskBtn()}>Ask Question</button>
      </MainTitle>
      {/* {QuestionL.map((list) => ( */}
      <QuestionRow
      // key={list.id}
      // id={list.id}
      // title={list.title}
      // createdAt={list.createdAt}
      // tag={list.tag}
      />
      {/* ))} */}
    </MainBody>
  );
}

export default Main;

const MainBody = styled.div`
  background-color: #ffffff;
  margin-top: -30px;
  border-left: 1px solid hsl(210deg 8% 90%);
  /* 변경ty margin-left: 250px; */
`;

const MainTitle = styled.div`
  padding: 30px;
  margin-right: 40px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
  > h2 {
    font-weight: 500;
  }
  > button {
    background-color: hsl(206deg 100% 52%);
    border-radius: 3px;
    border: none;
    color: #ffffff;
    margin-left: 600px;
    margin-top: -60px;
    padding: 10px;
  }
  Button:hover {
    background-color: #0c63a9;
  }
`;

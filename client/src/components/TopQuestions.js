import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function TopQuestions() {
  const Askbtn = useNavigate();

  const handleAskBtn = () => {
    Askbtn('/questionCreate');
  };

  return (
    <MainBody>
      <MainTitle>
        <h2>Top Questions</h2>
        <button onClick={() => handleAskBtn()}>Ask Question</button>
      </MainTitle>
      <MainQuestionList></MainQuestionList>
    </MainBody>
  );
}

export default TopQuestions;

const MainBody = styled.div`
  background-color: #ffffff;
  margin-left: 250px;
  margin-top: -30px;
  border-left: 1px solid hsl(210deg 8% 90%);
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
const MainQuestionList = styled.div`
  padding: 100px;
  margin: 100px;
  width: 750px;
`;

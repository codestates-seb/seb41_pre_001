import styled from 'styled-components';

/**
 * Created by @ldk199662
 * @returns <Questions>
 */

function Questions() {
  return (
    <QuestionsBody>
      <QuestionsTitle>
        <h1>Can someone please explain me this algorithm?(Title)</h1>
        <p>Asked (day) Modified (day) Viewed (numbers)</p>
      </QuestionsTitle>
      <QuestionsContent>content</QuestionsContent>
      <QuestionsAnswers>(numbers) Answers</QuestionsAnswers>
    </QuestionsBody>
  );
}

export default Questions;

const QuestionsBody = styled.div`
  background-color: #ffffff;
`;

const QuestionsTitle = styled.div`
  padding: 0;
  margin: 0;
  border-bottom: 1px solid hsl(210deg 8% 90%);

  > h1 {
    padding: 10px;
    margin: 10px;
    margin-bottom: -20px;
    font-weight: 400;
    font-size: 27px;
  }
  > p {
    padding: 10px;
    margin: 10px;
    font-weight: 400;
    color: gray;
    font-size: 13px;
  }
`;
const QuestionsContent = styled.div`
  padding: 100px;
  margin: 100px;
`;
const QuestionsAnswers = styled.div`
  padding: 100px;
  margin: 100px;
`;

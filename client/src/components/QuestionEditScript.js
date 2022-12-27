import styled from 'styled-components';
function QuestionEditScript() {
  return (
    <QuestionEditScriptBody>
      <h2>How to Edit</h2>
      <ul>
        <li>Correct minor typos or mistakes</li>
        <li>Clarify meaning without changing it</li>
        <li>Add related resources or links</li>
        <li>Always respect the author&apos;s intent</li>
        <li>Don&apos;t use edits to reply to the author</li>
      </ul>
    </QuestionEditScriptBody>
  );
}

export default QuestionEditScript;

const QuestionEditScriptBody = styled.div`
  padding: 0;
  margin: 0;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px 3px 3px 3px;
  margin-top: 50px;
  margin-left: -15px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.1);
  background-color: hsl(47deg 83% 91%);
  box-sizing: content-box;
  height: 180px;
  width: 100%;
  > h2 {
    font-size: 15px;
    border-bottom: 1px solid hsl(210deg 8% 90%);
    font-weight: 400;
    padding: 10px;
    background-color: hsl(47deg 65% 86%);
  }
  > ul {
    font-size: 12px;
    padding: 10px;
    list-style-type: disc;
    margin-left: 20px;
    margin-top: 10px;
    line-height: 20px;
  }
`;

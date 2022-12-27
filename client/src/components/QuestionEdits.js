import Editor from './Editors';
import styled from 'styled-components';
function QuestionEdits() {
  return (
    <QuestionEditBody>
      <QuestionExplain>
        <h2>Your Edit will be placed in a queue until it is peer reviewed.</h2>
        <p>
          We welcome edits that make the post easier to understand and more
          valuable for readers. Because community members review edits, Please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resources and
          hyperlinks.
        </p>
      </QuestionExplain>
      <QuestionTitle>
        <h2>Title</h2>
        <input
          id="title"
          name="title"
          type="text"
          placeholder=""
          maxLength="300"
          data-min-length="15"
          data-max-length="150"
        />
      </QuestionTitle>
      <div>
        <Editor />
      </div>
      <QuestionSummary>
        <h2>Edit Summary</h2>
        <input
          id="title"
          name="title"
          type="text"
          placeholder=""
          maxLength="300"
          data-min-length="15"
          data-max-length="150"
        />
      </QuestionSummary>
      <Buttons>
        <EditButton>Save Edits</EditButton>
        <CancelButton>Cancel</CancelButton>
      </Buttons>
    </QuestionEditBody>
  );
}

export default QuestionEdits;
const QuestionEditBody = styled.div`
  background-color: #ffffff;
`;
const QuestionExplain = styled.div`
  padding: 0px;
  margin-top: 50px;
  border: 1px solid hsl(47deg 69% 69%);
  border-radius: 3px 3px 3px 3px;
  background-color: hsl(47deg 83% 91%);
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.1);
  > h2 {
    padding: 10px;
    margin: 10px;
    font-size: 15px;
    font-weight: 400;
  }
  > p {
    padding: 10px;
    margin: 10px;
    font-size: 15px;
  }
`;
const QuestionTitle = styled.div`
  padding: 10px;
  margin-left: -10px;
  margin-bottom: 10px;
  > h2 {
    font-size: 19.8px;
    margin-bottom: 10px;
  }
`;
const QuestionSummary = styled.div`
  padding: 10px;
  margin-left: -10px;
  margin-bottom: 20px;
  > h2 {
    font-size: 19.8px;
    margin-bottom: 10px;
  }
`;
const Buttons = styled.div`
  display: flex;
`;
const EditButton = styled.button`
  background-color: hsl(206deg 100% 52%);
  border-radius: 3px;
  border: none;
  color: #ffffff;
  padding: 10px;
`;
const CancelButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: #c22e32;
  margin-left: 10px;
`;

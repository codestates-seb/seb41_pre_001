import styled from 'styled-components';
import Editor from '../components/Editors';

const AskBody = styled.div`
  background-color: #fbfcfc;
`;
const AskTitle = styled.div`
  padding: 30px;
  margin: 30px;
  border: 1px solid hsl(206deg 90% 70%);
  background-color: hsl(206deg 100% 97%);
`;
const AskTitleH1 = styled.h1`
  font-size: 27px;
  margin-left: 27px;
  margin-bottom: 55px;
`;
const AskTitleH2 = styled.h2`
  font-size: 19.8px;
  font-weight: 400;
`;
const UlContent = styled.ul`
  list-style-type: disc;
  font-size: 13px;
  font-weight: 400;
  margin-left: 28px;
`;
const TitleContent = styled.div`
  padding: 30px;
  margin: 30px;
  border: 1px solid hsl(210deg 8% 90%);
  background-color: #ffffff;
  margin-top: -10px;

  > h5 {
    font-size: 15px;
  }
  > p {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;
const AskContent = styled.div`
  padding: 30px;
  margin: 30px;
  border: 1px solid hsl(210deg 8% 90%);
  background-color: #ffffff;
  margin-top: -17px;
  position: relative;
  > h5 {
    font-size: 15px;
  }
  > p {
    font-size: 12px;
    margin-bottom: 3px;
  }
  > textarea {
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 30px;
  }
`;
const AskExpect = styled.div`
  padding: 30px;
  margin: 30px;
  border: 1px solid hsl(210deg 8% 90%);
  background-color: #ffffff;
  margin-top: -17px;
  > h5 {
    font-size: 15px;
  }
  > p {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;
const AskTags = styled.div`
  padding: 30px;
  margin: 30px;
  border: 1px solid hsl(210deg 8% 90%);
  background-color: #ffffff;
  margin-top: -17px;
  > h5 {
    font-size: 15px;
  }
  > p {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;
const Buttons = styled.div`
  display: flex;
  margin-top: -17px;
`;
const SubmitButton = styled.button`
  background-color: hsl(206deg 100% 52%);
  border-radius: 3px;
  border: none;
  color: #ffffff;
  margin-left: 27px;
  padding: 10px;
`;
const DiscardButton = styled.button`
  background-color: #fbfcfc;
  border: none;
  color: #c22e32;
  margin-left: 25px;
`;

function AskCreate() {
  return (
    <AskBody className="ask-title">
      <AskTitleH1>Ask a public question</AskTitleH1>
      <AskTitle className="ask-info">
        <AskTitleH2>Writing a good question</AskTitleH2>
        <br />
        <p>
          You’re ready to{' '}
          <a href="https://stackoverflow.com/help/how-to-ask">ask</a> a{' '}
          <a href="https://stackoverflow.com/help/on-topic">
            programming-related question
          </a>{' '}
          and this form will help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See{' '}
          <a href="https://stackexchange.com/sites#technology">
            the topics here
          </a>{' '}
          to find a relevant site.
        </p>
        <br />
        <h5>Steps</h5>
        <br />
        <UlContent>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </UlContent>
      </AskTitle>
      <TitleContent className="title-content">
        <h5>Title</h5>
        <p>
          Be specific and imagine you’re asking a question to another person.
        </p>
        <div className="input-title">
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            maxLength="300"
            data-min-length="15"
            data-max-length="150"
          />
        </div>
      </TitleContent>
      <AskContent className="ask-content">
        <h5>What are the details of your problem?</h5>
        <p>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
        <Editor />
      </AskContent>
      <AskExpect className="ask-expect">
        <h5>What did you try and what were you expecting?</h5>
        <p>
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </p>
        <Editor />
      </AskExpect>
      <AskTags className="ask-tags">
        <h5>Tags</h5>
        <p>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
        <input
          id="tag"
          name="tag"
          type="text"
          placeholder="e.g. (objective-c typescript sql-server)"
        />
      </AskTags>
      <Buttons>
        <SubmitButton className="submit-button" type="button">
          Review your question
        </SubmitButton>

        <DiscardButton className="dicard-button" type="button">
          Discard draft
        </DiscardButton>
      </Buttons>
    </AskBody>
  );
}
export default AskCreate;

import styled from 'styled-components';

/**
 * Created by @ldk199662
 * @returns <AskCreateScript>
 */
function AskCreateScripts() {
  return (
    <AskEditScript>
      <TitleScript>
        <h2>Writing a good title</h2>
        <p>
          Your title should summarize the problem.
          <br />
          <br />
          You might find that you have a better idea of your title after writing
          out the rest of the question.
        </p>
      </TitleScript>
      <AskScript>
        <h2>Introduce the problem</h2>
        <p>
          Explain how you encountered the problem you’re trying to solve, and
          any difficulties that have prevented you from solving it yourself.
        </p>
      </AskScript>
      {/* <ExpectScript>
        <h2>Expand on the problem</h2>
        <p>
          Show what you’ve tried, tell us what happened, and why it didn’t meet
          your needs.
          <br />
          <br />
          Not all questions benefit from including code, but if your problem is
          better understood with code you’ve written, you should include a{' '}
          <a href="https://stackoverflow.com/help/minimal-reproducible-example">
            minimal, reproducible example.
          </a>
          <br />
          <br />
          Please make sure to post code and errors as text directly to the
          question (and{' '}
          <a href="https://meta.stackoverflow.com/questions/285551/why-should-i-not-upload-images-of-code-data-errors">
            not as images
          </a>
          ), and{' '}
          <a href="https://stackoverflow.com/help/formatting">
            format them appropriately.
          </a>
        </p>
      </ExpectScript> */}
      <TagScript>
        <h2>Adding tags</h2>
        <p>
          Tags help ensure that your question will get attention from the right
          people.
          <br />
          <br />
          Tag things in more than one way so people can find them more easily.
          Add tags for product lines, projects, teams, and the specific
          technologies or languages used.
          <br />
          <br />
          <a href="https://stackoverflow.com/help/tagging">
            Learn more about tagging
          </a>
        </p>
      </TagScript>
    </AskEditScript>
  );
}
export default AskCreateScripts;

const AskEditScript = styled.div`
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  background-color: #f1f2f3;
`;
const TitleScript = styled.div`
  padding: 0;
  margin: 0;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px 3px 3px 3px;
  margin-top: 385px;
  margin-left: -15px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  > h2 {
    font-size: 15px;
    border-bottom: 1px solid hsl(210deg 8% 90%);
    font-weight: 400;
    padding: 12px;
    background-color: hsl(210deg 8% 98%);
  }
  > p {
    font-size: 12px;
    background-color: #ffffff;
    padding: 10px;
    margin: 10px;
  }
`;
const AskScript = styled.div`
  padding: 0;
  margin: 0;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px 3px 3px 3px;
  margin-top: 20px;
  margin-left: -15px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  > h2 {
    font-size: 15px;
    border-bottom: 1px solid hsl(210deg 8% 90%);
    font-weight: 400;
    padding: 12px;
    background-color: hsl(210deg 8% 98%);
  }
  > p {
    font-size: 12px;
    padding: 10px;
    margin: 10px;
  }
`;

// const ExpectScript = styled.div`
//   padding: 0;
//   margin: 0;
//   border: 1px solid hsl(210deg 8% 90%);
//   border-radius: 3px 3px 3px 3px;
//   background-color: #ffffff;
//   margin-top: 150px;
//   margin-left: -15px;
//   box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.1);

//   > h2 {
//     font-size: 15px;
//     border-bottom: 1px solid hsl(210deg 8% 90%);
//     font-weight: 400;
//     padding: 12px;
//     background-color: hsl(210deg 8% 98%);
//   }
//   > p {
//     font-size: 12px;
//     padding: 10px;
//     margin: 10px;
//   }
// `;

const TagScript = styled.div`
  padding: 0;
  margin: 0;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px 3px 3px 3px;
  background-color: #ffffff;
  margin-top: 165px;
  margin-left: -15px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.1);

  > h2 {
    font-size: 15px;
    border-bottom: 1px solid hsl(210deg 8% 90%);
    font-weight: 400;
    padding: 12px;
    background-color: hsl(210deg 8% 98%);
  }
  > p {
    font-size: 12px;
    padding: 10px;
    margin: 10px;
  }
`;

import Editor from './Editors';
import styled from 'styled-components';
import { useState } from 'react';
function Comment() {
  const [content, setContent] = useState('');

  const onChangeContent = (content) => {
    setContent(content);
  };

  return (
    <CommentBody>
      <CommentTiTle>
        <h2>Your Answer</h2>
      </CommentTiTle>
      <div>
        <Editor value={content} setValue={onChangeContent} />
      </div>
      <CommetHelp>
        <p>Thanks for contributing an answer to Stack Overflow!</p>
        <ul>
          <li>
            Please be sure to answer the question. Provide details and share
            your research!
          </li>
          <p>
            But <em>avoid</em>
            ...
          </p>
          <li>
            Asking for help, clarification, or responding to other answers.
          </li>
          <li>
            Making statements based on opinion; back them up with references or
            personal experience.
          </li>
        </ul>
        <p>
          To learn more, see our{' '}
          <a href="https://stackoverflow.com/help/how-to-answer">
            tips on writing great answers
          </a>
          .
        </p>
      </CommetHelp>
      <Buttons>
        <PostButton>Post Your Answer</PostButton>
      </Buttons>
      <CommentLast>
        <p>
          Not the answer you&apos;re looking for? Browse other questions tagged{' '}
          <CommentLastBox href="https://stackoverflow.com/questions/tagged/shopware6">
            shopware6
          </CommentLastBox>{' '}
          or{' '}
          <a href="https://stackoverflow.com/questions/ask">
            ask your own question
          </a>
          .
        </p>
      </CommentLast>
    </CommentBody>
  );
}

export default Comment;

const CommentBody = styled.div`
  background-color: #ffffff;
`;

const CommentTiTle = styled.div`
  margin: 10px;
  padding: 10px;
  margin-left: -10px;
  > h2 {
    font-size: 21px;
    font-weight: 400;
  }
`;
const CommetHelp = styled.div`
  padding: 0px;
  margin: 0px;
  margin-top: 10px;
  border: 1px solid hsl(47deg 69% 69%);
  border-radius: 3px 3px 3px 3px;
  background-color: hsl(47deg 83% 91%);
  > p {
    padding: 10px;
    margin: 10px;
    font-weight: 400;
  }
  > ul > p {
    padding: 10px;
    margin: 10px;
  }
  > ul > li {
    list-style-type: disc;
    font-size: 15px;
    font-weight: 400;
    margin-left: 55px;
    font-weight: 400;
  }
`;
const Buttons = styled.div`
  display: flex;
`;

const PostButton = styled.div`
  background-color: hsl(206deg 100% 52%);
  border-radius: 3px;
  border: none;
  color: #ffffff;
  padding: 13px;
  margin-top: 30px;
  margin-bottom: 15px;
`;
const CommentLast = styled.div`
  padding: 0;
  margin: 0;
  > p {
    padding: 10px;
    margin: 10px;
    margin-left: -10px;
    font-size: 19px;
  }
`;
const CommentLastBox = styled.a`
  margin: 2px 2px 2px 0;
  padding: 4.8px 6px;
  background-color: #e1ecf4;
  border-radius: 3px;
`;

import Editor from './Editors';
import styled from 'styled-components';
import { RowDiv } from '../styles/StyledStore';
import { useState } from 'react';
import axios from 'axios';
import { pushDefaultWithToken } from '../util/axiosHelper';
import CommonButton, {
  BUTTON_TYPE_USER_DELETE,
  BUTTON_TYPE_USER_EDIT,
} from './CommonButton';
import ModalCommentDelete from './ModalCommentDelete';
import ModalCommentEdit from './ModalCommentEdit';
import { getCOMMENT_CREATE, getPOSTS_DETAIL } from '../util/urlStore';
import { getIS_ALIVE, getUser } from '../util/tokenHelper';
import { NONE_IMG } from '../data/dumyData';

/* 
  "comments": [
    {
      "id": 1,
      "createdAt": "2022-12-28T17:35:22.259912",
      "likes": [],
      "content": " 댓글 내용입니다 ",
      "likeCount": 0
    },
*/

/**
 * Created by @ldk199662
 * Modified by @KimTank
 * @returns <Comment>
 */
function CommentModule({
  postId,
  comments = [],
  setPost,
  handleCommentDelete,
  handleCommentEdit,
  commentDeleteModalIsOpen,
  setCommentDeleteModalOpen,
  commentEditModalIsOpen,
  setCommentEditModalOpen,
}) {
  const [comment, setComment] = useState('');

  const handleComment = (comment) => {
    setComment(comment);
  };

  const onClickSubmit = async () => {
    if (comment.length < 10) {
      alert('내용을 최소 10글자 이상 적어주세요');
      return false;
    }

    axios
      .post(
        getCOMMENT_CREATE({ postId: postId }),
        {
          content: comment,
        },
        pushDefaultWithToken()
      )
      .then(() => {
        console.log(getPOSTS_DETAIL({ postId: postId }));
        axios
          .get(getPOSTS_DETAIL({ postId: postId }), {
            withCredentials: true,
          })
          .then((response) => {
            const { data } = response;
            console.log(data);

            setPost(data.postToPostCommentResponseDto);
            setComment('');
          })
          .catch((error) => alert(error));
      })
      .catch((error) => {
        console.log(error);
        let errorText;
        const { message } = error;
        const code = Number(message.slice(-3));
        switch (code) {
          case 401:
          case 404:
          case 500:
          default:
            errorText = message;
        }
        return alert(errorText);
      });
  };

  return (
    <CommentBody>
      <CommentArea>
        {comments.length === 0 ? (
          <div>No comment</div>
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment.id}>
              <RowDiv>
                <img
                  src={comment.userImageUrl}
                  alt={'userImage'}
                  onError={(e) => (e.target.src = NONE_IMG)}
                  style={{ width: '30px', height: '30px' }}
                />
                <p>| {comment.userName} |</p>
                <p>|</p>
                <div>| like: {comment.likeCount} | </div>
                {getIS_ALIVE() && getUser().id === comment.userId ? (
                  <RowDiv>
                    <button>| like |</button>
                    <button>| unlike |</button>
                    <CommonButton
                      buttonType={BUTTON_TYPE_USER_EDIT}
                      cont={'Edit'}
                      onClick={handleCommentEdit}
                    />
                    <ModalCommentEdit
                      commentEditModalIsOpen={commentEditModalIsOpen}
                      setCommentEditModalOpen={setCommentEditModalOpen}
                      postId={postId}
                      comment={comment}
                      setPost={setPost}
                    />{' '}
                    <CommonButton
                      buttonType={BUTTON_TYPE_USER_DELETE}
                      cont={'Delete'}
                      onClick={handleCommentDelete}
                    />
                    <ModalCommentDelete
                      commentDeleteModalIsOpen={commentDeleteModalIsOpen}
                      setCommentDeleteModalOpen={setCommentDeleteModalOpen}
                      postId={postId}
                      commentId={comment.id}
                      setPost={setPost}
                    />
                  </RowDiv>
                ) : (
                  ''
                )}
              </RowDiv>
              <div>{comment.content}</div>
            </CommentItem>
          ))
        )}
      </CommentArea>
      <CommentTiTle>
        <h2>Your Answer</h2>
      </CommentTiTle>
      <div>
        <Editor value={comment} setValue={handleComment} />
      </div>
      <CommentHelp>
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
      </CommentHelp>
      <Buttons>
        <PostButton
          className="submit-button"
          type="button"
          onClick={onClickSubmit}
        >
          Post Your Answer
        </PostButton>
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

export default CommentModule;

const CommentBody = styled.div`
  background-color: #ffffff;
  margin-left: 20px;
`;
const CommentArea = styled.ul`
  padding: 30px;
  margin: 30px;
`;

const CommentItem = styled.li`
  border-top: 1px solid hsl(210deg 8% 90%);
  margin: 4px;
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
const CommentHelp = styled.div`
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

const PostButton = styled.button`
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

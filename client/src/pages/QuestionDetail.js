import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CommonButton, {
  BUTTON_TYPE_USER_DELETE,
  BUTTON_TYPE_USER_EDIT,
} from '../components/CommonButton';
import Sidebar from '../components/Sidebar';
import { MainContainer, RowDiv } from '../styles/StyledStore';
import styled from 'styled-components';
import { IS_ALIVE } from '../util/tokenHelper';
import ModalPostDelete from '../components/ModalPostDelete';
import CommentModule from '../components/CommentModule';

const Tags = ({ tags = [] }) => {
  return (
    <div id="tags">
      <div>TAGS</div>
      <div>
        {tags.length === 0 ? (
          <span>No tags</span>
        ) : (
          <RowDiv>
            {tags.map((tag, index) => (
              <li key={index}>| {tag} |</li>
            ))}
          </RowDiv>
        )}
      </div>
    </div>
  );
};

/**
 * made by @ldk199662
 * since 22-12-30
 * modified by @KimTank
 * @returns
 */
function QuestionDetail() {
  const [post, setPost] = useState({});
  const [deleteModalIsOpen, setIsDeleteModalOpen] = useState(false);
  const [commentDeleteModalIsOpen, setCommentDeleteModalOpen] = useState(false);
  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_EP_POSTS_DETAIL}/${state.post.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        const { data } = response;
        setPost(data);
      })
      .catch((error) => alert(error));
  }, []);

  const handleDelete = () => {
    setIsDeleteModalOpen(!deleteModalIsOpen);
  };

  const handleEdit = () => {
    navigate('/questionEdit', { state: { post: post } });
  };

  const handleCommentDelete = () => {
    setCommentDeleteModalOpen(!commentDeleteModalIsOpen);
  };

  return (
    <QuestionDetailBody>
      <QuestionDetails>
        <div>
          {/* TODO user정보접속 -> 게시물정보접속 -> userid동일할때 뷰가 보여야됨*/}
          {IS_ALIVE() ? (
            <div id="buttons">
              <CommonButton
                buttonType={BUTTON_TYPE_USER_EDIT}
                cont="Edit post"
                onClick={handleEdit}
              />
              <CommonButton
                buttonType={BUTTON_TYPE_USER_DELETE}
                cont="Delete post"
                onClick={handleDelete}
              />
              <ModalPostDelete
                deleteModalIsOpen={deleteModalIsOpen}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
                post={post}
              />
            </div>
          ) : (
            ''
          )}
          <RowDiv id="etcs">
            <div>| {post.createdAt} |</div>
            <div>| LIKES: {post.likeCount} |</div>
            <div>| VIEWS: {post.views} |</div>
            <button>| LIEK |</button>
            <button>| UNLKIED |</button>
          </RowDiv>
          <Tags tags={post.tags} />
          <div id="title">
            <strong>TITLE</strong>
          </div>
          <div>{post.title}</div>
          <div id="cont">
            <div>
              <strong>CONTENT</strong>
            </div>
            <div>{post.content}</div>
          </div>
          {IS_ALIVE() ? (
            <div>
              <CommentModule
                postId={post.id}
                comments={post.comments}
                setPost={setPost}
                handleCommentDelete={handleCommentDelete}
                commentDeleteModalIsOpen={commentDeleteModalIsOpen}
                setCommentDeleteModalOpen={setCommentDeleteModalOpen}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </QuestionDetails>
      <Sidebar />
    </QuestionDetailBody>
  );
}

export default QuestionDetail;

const QuestionDetailBody = styled(MainContainer)`
  background: #ffffff;
`;
const QuestionDetails = styled.div`
  border-left: 1px solid hsl(210deg 8% 90%);
`;

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
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
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
  const [commentEditModalIsOpen, setCommentEditModalOpen] = useState(false);
  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_EP_POSTS_DETAIL}/${state.post.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        const { data } = response;
        console.log(response);
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

  const handleCommentEdit = () => {
    setCommentEditModalOpen(!commentEditModalIsOpen);
  };

  const handleCommentDelete = () => {
    setCommentDeleteModalOpen(!commentDeleteModalIsOpen);
  };

  return (
    <QuestionDetailBody>
      <QuestionDetails>
        <QuestionDetailTitle id="title">
          <strong>TITLE</strong>
          <div>{post.title}</div>
          <QuestionDetailStatus>
            <div>Asked {post.createdAt} </div>
            <div>Likes {post.likeCount}</div>
            <div>Viewed {post.views}</div>
          </QuestionDetailStatus>
        </QuestionDetailTitle>
        <div>
          <QuestionDetailBox>
            <QuestionDetailLikebtn>
              <button>
                <IoIosArrowUp size={40} />
              </button>
              <button>
                <IoIosArrowDown size={40} />
              </button>
            </QuestionDetailLikebtn>
            <QuestionDetailContent id="cont">
              <div>
                <strong>CONTENT</strong>
              </div>
              <div>{post.content}</div>
              <QuestionDetailTag>
                <Tags tags={post.tags} />
              </QuestionDetailTag>
            </QuestionDetailContent>
          </QuestionDetailBox>
          {/* TODO user정보접속 -> 게시물정보접속 -> userid동일할때 뷰가 보여야됨*/}
          {IS_ALIVE() ? (
            <div id="buttons">
              <EditDeleteBtn>
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
              </EditDeleteBtn>
              <ModalPostDelete
                deleteModalIsOpen={deleteModalIsOpen}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
                post={post}
              />
            </div>
          ) : (
            ''
          )}
          {IS_ALIVE() ? (
            <div>
              <CommentModule
                postId={post.id}
                comments={post.comments}
                setPost={setPost}
                handleCommentDelete={handleCommentDelete}
                handleCommentEdit={handleCommentEdit}
                commentDeleteModalIsOpen={commentDeleteModalIsOpen}
                setCommentDeleteModalOpen={setCommentDeleteModalOpen}
                commentEditModalIsOpen={commentEditModalIsOpen}
                setCommentEditModalOpen={setCommentEditModalOpen}
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
  margin-top: -30px;
`;
const QuestionDetailTitle = styled.div`
  padding: 30px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
`;
const QuestionDetailStatus = styled.div`
  display: flex;
  padding: 10px 0px;
  margin-bottom: -20px;
  color: hsl(210, 8%, 5%);
  gap: 0.3em;
  align-items: center;
  white-space: nowrap;
  > div {
    font-weight: 400;
    font-size: 13px;
  }
`;
const QuestionDetailBox = styled.div`
  display: flex;
`;
const QuestionDetailContent = styled.div`
  padding: 70px;
  margin-left: -70px;
  width: 100%;
`;
const QuestionDetailTag = styled.div`
  padding: 70px 0px; ;
`;
const QuestionDetailLikebtn = styled.div`
  padding: 30px;
  display: grid;
  font-size: 40px;
  margin-bottom: 60px;
  > button {
    background-color: #ffffff;
    border: none;
  }
`;
const EditDeleteBtn = styled.div`
  display: flex;
  margin-left: 30px;
  gap: 1%;
`;

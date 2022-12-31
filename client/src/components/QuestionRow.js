import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RowDiv } from '../styles/StyledStore';

const Tag = styled.li`
  padding: 4px 8px;
  margin: 0px 2px;
  background-color: #e1ecf4;
  color: #39739d;
  border-radius: 5px;
`;

/**
 * Created by @ldk199662
 * Modified by @KimTank
 * @returns <QuestionRow>
 */
function QuestionRow({ posts = [] }) {
  const navigate = useNavigate();
  return (
    <ul>
      {posts.length === 0 ? (
        <div>Posts are empty</div>
      ) : (
        posts.map((post) => (
          <li key={post.id}>
            <div
              role="presentation"
              onClick={() =>
                navigate('/questionDetail', { state: { post: post } })
              }
              onKeyDown={() =>
                navigate('/questionDetail', { state: { post: post } })
              }
            >
              <MainQuestionList>
                <QuestionStatus>
                  <QuestionLists>
                    <span>{post.likeCount}</span>
                    <span>like</span>
                  </QuestionLists>
                  <QuestionLists>
                    <span>0</span>
                    <span>answers</span>
                  </QuestionLists>
                  <QuestionLists>
                    <span>{post.views}</span>
                    <span>views</span>
                  </QuestionLists>
                </QuestionStatus>
                <QuestionTitleBody>
                  <QuestionTitle>{post.title}</QuestionTitle>
                  <Info>
                    <QuestionTag>
                      {post.tags.length === 0 ? (
                        <p>No tags</p>
                      ) : (
                        <RowDiv>
                          {post.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                          ))}
                        </RowDiv>
                      )}
                    </QuestionTag>
                    <UserInfo>
                      <ManAndWhen>Asked {post.createdAt}</ManAndWhen>
                    </UserInfo>
                  </Info>
                </QuestionTitleBody>
              </MainQuestionList>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default QuestionRow;

const MainQuestionList = styled.div`
  position: relative;
  display: grid;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  padding: 16px;
`;

const QuestionStatus = styled.div`
  gap: calc(6px * 1);
  margin-right: calc(16px * 1);
  margin-bottom: -10px;
  width: calc(calc(96px * 1) + calc(12px * 1));
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: flex-end;
  color: hsl(210, 8%, 45%);
`;
const QuestionLists = styled.div`
  color: hsl(210, 8%, 5%);
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  > span {
    font-weight: 400;
    font-size: 13px;
  }
`;

const QuestionTitleBody = styled.div`
  display: block;
`;
const QuestionTitle = styled.div`
  text-decoration: none;

  color: #0074cc;
  font-size: 1.1rem;
  display: block;
  margin-top: -50px;
  margin-left: 160px;
`;
const QuestionTag = styled.span`
  display: inline-block;
  margin-right: 3px;
  flex-direction: row;
  padding: 5px;
  font-size: 10px;
  margin-left: 160px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 400px;
  row-gap: 8px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;

  flex-wrap: wrap;
  margin-left: auto;
  justify-content: flex-end;
  line-height: 1;
`;
const ManAndWhen = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 4px;
  margin: 2px;
  font-size: 12px;
  margin-top: 40px;
  color: hsl(210, 8%, 45%);
  cursor: pointer;
`;

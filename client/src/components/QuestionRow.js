import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function QuestionRow() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('/board/posts', {
        withCredentials: true,
        params: {
          page: 1,
          size: 10,
        },
      })
      .then((response) => {
        const { data } = response;
        console.log('Temp.js/Temp()/useEffect/data.data: ');
        console.log(data.data);
        console.log(`======================================`);
        setPosts(data.data);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <>
      {posts.length === 0 ? (
        <div>not empty</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
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
                  <QuestionTitle>Title: {post.title}</QuestionTitle>
                  <Info>
                    <QuestionTag>
                      {post.tags.length === 0 ? (
                        <p>No tags</p>
                      ) : (
                        <p>data.tags[0]</p>
                        // <ul>
                        //   data.tags.map((tag, index) => (<li key={index}>tag</li>))
                        // </ul>
                      )}
                    </QuestionTag>
                    <UserInfo>
                      <ManAndWhen>Asked{post.createdAt}</ManAndWhen>
                    </UserInfo>
                  </Info>
                </QuestionTitleBody>
              </MainQuestionList>
            </div>
          </div>
        ))
      )}
    </>
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
  background-color: #e1ecf4;
  flex-direction: row;
  color: #39739d;
  padding: 5px;
  border-radius: 5px;
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

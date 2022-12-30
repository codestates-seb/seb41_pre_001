/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, RowDiv } from '../styles/StyledStore';
/**
 * # QuestionList
 *
 * ## init
 *
 * @KimTank
 *
 * ## modified
 *
 * @TODO
 *
 * ## description
 *
 * - 질문 리스트
 * - nested route(중첩 라우트로 목록눌렀을 때 상세로 이동)
 *
 * @returns QuestionList
 */
function Temp() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  // const handleItemClick = (e, post) => {
  //   navigate('/questionDetail', { state: { post: post } });
  // };

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
        setPosts(data.data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <MainContainer>
      <ul>
        {posts.length === 0 ? (
          <li>not empty</li>
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              <div
                onClick={() =>
                  navigate('/questionDetail', { state: { post: post } })
                }
                onKeyDown={() =>
                  navigate('/questionDetail', { state: { post: post } })
                }
              >
                <RowDiv>
                  <div>Title: {post.title}</div>
                  <div>{post.createdAt}</div>
                  <div>like {post.likeCount}</div>
                  <div>view {post.views}</div>
                </RowDiv>
                <div>
                  {post.tags.length === 0 ? (
                    <p>No tags</p>
                  ) : (
                    <p>data.tags[0]</p>
                    // <ul>
                    //   data.tags.map((tag, index) => (<li key={index}>tag</li>))
                    // </ul>
                  )}
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </MainContainer>
  );
}

export default Temp;

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IS_ALIVE } from '../util/tokenHelper';
import QuestionRow from './QuestionRow';
import Pagination from 'react-js-pagination';
import { RowDiv } from '../styles/StyledStore';

// const PaginationContainer = styled(RowDiv)`
//   margin: 4px 8px;
//   width: 100%;
//   justify-content: end;
// `;

// const PaginationButton = styled.button`
//   font-size: 15px;
//   border: 1px solid grey;
//   background-color: ${(props) => (props.select ? 'orange' : 'white')};
//   width: 50px;
//   height: 50px;
//   margin: 4px;
// `;

/**
 * - Created by @ldk199662
 * - Modified by @KimTank 221231
 * @returns <Main>
 */
function Main() {
  const [data, setData] = useState({});
  const [state, setState] = useState({ activePage: 1 });
  const navigate = useNavigate();

  const linePageSizeNumber = 20;
  //페이지가 변경될때
  useEffect(() => {
    axios
      .get('/board/posts', {
        withCredentials: true,
        params: {
          page: state.activePage,
          size: linePageSizeNumber,
        },
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
        setData(data);
      })
      .catch((error) => alert(error));
  }, []);

  const handlePageChange = (buttonNumber) => {
    setState({ activePage: buttonNumber });
  };

  const handleAskBtn = () => {
    navigate('/questionCreate');
  };

  return (
    <MainBody>
      <MainTitle>
        <h2>Top Questions</h2>
        {IS_ALIVE() ? (
          <button onClick={() => handleAskBtn()}>Ask Question</button>
        ) : (
          ''
        )}
      </MainTitle>
      <QuestionRow posts={data.data} />
      <RowDiv>
        <Pagination
          activePage={state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={1000}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </RowDiv>
    </MainBody>
  );
}

export default Main;

const MainBody = styled.div`
  background-color: #ffffff;
  margin-top: -30px;
  border-left: 1px solid hsl(210deg 8% 90%);
  /* 변경ty margin-left: 250px; */
`;

const MainTitle = styled.div`
  padding: 30px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
  > h2 {
    font-weight: 500;
  }
  > button {
    background-color: hsl(206deg 100% 52%);
    border-radius: 3px;
    border: none;
    color: #ffffff;
    margin-left: 600px;
    margin-top: -60px;
    padding: 10px;
  }
  Button:hover {
    background-color: #0c63a9;
  }
`;

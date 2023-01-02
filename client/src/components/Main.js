import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getIS_ALIVE } from '../util/tokenHelper';
import { getPOSTS_LIST } from '../util/urlStore';
import Pagination from './lib/Pagination';
import QuestionRow from './QuestionRow';

/**
 * - Created by @ldk199662
 * - Modified by @KimTank 221231
 * @returns <Main>
 */
function Main() {
  const [data, setData] = useState({ pageInfo: { totalElements: 0 } });
  const [state, setState] = useState({ activePage: 1 });
  const navigate = useNavigate();

  const linePageSizeNumber = 20;
  //페이지가 변경될때
  useEffect(() => {
    axios
      .get(getPOSTS_LIST(), {
        withCredentials: true,
        params: {
          page: state.activePage,
          size: linePageSizeNumber,
        },
      })
      .then((response) => {
        const { data } = response;
        setData(data);
      })
      .catch((error) => alert(error));
  }, [state]);

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
        {getIS_ALIVE() ? (
          <button onClick={() => handleAskBtn()}>Ask Question</button>
        ) : (
          ''
        )}
      </MainTitle>
      <QuestionRow posts={data.data} />
      <Pagination
        activePage={state.activePage}
        itemsCountPerPage={linePageSizeNumber}
        totalItemsCount={data.pageInfo.totalElements}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
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
    margin-left: 700px;
    margin-top: -60px;
    padding: 10px;
  }
  Button:hover {
    background-color: #0c63a9;
  }
`;

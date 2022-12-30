import styled from 'styled-components';
import { Link } from 'react-router-dom';
function QuestionRow() {
  return (
    <>
      <MainQuestionList>
        <QuestionStatus>
          <QuestionLists>
            <span>0</span>
            <span>vote</span>
          </QuestionLists>
          <QuestionLists>
            <span>1</span>
            <span>answers</span>
          </QuestionLists>
          <QuestionLists>
            <span>6</span>
            <span>views</span>
          </QuestionLists>
        </QuestionStatus>
        <QuestionTitleBody>
          <QuestionTitle to={'/questionDetail'}>title</QuestionTitle>
          <Info>
            <QuestionTag>
              {/* {tag.split(',').map((tag) => tag.id)} */}
            </QuestionTag>
            <UserInfo>
              <UserLink>{/* {id} */}</UserLink>
              <ManAndWhen>{/* asked {createdAt} */}</ManAndWhen>
            </UserInfo>
          </Info>
        </QuestionTitleBody>
      </MainQuestionList>
    </>
  );
}

export default QuestionRow;

const MainQuestionList = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  padding: 16px;
`;

const QuestionStatus = styled.div`
  gap: calc(6px * 1);
  margin-right: calc(16px * 1);
  margin-bottom: 4px;
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
const QuestionTitleBody = styled.div``;
const QuestionTitle = styled(Link)`
  text-decoration: none;
  color: #0074cc;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
`;
const QuestionTag = styled.span`
  display: inline-block;
  margin-right: 3px;
  background-color: #e1ecf4;
  color: #39739d;
  padding: 5px;
  border-radius: 5px;
  font-size: 10px;
  margin-top: -10px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 400px;
  row-gap: 8px;
  margin-top: 25px;
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
  color: hsl(210, 8%, 45%);
  cursor: pointer;
`;
const UserLink = styled.div`
  white-space: nowrap;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: hsl(210, 8%, 45%);
  font-size: 12px;
  a {
    color: hsl(210, 8%, 45%);
  }
`;

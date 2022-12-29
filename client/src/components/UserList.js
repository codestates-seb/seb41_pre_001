import styled from 'styled-components';
import { UserSpan } from '../styles/StyledStore';

const Item = styled.li``;

const ListContainer = styled.div`
  padding: 8px 0px;
`;

export const TITLE_TYPE_ANSWERS = 1;
export const TITLE_TYPE_QUESTION = 2;
export const TITLE_TYPE_TAGS = 3;

const List = styled.ul`
  border: 1px solid #babfc4;
  border-radius: 5px;
`;

const ListTitle = styled.p`
  font-size: 21px;
`;

/**
 * Created by @KimTank
 * @param { titleType = -1, conts = [] }
 * @returns <ListContainer>
 */
const UserList = ({ titleType = -1, conts = [] }) => {
  if (titleType === -1) return false;

  const typeValue = {};
  switch (titleType) {
    case TITLE_TYPE_ANSWERS:
      typeValue.title = 'Answers';
      typeValue.verb = 'answered';
      typeValue.noun = 'questions';
      break;
    case TITLE_TYPE_QUESTION:
      typeValue.title = 'Questions';
      typeValue.verb = 'asked';
      typeValue.noun = typeValue.title.toLowerCase();
      break;
    case TITLE_TYPE_TAGS:
      typeValue.title = 'Tags';
      typeValue.verb = 'participated in';
      typeValue.noun = typeValue.title.toLowerCase();
      break;
    default:
      return false;
  }
  return (
    <ListContainer>
      <ListTitle>{typeValue.title}</ListTitle>
      <List>
        {conts.length === 0 ? (
          <Item>
            <UserSpan>
              You have not {typeValue.verb} any {typeValue.noun}
            </UserSpan>
          </Item>
        ) : (
          conts.map((cont, index) => {
            <Item key={index}>
              <UserSpan>{cont}</UserSpan>
            </Item>;
          })
        )}
      </List>
    </ListContainer>
  );
};

export default UserList;

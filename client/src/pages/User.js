import { faker } from '@faker-js/faker';
import { useState } from 'react';
import styled from 'styled-components';
import CommonButton, { BUTTON_TYPE_GOOGLE } from '../components/CommonButton';
import ModalDelete from '../components/ModalDelete';
import ModalEdit from '../components/ModalEdit';
import RandomIcon from '../components/RandomIcon';
import { ColumnCenterDiv, RowDiv } from '../styles/StyledStore';

const Title = styled.p`
  font-size: 34px;
  padding: 0px 8px;
`;

const ListTitle = styled.p`
  font-size: 21px;
`;

const Container = styled.div`
  width: 1100px;
  max-width: 1100px;
  min-width: 1100px;
`;

const UserSpan = styled.span`
  font-size: 13px;
  padding: 8px;
  color: #6a737b;
`;

const UserDetail = ({ cont }) => {
  return (
    <>
      <RandomIcon />
      <UserSpan>{cont}</UserSpan>
    </>
  );
};

const TITLE_TYPE_ANSWERS = 1;
const TITLE_TYPE_QUESTION = 2;
const TITLE_TYPE_TAGS = 3;

const Item = styled.li`
  border: 1px solid #babfc4;
  border-radius: 5px;
`;

const ListContainer = styled.div`
  padding: 8px 0px;
`;

const List = ({ titleType = -1, conts = [] }) => {
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
      <ul>
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
      </ul>
    </ListContainer>
  );
};

const AvatarImg = styled.img`
  width: 128px;
  height: 128px;
`;

const UserDescriptionDiv = styled(RowDiv)`
  padding: 4px 8px;
`;

const UserButtonDiv = styled(ColumnCenterDiv)`
  width: 400px;
  margin: 8px;
  justify-content: stretch;
`;

function User() {
  const [deleteModalIsOpen, setIsDeleteModalOpen] = useState(false);
  const [editModalIsOpen, setIsEditModalOpen] = useState(false);
  const handleDeletePrompt = () => {
    setIsDeleteModalOpen(true);
  };
  const handleEditPrompt = () => {
    setIsEditModalOpen(true);
  };
  return (
    <section id="userDiv" className="withSidebar">
      <Container>
        <RowDiv>
          <AvatarImg src={faker.image.avatar()} alt="avatar" />
          <ColumnCenterDiv>
            <Title>userID</Title>
            <UserDescriptionDiv>
              <UserDetail cont={'Member for 9 days'} />
              <UserDetail cont={'Last seen this week'} />
              <UserDetail cont={'Visited 8 days, 1 consecutive'} />
            </UserDescriptionDiv>
          </ColumnCenterDiv>
        </RowDiv>
        <UserButtonDiv>
          <CommonButton
            onClick={handleEditPrompt}
            buttonType={BUTTON_TYPE_GOOGLE}
            cont={'Edit profile'}
          />
          <ModalEdit
            editModalIsOpen={editModalIsOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
          <CommonButton
            onClick={handleDeletePrompt}
            buttonType={BUTTON_TYPE_GOOGLE}
            cont={'Delete account'}
          />
          <ModalDelete
            deleteModalIsOpen={deleteModalIsOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        </UserButtonDiv>
        <List titleType={TITLE_TYPE_ANSWERS} />
        <List titleType={TITLE_TYPE_QUESTION} />
        <List titleType={TITLE_TYPE_TAGS} />
      </Container>
    </section>
  );
}

export default User;

import { faker } from '@faker-js/faker';
import { useState } from 'react';
import styled from 'styled-components';
import CommonButton, {
  BUTTON_TYPE_USER_DELETE,
  BUTTON_TYPE_USER_EDIT,
} from '../components/CommonButton';
import ModalDelete from '../components/ModalDelete';
import ModalEdit from '../components/ModalEdit';
import RandomIcon from '../components/RandomIcon';
import UserList, {
  TITLE_TYPE_ANSWERS,
  TITLE_TYPE_QUESTION,
  TITLE_TYPE_TAGS,
} from '../components/UserList';
import {
  ColumnCenterDiv,
  MainContainer,
  RowDiv,
  UserSpan,
} from '../styles/StyledStore';

const Title = styled.p`
  font-size: 34px;
  padding: 0px 8px;
`;

const Container = styled.div`
  width: 800px;
  max-width: 800px;
  min-width: 800px;
`;

/**
 * Created by @KimTank
 * @param { cont }
 * @returns <>
 */
const UserDetail = ({ cont }) => {
  return (
    <>
      <RandomIcon />
      <UserSpan>{cont}</UserSpan>
    </>
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

/**
 * Created by @KimTank
 * - 221228: 뷰완성
 * @returns <MainContainer>
 */
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
    <MainContainer>
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
            buttonType={BUTTON_TYPE_USER_EDIT}
            cont={'Edit profile'}
          />
          <ModalEdit
            editModalIsOpen={editModalIsOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
          <CommonButton
            onClick={handleDeletePrompt}
            buttonType={BUTTON_TYPE_USER_DELETE}
            cont={'Delete account'}
          />
          <ModalDelete
            deleteModalIsOpen={deleteModalIsOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        </UserButtonDiv>
        <UserList titleType={TITLE_TYPE_ANSWERS} />
        <UserList titleType={TITLE_TYPE_QUESTION} />
        <UserList titleType={TITLE_TYPE_TAGS} />
      </Container>
    </MainContainer>
  );
}

export default User;

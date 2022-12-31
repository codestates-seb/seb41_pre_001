import axios from 'axios';
import { useEffect, useState } from 'react';
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
import { pushDefaultWithToken } from '../util/axiosHelper';

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
  const [user, setUser] = useState({});
  const [deleteModalIsOpen, setIsDeleteModalOpen] = useState(false);
  const [editModalIsOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_EP_USER, pushDefaultWithToken())
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        let errorText;
        const { message } = error;
        const code = Number(message.slice(-3));
        switch (code) {
          case 401:
          case 404:
          case 500:
          default:
            errorText = message;
        }
        return alert(errorText);
      });
  }, []);

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
          <AvatarImg src={user.userImageUrl} alt="avatar" />
          <ColumnCenterDiv>
            <Title>
              {user.userName}({user.userEmail})
            </Title>
            <UserDescriptionDiv>
              <UserDetail
                cont={`Member for ${Math.floor(Math.random() * 22) + 1} ${
                  Math.random() < 0.5 ? 'days' : 'years'
                }`}
              />
              <UserDetail
                cont={`Last seen ${Math.floor(Math.random() * 22) + 1} ${
                  Math.random() < 0.2
                    ? 'years'
                    : Math.random() < 0.4
                    ? 'months'
                    : Math.random() < 0.6
                    ? 'days'
                    : Math.random() < 0.8
                    ? 'hours'
                    : 'minutes'
                }`}
              />
              <UserDetail
                cont={`Visited ${Math.floor(Math.random() * 22) + 1} ${
                  Math.random() < 0.2
                    ? 'years'
                    : Math.random() < 0.4
                    ? 'months'
                    : Math.random() < 0.6
                    ? 'days'
                    : Math.random() < 0.8
                    ? 'hours'
                    : 'minutes'
                }`}
              />
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
            user={user}
            editModalIsOpen={editModalIsOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
          <CommonButton
            onClick={handleDeletePrompt}
            buttonType={BUTTON_TYPE_USER_DELETE}
            cont={'Delete account'}
          />
          <ModalDelete
            user={user}
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

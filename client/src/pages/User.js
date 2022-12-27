import { faker } from '@faker-js/faker';
import { useState } from 'react';
import ModalDelete from '../components/ModalDelete';
import ModalEdit from '../components/ModalEdit';
import RandomIcon from '../components/RandomIcon';
import { RowDiv } from '../styles/StyledStore';

const UserDetail = ({ cont }) => {
  return (
    <>
      <RandomIcon />
      <span>{cont}</span>
    </>
  );
};

const TITLE_TYPE_ANSWERS = 1;
const TITLE_TYPE_QUESTION = 2;
const TITLE_TYPE_TAGS = 3;

const CommonList = ({ titleType = -1, conts = [] }) => {
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
    <>
      <p>{typeValue.title}</p>
      <ul>
        {conts.length === 0 ? (
          <span>
            You have not {typeValue.verb} any {typeValue.noun}
          </span>
        ) : (
          conts.map((cont, index) => {
            <li key={index}>
              <span>{cont}</span>
            </li>;
          })
        )}
      </ul>
    </>
  );
};

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
    <>
      <section id="userDiv" className="withSidebar">
        <RowDiv>
          <img src={faker.image.avatar()} alt="avatar" />
          <div>
            <p>userID</p>
            <RowDiv>
              <UserDetail cont={'Member for 9 days'} />
              <UserDetail cont={'Last seen this week'} />
              <UserDetail cont={'Visited 8 days, 1 consecutive'} />
            </RowDiv>
          </div>
        </RowDiv>
        <RowDiv>
          <button onClick={handleEditPrompt}>Edit profile</button>
          <ModalEdit
            editModalIsOpen={editModalIsOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
          <button onClick={handleDeletePrompt}>Delete account</button>
          <ModalDelete
            deleteModalIsOpen={deleteModalIsOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        </RowDiv>
        <CommonList titleType={TITLE_TYPE_ANSWERS} />
        <CommonList titleType={TITLE_TYPE_QUESTION} />
        <CommonList titleType={TITLE_TYPE_TAGS} />
      </section>
    </>
  );
}

export default User;

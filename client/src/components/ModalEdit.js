import { faker } from '@faker-js/faker';
import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-modal';
import { ColumnDiv } from '../styles/StyledStore';
import { pushDefaultWithToken } from '../util/axiosHelper';
import { regDisplayName } from '../util/regExp';
import { setUser } from '../util/tokenHelper';
import { getUSER_EDIT, getUSER_USER } from '../util/urlStore';
import CommonButton, {
  BUTTON_TYPE_USER,
  BUTTON_TYPE_USER_EDIT,
} from './CommonButton';
import LabelInput from './LabelInput';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

/**
 * Create by @KimTank
 *
 * 불러오는측에서
 * const [modalIsOpen, setIsOpen] = useState(false);
 * ReactModal.setAppElement('#app');
 * @param { editModalIsOpen, setIsEditModalOpen }
 * @returns <Modal>
 */
function ModalEdit({ editModalIsOpen, setIsEditModalOpen, user }) {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  //  let subtitle;
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleEdit = () => {
    if (
      userName.length === 0 ||
      password.length === 0 ||
      passwordConfirm === 0
    ) {
      alert('empty is not allowed');
      return false;
    }
    if (userName.length === 0) {
      alert('DisplayName is empty');
      return false;
    }
    if (userName.length < 3 || userName.length > 20) {
      alert('DisplayName is over 4 letters, under 20 letters');
      return false;
    }
    if (!regDisplayName.test(userName)) {
      alert('DisplayName is allowed by English or number');
      return false;
    }
    if (password !== passwordConfirm) {
      alert('password is not matched');
      return false;
    }
    //TODO 비밀번호 검증
    // if (!regPassword.test(userPassword)) {
    //   alert('Over 8 letters, contain over 1 English, contain over 1 number');
    //   return false;
    // }
    //TODO 비밀번호 확인 검증
    // if (!regPassword.test(userPassword)) {
    //   alert('Over 8 letters, contain over 1 English, contain over 1 number');
    //   return false;
    // }
    axios
      .patch(
        getUSER_EDIT({ userId: user.id }),
        {
          userName: userName,
          userPassword: passwordConfirm,
          userImageUrl: faker.image.avatar(),
        },
        pushDefaultWithToken()
      )
      .then(() => {
        axios
          .get(getUSER_USER(), pushDefaultWithToken())
          .then((response) => {
            setUser(response.data);
            closeModal();
          })
          .catch((error) => {
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
      })
      .catch((error) => {
        return alert(error);
      });
    closeModal();
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setPassword('');
    setPasswordConfirm('');
  };
  return (
    <Modal
      isOpen={editModalIsOpen}
      /*  onAfterOpen={afterOpenModal} */
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit account modal"
    >
      <h2 /*  ref={(_subtitle) => (subtitle = _subtitle)} */>Edit Account</h2>
      <div>Account edit</div>
      <ColumnDiv>
        <LabelInput
          label={'Display Name'}
          value={userName}
          onChange={handleName}
        />
        <LabelInput
          label={'Password'}
          value={password}
          type={'password'}
          onChange={handlePassword}
        />
        <LabelInput
          label={'Password Confirm'}
          value={passwordConfirm}
          type={'password'}
          onChange={handlePasswordConfirm}
        />
      </ColumnDiv>
      <CommonButton
        buttonType={BUTTON_TYPE_USER_EDIT}
        cont={'Edit'}
        onClick={handleEdit}
      />
      <CommonButton
        buttonType={BUTTON_TYPE_USER}
        cont={'Close'}
        onClick={closeModal}
      />
    </Modal>
  );
}

export default ModalEdit;

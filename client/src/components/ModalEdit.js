import { useState } from 'react';
import Modal from 'react-modal';
import { ColumnDiv } from '../styles/StyledStore';
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
function ModalEdit({ editModalIsOpen, setIsEditModalOpen }) {
  const [name, setName] = useState('');
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

  const handleEmail = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleEdit = () => {
    if (name.length === 0 || password.length === 0 || passwordConfirm === 0) {
      alert('empty is not allowed');
      return false;
    }
    if (password !== passwordConfirm) {
      alert('password is not matched');
      return false;
    }
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
        <LabelInput label={'Display Name'} value={name} onChange={handleName} />
        <LabelInput
          label={'Password'}
          value={password}
          type={'password'}
          onChange={handleEmail}
        />
        <LabelInput
          label={'Password Confirm'}
          value={passwordConfirm}
          type={'password'}
          onChange={handleEmailConfirm}
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

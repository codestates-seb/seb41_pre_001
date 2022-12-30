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
    alert(`'이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.

    영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요. 7년의 행운을 빌면서...'`);
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

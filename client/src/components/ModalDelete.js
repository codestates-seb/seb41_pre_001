import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import { getIS_ALIVE, setLOGOUT } from '../util/tokenHelper';
import { pushDefaultWithToken } from '../util/axiosHelper';
import CommonButton, {
  BUTTON_TYPE_USER,
  BUTTON_TYPE_USER_DELETE,
} from './CommonButton';
import LabelInput from './LabelInput';
import { getUSER_SIGNOUT } from '../util/urlStore';

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
 * @param { deleteModalIsOpen, setIsDeleteModalOpen }
 * @returns <Modal>
 */
function ModalDelete({ deleteModalIsOpen, setIsDeleteModalOpen, user }) {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  //  let subtitle;
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const verifyPoint = 'AGREE TO DELETE';

  const handleDelete = () => {
    if (text === verifyPoint) {
      axios
        .delete(getUSER_SIGNOUT({ userId: user.id }), pushDefaultWithToken())
        .then(() => {
          setLOGOUT();
          if (!getIS_ALIVE()) {
            alert('Succeed to delete your account, seeya');
            navigate('signin');
            closeModal();
          } else {
            alert(
              'Have a problem to remove your token, please shutdown your brower'
            );
            closeModal();
          }
        })
        .catch((error) => {
          console.log(error);
          let errorText;
          const { message } = error;
          const code = Number(message.slice(-3));
          switch (code) {
            case 401:
              errorText =
                'Wrong Email or Password, check your Email or Password';
              break;
            case 404:
            case 500:
              errorText = 'Sorry, We have problem for service. contact to us';
              break;
            default:
              errorText = message;
          }
          return alert(errorText);
        });
    } else {
      alert(`Please input "${verifyPoint}"`);
    }
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
    setText('');
  };
  return (
    <Modal
      isOpen={deleteModalIsOpen}
      /*  onAfterOpen={afterOpenModal} */
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Delete verify modal"
    >
      <h2 /*  ref={(_subtitle) => (subtitle = _subtitle)} */>Delete Account</h2>
      <form>
        <LabelInput
          label={`Input "${verifyPoint}"`}
          value={text}
          onChange={handleInputChange}
        />
      </form>
      <CommonButton
        buttonType={BUTTON_TYPE_USER_DELETE}
        onClick={handleDelete}
        cont={'Delete'}
      />
      <CommonButton
        buttonType={BUTTON_TYPE_USER}
        onClick={closeModal}
        cont={'Close'}
      />
    </Modal>
  );
}

export default ModalDelete;

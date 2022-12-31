import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { pushDefaultWithToken } from '../util/axiosHelper';
import CommonButton, {
  BUTTON_TYPE_USER,
  BUTTON_TYPE_USER_DELETE,
} from './CommonButton';

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
function ModalPostDelete({ deleteModalIsOpen, setIsDeleteModalOpen, post }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_EP_POSTS_DELETE}/${post.id}`,
        pushDefaultWithToken()
      )
      .then(() => {
        navigate('/');
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
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
  };
  return (
    <Modal
      isOpen={deleteModalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Delete post"
    >
      <h2>Delete Post</h2>
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

export default ModalPostDelete;

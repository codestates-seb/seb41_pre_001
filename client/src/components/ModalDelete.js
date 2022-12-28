import { useState } from 'react';
import Modal from 'react-modal';
import CommonButton, {
  BUTTON_TYPE_USER,
  BUTTON_TYPE_USER_DELETE,
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
 * @param { deleteModalIsOpen, setIsDeleteModalOpen }
 * @returns <Modal>
 */
function ModalDelete({ deleteModalIsOpen, setIsDeleteModalOpen }) {
  const [text, setText] = useState('');

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
      closeModal();
    } else {
      alert('Nop');
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

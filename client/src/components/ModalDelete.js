import { useState } from 'react';
import Modal from 'react-modal';

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

//불러오는측에서
// const [modalIsOpen, setIsOpen] = useState(false);
//ReactModal.setAppElement('#app');
function ModalDelete({ deleteModalIsOpen, setIsDeleteModalOpen }) {
  const [text, setText] = useState('');

  //  let subtitle;
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  const handleInputChange = (e) => {
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
  };
  return (
    <div id="modalContainer">
      <Modal
        isOpen={deleteModalIsOpen}
        /*  onAfterOpen={afterOpenModal} */
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete verify modal"
      >
        <h2 /*  ref={(_subtitle) => (subtitle = _subtitle)} */>
          Delete Account
        </h2>
        <div>Input &quot;{verifyPoint}&quot;</div>
        <form>
          <input value={text} onChange={handleInputChange} />
        </form>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default ModalDelete;

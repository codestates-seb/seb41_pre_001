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
  };
  return (
    <div id="modalContainer">
      <Modal
        isOpen={editModalIsOpen}
        /*  onAfterOpen={afterOpenModal} */
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit account modal"
      >
        <h2 /*  ref={(_subtitle) => (subtitle = _subtitle)} */>Edit Account</h2>
        <div>Account edit</div>
        <form>
          <input value={name} onChange={handleName} />
          <input value={password} onChange={handleEmail} />
          <input value={passwordConfirm} onChange={handleEmailConfirm} />
        </form>
        <button onClick={handleEdit}>Delete</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default ModalEdit;

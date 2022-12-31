import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { pushDefaultWithToken } from '../util/axiosHelper';
import CommonButton, {
  BUTTON_TYPE_USER,
  BUTTON_TYPE_USER_DELETE,
} from './CommonButton';
import Editor from './Editors';

const customStyles = {
  content: {
    top: '20%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-20%, -20%)',
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
function ModalCommentEdit({
  commentEditModalIsOpen,
  setCommentEditModalOpen,
  postId,
  comment,
  setPost,
}) {
  const [cont, setCont] = useState('');

  useEffect(() => {
    setCont(comment.content);
  }, []);

  const handleCont = (cont) => {
    setCont(cont);
  };

  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_EP_COMMENT_DELETE}/${postId}${process.env.REACT_APP_EP_COMMENT}/${comment.id}`,
        pushDefaultWithToken()
      )
      .then(() => {
        axios
          .get(`${process.env.REACT_APP_EP_POSTS_DETAIL}/${postId}`, {
            withCredentials: true,
          })
          .then((response) => {
            const { data } = response;
            setPost(data);
          })
          .catch((error) => alert(error));
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
    setCommentEditModalOpen(false);
  };
  return (
    <Modal
      isOpen={commentEditModalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Delete Comment"
    >
      <h2>Edit Comment</h2>
      <Editor value={cont} setValue={handleCont} />
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

export default ModalCommentEdit;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { pushDefaultWithToken } from '../util/axiosHelper';
import CommonButton, {
  BUTTON_TYPE_USER,
  BUTTON_TYPE_USER_EDIT,
} from './CommonButton';
import Editor from './Editors';

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

  const handleEdit = () => {
    axios
      .patch(
        `${process.env.REACT_APP_EP_COMMENT_EDIT}/${postId}${process.env.REACT_APP_EP_COMMENT}/${comment.id}`,
        {
          content: comment.content,
        },
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
            closeModal();
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
      contentLabel="Edit Comment"
    >
      <h2>Edit Comment</h2>
      <Editor value={cont} setValue={handleCont} />
      <CommonButton
        buttonType={BUTTON_TYPE_USER_EDIT}
        onClick={handleEdit}
        cont={'Edit'}
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

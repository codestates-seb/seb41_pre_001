import styled from 'styled-components';
import RandomIcon from './RandomIcon';

export const BUTTON_TYPE_GOOGLE = 1;
export const BUTTON_TYPE_GITHUB = 2;
export const BUTTON_TYPE_FACEBOOK = 3;
export const BUTTON_TYPE_USER = 4;
export const BUTTON_TYPE_USER_DELETE = 5;
export const BUTTON_TYPE_USER_EDIT = 6;

const Button = styled.div`
  color: ${(props) =>
    props.buttonType === BUTTON_TYPE_GOOGLE ||
    props.buttonType === BUTTON_TYPE_USER
      ? '#3b4045'
      : '#ffffff'};
  background-color: ${(props) =>
    props.buttonType === BUTTON_TYPE_GOOGLE ||
    props.buttonType === BUTTON_TYPE_USER
      ? '#ffffff'
      : props.buttonType === BUTTON_TYPE_GITHUB
      ? '#2f3337'
      : props.buttonType === BUTTON_TYPE_FACEBOOK ||
        props.buttonType === BUTTON_TYPE_USER_EDIT
      ? '#385496'
      : props.buttonType === BUTTON_TYPE_USER_DELETE
      ? '#e36049'
      : '#1495fa'};
  font-size: 13px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #d6d9dc solid;
  border-radius: 5px;
  margin: 8px 0px;

  :link,
  :visited,
  :hover,
  :active,
  :hover:not(.active) {
    text-decoration: none;
  }

  :hover {
    opacity: 80%;
  }

  :active {
    opacity: 60%;
  }
`;

/**
 * Create by @KimTank
 * @param { buttonType, cont, onClick }
 * @returns <Button>
 */
function CommonButton({ buttonType, cont, onClick }) {
  return (
    <Button
      buttonType={buttonType}
      onClick={onClick === undefined ? () => alert(cont) : onClick}
    >
      {buttonType === BUTTON_TYPE_USER ||
      buttonType === BUTTON_TYPE_USER_DELETE ||
      buttonType === BUTTON_TYPE_USER_EDIT ? (
        ''
      ) : (
        <RandomIcon />
      )}
      {cont}
    </Button>
  );
}
export default CommonButton;

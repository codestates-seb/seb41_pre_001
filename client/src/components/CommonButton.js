import styled from 'styled-components';
import RandomIcon from './RandomIcon';

export const BUTTON_TYPE_GOOGLE = 1;
export const BUTTON_TYPE_GITHUB = 2;
export const BUTTON_TYPE_FACEBOOK = 3;
//export const BUTTON_TYPE_NORMAL = 4;

const Button = styled.div`
  color: ${(props) =>
    props.buttonType === BUTTON_TYPE_GOOGLE ? '#3b4045' : '#ffffff'};
  background-color: ${(props) =>
    props.buttonType === BUTTON_TYPE_GOOGLE
      ? '#ffffff'
      : props.buttonType === BUTTON_TYPE_GITHUB
      ? '#2f3337'
      : props.buttonType === BUTTON_TYPE_FACEBOOK
      ? '#385496'
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

function CommonButton({ buttonType, cont }) {
  return (
    <Button buttonType={buttonType} onClick={() => alert(cont)}>
      <RandomIcon />
      {cont}
    </Button>
  );
}
export default CommonButton;

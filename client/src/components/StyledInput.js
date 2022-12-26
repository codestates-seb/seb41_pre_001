import { createRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ISearch } from '../asset/icon/icon-search.svg';

export const INPUT_TYPE_SEARCH = 1;

const InputContainer = styled.div`
  background-color: white;
  border: #babfc4 solid 1px;
  border-radius: 4px;
  width: auto;
  padding: 8px 8px;
  margin: 0px 8px;
  display: flex;
  flex: 1;
  align-items: center;

  &:focus,
  &:focus-within {
    outline: none;
    border-color: #aedafc;
    border-width: 4px;
  }
`;

const Input = styled.input`
  background-color: transparent;
  width: 700px;
  border: none;
  outline: none;
`;

function StyledInput({ isBugerVisible, placeholder, type }) {
  const inputRef = createRef();
  return (
    <InputContainer ref={inputRef} isBugerVisible={isBugerVisible}>
      {type === INPUT_TYPE_SEARCH ? <ISearch /> : ''}
      <Input
        placeholder={placeholder}
        onMouseEnter={() => inputRef.current.focus()}
      />
    </InputContainer>
  );
}

export default StyledInput;

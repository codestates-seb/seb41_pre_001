import styled from 'styled-components';
import StyledInput from '../components/StyledInput';

const Container = styled.div`
  width: 270px;
  min-width: 270px;
`;

const Label = styled.label`
  font-size: 15px;
  padding: 8px;
`;

/**
 * Created by @KimTank
 * @param { label, type, value, onChange }
 * @returns <Container>
 */
function LabelInput({ label, type, value, onChange }) {
  return (
    <Container>
      <Label style={{ for: { label } }}>
        <strong>{label}</strong>
      </Label>
      <StyledInput id={label} type={type} value={value} onChange={onChange} />
    </Container>
  );
}

export default LabelInput;

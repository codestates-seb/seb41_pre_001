import styled from 'styled-components';

const StyledLine = styled.hr`
  background-color: ${(props) => (props.grey ? '#babfc4' : '#f48225')};
  height: ${(props) => (props.grey ? '1px' : '6px')};
  z-index: 1;
`;

function Line({ grey }) {
  return <StyledLine grey={grey} />;
}

export default Line;

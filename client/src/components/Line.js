import styled from 'styled-components';

const StyledLine = styled.hr`
  width: 100%;
  background-color: ${(props) =>
    props.grey ? '#babfc4' : props.sideBarColor ? '#f1e5bc' : '#f48225'};
  height: ${(props) =>
    props.grey ? '1px' : props.sideBarColor ? '1px' : '3px'};
  z-index: 1;
  border: 0;
`;

/**
 * Created by @KimTank
 * @param { grey, sideBarColor }
 * @returns <StyledLine>
 */
function Line({ grey, sideBarColor }) {
  return <StyledLine grey={grey} sideBarColor={sideBarColor} />;
}

export default Line;

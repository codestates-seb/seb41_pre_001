import styled from 'styled-components';

export const MainContainer = styled.section`
  background-color: #f1f2f3;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 0px;
`;

export const MainWithSidebarContainer = styled.section`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 0px;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightContainer = styled.div`
  width: 316px;
  height: auto;
`;

export const InputFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 316px;
  height: auto;
  border: 1px #d6d9dc solid;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const InputsContainer = styled.div`
  width: 270px;
  height: auto;
  padding: 24px 0px;
`;

export const LabelDescription = styled.div`
  font-size: 10px;
`;
export const Last = styled.div`
  padding: 24px 8px;
  text-align: center;
`;
export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnCenterDiv = styled(ColumnDiv)`
  justify-content: center;
`;

export const UserSpan = styled.span`
  font-size: 13px;
  padding: 8px;
  color: #6a737b;
`;

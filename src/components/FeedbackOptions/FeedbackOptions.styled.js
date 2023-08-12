import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
  margin-left: 50px;
  margin-bottom: 50px;
`;

export const FeedbackBtn = styled.button`
  padding: 5px;
  width: 100px;
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: white;
  margin-right: 15px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 8px -1px;
  font-size: 20px;
  transition: background-color 300ms linear;

  &:is(:focus, :hover) {
    background-color: #e8d974;
  }
`;

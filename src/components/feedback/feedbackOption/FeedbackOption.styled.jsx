import styled from '@emotion/styled';

export const Counter = styled.div`
  padding: 8px;
`;
export const CounterList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
export const CounterItem = styled.li`
  padding: 0;
  margin: 0;
`;
export const CounterBtn = styled.button`
  background-color: lightgray;
  border: none;
  color: black;
  cursor: pointer;
  border-radius: 8px;
  margin: 0;
  padding: 16px;
  font-size: 22px;
  font-weight: bold;
  &:hover {
    background-color: lightblue;
    scale: 1.1;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:active {
    background-color: lightgreen;
    transform: scale(0.8);
    transition: all 0.1s ease-in-out;
  }
  ::first-letter {
    text-transform: uppercase;
  }
`;

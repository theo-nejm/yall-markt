import styled from 'styled-components';

export const Container = styled.div`
  height: 3rem;
  width: 8rem;
  background: #fbeae2;
  padding: 1rem;
  border: 1px solid #add8e6;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgb(1, 1, 32);
  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }

  span {
    font-weight: 500;
    font-size: 1rem;
  }
`;

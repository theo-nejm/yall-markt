import styled from 'styled-components';

export const Container = styled.div`
  height: 25rem;
  width: 20rem;
  background: #fbeae2;
  padding: 1.25rem;
  border: 1px solid #add8e6;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.0175);
  }

  h3 {
    font-size: 1.6rem;
    text-align: left;
    padding: 0 0 1rem;
    color: rgba(10, 10, 40);
  }
`;

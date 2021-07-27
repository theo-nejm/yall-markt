import styled from 'styled-components';

export const Container = styled.header`
  height: 4rem;
  width: 100vw;
  padding: 0 3rem;
  background: #fbeae2;
  border-bottom: 1px solid #add8e6;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.075);
  z-index: 999;

  h1 {
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    gap: 0.175rem;
    cursor: pointer;

    span {
      color: #24245b;
      font-weight: 500;
    }

    b {
      background: linear-gradient(270deg, #205bd0, #383868);
      padding: 0.25rem;
      color: #fbeae2;
      border-radius: 0.25rem;
      font-weight: 300;
    }
  }
`;

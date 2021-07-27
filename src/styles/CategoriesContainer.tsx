import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 4rem;
  padding: 6rem 2rem 0;

  .category-title {
    font-size: 1.75rem;
    color: #24245b;
    text-align: center;
    font-weight: 500;

    span {
      color: #fbeae2;
      padding: 0.5rem 1rem;
      background: #24245b;
      border-radius: 0.25rem;
      box-shadow: 0 0 10px rgba(36, 36, 91, 0.15);
      margin-left: 0.5rem;
      transition: 0.2s ease-in-out box-shadow;
      font-weight: 300;

      &:hover {
        box-shadow: 0 0 15px rgba(36, 36, 91, 0.35);
      }
    }
  }
`;

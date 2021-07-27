import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  header {
    height: 4rem;
    width: 100vw;
    padding: 0 3rem;
    background: #fbeae2;
    border-bottom: 1px solid #add8e6;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.75rem;
      display: flex;
      align-items: center;
      gap: 0.175rem;

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
  }

  main {
    display: flex;

    .left {
      width: 60vw;
      height: calc(100vh - 4rem);
      padding: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      h2 {
        color: #24245b;
        font-size: 1.75rem;
      }

      h3 {
        color: #010120;
        font-size: 1.25rem;
      }

      .category-items {
        margin-top: 2rem;
        margin-left: 1.5rem;
        width: 27.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }

    figure {
      width: 40vw;
      height: calc(100vh - 4rem);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 5rem;

      img {
        margin-top: -5rem;
      }

      figcaption {
        font-size: 1.25rem;
        font-weight: 500;
        color: #24245b;
        margin-top: -5rem;
      }
    }
  }
`;

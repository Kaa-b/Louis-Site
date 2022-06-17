import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: var(--gap);
`;

export const Content = styled.div`
  text-align: center;

  h1 {
    font: small-caps bold 30px/1 sans-serif;
    margin: 0 auto var(--gap) auto;
    text-align: center;
  }

  h4 {
    max-width: 250px;
    margin: 15px 20%;
    text-align: start;
    border: dashed var(--lightBleu);
    padding: 5px;
  }
`;

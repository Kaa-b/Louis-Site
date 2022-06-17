import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
 

  h1 {
    font: small-caps bold 30px/1 sans-serif;
    margin: 0 auto var(--gap) auto;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5rem;
`;

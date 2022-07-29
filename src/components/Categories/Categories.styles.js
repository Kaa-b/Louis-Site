import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5rem;

  @media screen and (min-width: 1330px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

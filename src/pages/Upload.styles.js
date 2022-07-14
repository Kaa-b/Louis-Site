import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  margin-left: Opx;

  @media screen and (min-width: 600px) {
    margin-left: var(--navbarLength);
  }
`;

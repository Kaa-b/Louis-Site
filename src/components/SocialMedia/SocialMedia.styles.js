import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  animation: animateThumb 0.5s;
  margin: 0 10px;

  :hover {
    opacity: 0.7;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


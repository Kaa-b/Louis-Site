import styled from "styled-components";

export const Wrapper = styled.div``;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
  max-width: 720px;
  max-height: 100%;
  transition: all 0.3s;
  border-radius: 10px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
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

export const Title = styled.div`
  font: small-caps bold 18px/1 sans-serif;
  padding: 10px 0;
  text-align: center;
`;

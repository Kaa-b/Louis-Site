import styled from "styled-components";

export const Wrapper = styled.div`
  background:url('https://cdn.paris.fr/paris/2021/06/10/huge-4f857e41cea758ad4274b67503a232a7.jpg') no-repeat center fixed;
  background-size: cover;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

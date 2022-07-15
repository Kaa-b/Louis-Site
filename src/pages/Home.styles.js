import styled from "styled-components";

export const Wrapper = styled.div`
  background:url('https://res.cloudinary.com/dfpnxd8gj/image/upload/v1657711816/ujeobfnsmnx4lietucwt.jpg') no-repeat center fixed;
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

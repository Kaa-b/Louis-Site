import styled from "styled-components";

export const Wrapper = styled.div`
  background:url('https://res.cloudinary.com/dfpnxd8gj/image/upload/v1657692099/gdbazrub8aonwg00hwtd.jpg') no-repeat center fixed;
  background-size: 120%;
  animation: animateMovieInfo 1s;
  background-position-x: -200px;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

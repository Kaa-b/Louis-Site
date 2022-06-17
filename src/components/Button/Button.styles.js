import styled from "styled-components";

export const Wrapper = styled.button`
  background-color:rgba(0,0,0,0);
  color: var(--white);
  border: 2px solid var(--lightGrey);
  display: block;
  width: 180px;
  height: 60px;
  font-size: var(--fontBig);
  margin: 20px auto;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 7px;

  :hover {
    background-color: rgba(238,240,242,0.1);
    border:none;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  /* border-right: 1px solid var(--medBleu);  */
  padding-top: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background: var(--lightBleu);
  display: grid;
  grid-template-rows: auto 6fr 1fr;
  row-gap: 1rem;
  color: white;
  font-size: var(--fontMed);
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fontMed);
  text-transform: capitalize;
  padding: 0.5rem 1.5rem;
  color: var(--white);
  transition: var(--transition);
  gap: 20px;

  :hover {
    background: var(--lighterBleu);
    color: var(--white);
  }
`;

import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-evenly;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: space-around;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: var(--fontMed);
  transition: var(--transition);

  :hover {
    background: var(--lighterBleu);
    color: var(--white);
  }

  @media screen and (min-width: 600px) {
    justify-content: flex-start;
    padding-left: 1rem;
  }
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fontMed);
  text-transform: capitalize;
  color: var(--white);
  padding: 5px 0;
  gap: 20px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
`;

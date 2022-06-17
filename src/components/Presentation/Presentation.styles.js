import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  margin: 0 var(--right-left-margin);
  text-align: center;
  line-height: 180%;
`;

export const Strings = styled.div`
  margin-bottom: var(--gap);
`;

export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const SocialMediaContent = styled.div`
  display: flex;
  background-color: var(--lightBleu);
  padding: 15px;
  border-radius: 50%;
`;

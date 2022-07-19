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
  border:2px solid #fff;
  -moz-box-shadow: 0px 6px 5px #ccc;
  -webkit-box-shadow: 0px 6px 5px #ccc;
  box-shadow: 0px 6px 5px #ccc;
  -moz-border-radius:190px;
  -webkit-border-radius:190px;
  border-radius:190px;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const SocialMediaContent = styled.div`
  display: flex;
`;

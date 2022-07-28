import React from "react";
import { paragraphe } from "../../data";
// Images
import profilePicture from "../../images/profile.jpeg";
// Component
import SocialMedia from "../SocialMedia";
import Text from "../Text";
//Style
import {
  Wrapper,
  Content,
  Strings,
  Pictures,
  Image,
  SocialMediaWrapper,
  SocialMediaContent,
} from "./Presentation.styles";

const { text, titre } = paragraphe[1];

const Presentation = () => {
  return (
    <Wrapper>
      <Content>
        <Strings>
          <Text  text={text} titre={titre} citation={[""]}/>
        </Strings>
        <Pictures>
          <Image
            src={profilePicture}
            alt="Louis' Profile picture"
          />
          <SocialMediaWrapper>
            <SocialMediaContent>
              <SocialMedia element="About"/>
            </SocialMediaContent>
          </SocialMediaWrapper>
        </Pictures>
      </Content>
    </Wrapper>
  );
};

// Text.propTypes = {
//   text: PropTypes.string,
// };

export default Presentation;

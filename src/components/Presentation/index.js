import React from "react";
import { paragraphe } from "../../data";
// import PropTypes from "prop-types";

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
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
            alt="Louis' Profile picture"
          />
          <SocialMediaWrapper>
            <SocialMediaContent>
              <SocialMedia color={"B"}/>
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

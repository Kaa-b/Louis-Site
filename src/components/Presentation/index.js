import React from "react";
import { paragraphe } from "../../data";
// import PropTypes from "prop-types";

// Component
import SocialMedia from "../SocialMedia";
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

const { text } = paragraphe[1];

const Presentation = () => {
  return (
    <Wrapper>
      <Content>
        <Strings>
          <h1>Présentation</h1>
          <div>
          {text.map((val, index) => {
            return <p key={index}>{val}</p>;
          })}
          </div>
        </Strings>
        <Pictures>
          <Image
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
            alt="Louis' Profile picture"
          />
          <SocialMediaWrapper>
            <SocialMediaContent>
              <SocialMedia />
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

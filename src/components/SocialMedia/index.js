import React from "react";
import PropTypes from "prop-types";
//Styles
import { Wrapper, Content } from "./SocialMedia.styles";
// Data
import { social } from "../../data";

const SocialMedia = ({ color }) => (
  <Wrapper>
    {social.map((socialIcon) => {
      const { id, iconW, iconB, url } = socialIcon;
      var icon = iconW;
      if (color === "B") {
        icon = iconB;
      }
      return (
        <a key={id} href={url}>
          <Content>{icon}</Content>
        </a>
      );
    })}
  </Wrapper>
);

SocialMedia.propTypes = {
  color: PropTypes.string,
};

SocialMedia.defaultProps = {
  color: "W",
};

export default SocialMedia;

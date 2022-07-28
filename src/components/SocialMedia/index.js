import React from "react";
import PropTypes from "prop-types";
//Styles
import { Wrapper, Content } from "./SocialMedia.styles";
// Data
import { social } from "../../data";

const SocialMedia = ({ element }) => (
  <Wrapper>
    {social.map((socialIcon) => {
      const { id, iconHome, iconSidebar, iconAbout, url } = socialIcon;
      var icon = iconHome;
      if (element === "Sidebar") {
        icon = iconSidebar;
      } else if (element === "About") {
        icon = iconAbout;
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
  element: PropTypes.string,
};

SocialMedia.defaultProps = {
  element: "Home",
};

export default SocialMedia;

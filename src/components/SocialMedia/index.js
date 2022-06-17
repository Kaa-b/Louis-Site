import React from "react";
// import PropTypes from "prop-types";
//Styles
import { Wrapper, Content } from "./SocialMedia.styles";
// Data
import { social } from "../../data";

const SocialMedia = (/*{direction}*/) => (
  <Wrapper /*style={`flex-direction: ${direction};`}*/>
    {social.map((socialIcon) => {
      const { id, icon, url } = socialIcon;
      return (
        <a key={id} href={url} >
          <Content>{icon}</Content>
        </a>
      );
    })}
  </Wrapper>
);

// SocialMedia.propTypes = {
//   direction: PropTypes.string,
// };

// SocialMedia.defaultProps = {
//   direction: "row",
// }

export default SocialMedia;

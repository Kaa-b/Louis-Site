import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Styles
import { Wrapper, Content } from "./SocialMedia.styles";
// Data
import { social } from "../../data";

const SocialMedia = (/*{direction}*/) => (
  <Wrapper /*style={`flex-direction: ${direction};`}*/>
    {social.map((socialIcon) => {
      const { id, url, icon } = socialIcon;
      return (
        <Link key={id} to={url}>
          <Content>{icon}</Content>
        </Link>
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

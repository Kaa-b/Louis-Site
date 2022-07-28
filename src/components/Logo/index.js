import React from "react";
import PropTypes from "prop-types";
// Styles
import { Image, Wrapper } from "./Logo.styles";
// Images
import LogoLouisBlue from "../../images/logo_large_bleu.png";
import LogoLouisWhite from "../../images/logo_large.png";

const Logo = ({ width, color }) => {
  var LogoLouis = LogoLouisBlue;
  if (color === "W") {
    LogoLouis = LogoLouisWhite;
  }
  return (
    <Wrapper>
      <Image src={LogoLouis} alt="Louis-logo" width={width} />
    </Wrapper>
  );
};

Logo.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
};

Logo.defaultProps = {
  color: "B",
};

export default Logo;

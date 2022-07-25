import React from "react";
import PropTypes from "prop-types";
// Styles
import { Image, Wrapper } from "./Logo.styles";
// Images
import LogoLouis from "../../images/logo_large.png";

const Logo = ({width}) => (
  <Wrapper>
    <Image src={LogoLouis} alt="Louis-logo" width={width}/>
  </Wrapper>
);

Logo.propTypes = {
  width: PropTypes.string,
};

export default Logo;

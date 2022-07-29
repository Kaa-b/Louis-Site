import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../context";
// Styles
import { Image, Wrapper } from "./Logo.styles";
// Images
import LogoLouisBlue from "../../images/logo_large_bleu.png";
import LogoLouisWhite from "../../images/logo_large.png";

const Logo = ({ width, color }) => {

  const { dimensions } = useGlobalContext();
  var LogoLouis = LogoLouisBlue;
  const [widthScreen, setWidthScreen] = useState(width)

  useEffect(() => {
    if (dimensions.width < 600) {
      setWidthScreen("200px");
    } else {
      setWidthScreen(width)
    }
  }, [dimensions, width]);

  if (color === "W") {
    LogoLouis = LogoLouisWhite;
  }

  return (
    <Wrapper>
      <Image src={LogoLouis} alt="Louis-logo" width={widthScreen} />
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

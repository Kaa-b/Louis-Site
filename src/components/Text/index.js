import React from "react";
import PropTypes from "prop-types";
//Component
import {Wrapper} from "./Text.styles"

const Text = ({text}) => {
    return (
      <Wrapper>
      {text}
      </Wrapper>
  );
};

Text.propTypes = {
  text: PropTypes.string,
};


export default Text;
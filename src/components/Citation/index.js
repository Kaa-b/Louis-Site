import React from "react";
import PropTypes from "prop-types";
//Component
import { Wrapper } from "./Citation.styles";

const Citation = ({ text}) => {
  return (
    <Wrapper>
      <div>
        {text.map((val, index) => {
          return <p key={index}>{val}</p>;
        })}
      </div>
    </Wrapper>
  );
};

Citation.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string),
};

export default Citation;

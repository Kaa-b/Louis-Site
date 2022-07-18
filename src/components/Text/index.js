import React from "react";
import PropTypes from "prop-types";
//Component
import { Wrapper } from "./Text.styles";

//Modifier texte pour itérer et faire des paragraphes si c'est un array

const Text = ({ text, titre }) => {
  return (
    <Wrapper>
      <h1>{titre}</h1>
      <div>
        {text.map((val, index) => {
          return <p key={index}>{val}</p>;
        })}
      </div>
    </Wrapper>
  );
};

Text.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string),
  titre: PropTypes.string,
};

export default Text;

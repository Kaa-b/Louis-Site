import React from "react";
import PropTypes from "prop-types";
//Styles
import { Image, Title, Wrapper } from "./Thumb.styles";
import { Link } from "react-router-dom";

const Thumb = ({ url, categorie, title, description, clickable }) => {
  if (clickable) {
    return (
      <Wrapper>
        <Title>{title}</Title>
        <Link to={`/${categorie}`}>
          <Image src={url} alt={description} />
        </Link>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Image src={url} alt={description} />
      </Wrapper>
    );
  }
};

Thumb.propTypes = {
  url: PropTypes.string,
  categorie: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Thumb;

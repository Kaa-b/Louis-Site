import React from "react";
import PropTypes from "prop-types";
//Styles
import { Image, Title, Wrapper } from "./Thumb.styles";
import { Link } from "react-router-dom";

const Thumb = ({ url, categorie, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Link to={`/${categorie}`}>
        <Image src={url} alt={categorie} />
      </Link>
    </Wrapper>
  );
};

Thumb.propTypes = {
  url: PropTypes.string,
  categorie: PropTypes.string,
  title: PropTypes.string,
};

export default Thumb;

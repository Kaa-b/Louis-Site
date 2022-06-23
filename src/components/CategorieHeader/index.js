import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content } from "./CategorieHeader.styles";
import { paragraphe } from "../../data";

const CategorieHeader = ({categorie}) => {

  //Recherche du bon text dans data > paragraphe
  let n = 0;
  while (n < paragraphe.length) {
    if (paragraphe[n].categorie === categorie) {
      break;
    }
    n++;
  }
  const parag = paragraphe[n];
  return (
    <Wrapper>
      <Content>
      <h1>{parag.description}</h1>
      <p>{parag.text}</p>
        <div>You are in the {categorie} page</div>
      </Content>
    </Wrapper>
  );
};

CategorieHeader.propTypes = {
    categorie: PropTypes.string,
  }

export default CategorieHeader;

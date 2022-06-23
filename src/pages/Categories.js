import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Content } from "./Categories.styles";
import { images } from "../data";
//Components
import Grid from "../components/Grid";
import Underline from "../components/Underline";
import Thumb from "../components/Thumb";
import Navbar from "../components/Navbar";
import CategorieHeader from "../components/CategorieHeader";

const Categories = () => {
  const { categories } = useParams();

  let liste = [];
  for (let i = 0; i < images.length; i++) {
    if (images[i].categorie.includes(`${categories}`)) {
      liste.push(images[i]);
    }
  }
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <CategorieHeader categorie={categories} />
        <Underline />
        <Grid header="Début grille">
          {liste.map((image) => {
            const { id, description, url, categorie } = image;

            return (
              <Thumb
                key={id}
                url={url}
                categorie={categorie}
                description={description}
                clickable={false}
              />
            );
          })}
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Categories;

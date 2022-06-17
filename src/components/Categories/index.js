import React from "react";
import { Wrapper, Content } from "./Categories.styles";
import { images } from "../../data";
//Components
import Grid from "../Grid";
import Thumb from "../Thumb";

const Categories = () => {
  return (
    <Wrapper>
      <Content>
        <Grid header={"Catégories"}>
          {images.map((image) => {
            const { id, url, categorie, title } = image;
            return <Thumb key={id} url={url} categorie={categorie} title={title} />;
          })}
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Categories;

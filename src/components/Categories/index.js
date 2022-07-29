import React from "react";
import { Wrapper, Content } from "./Categories.styles";
import { CategorieImages } from "../../data";
//Components
import Thumb from "../Thumb";

const Categories = () => {
  return (
    <Wrapper>
      <Content>
        {CategorieImages.map((image) => {
          const { id, url, categorie, title } = image;
          return (
            <Thumb
              key={id}
              url={url}
              categorie={categorie}
              title={title}
              description={categorie}
              clickable={true}
            />
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default Categories;

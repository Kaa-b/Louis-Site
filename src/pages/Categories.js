import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Content } from "./Categories.styles";
import { images } from "../data";
import Axios from "axios";
//Components
import Grid from "../components/Grid";
import Underline from "../components/Underline";
import Thumb from "../components/Thumb";
import Sidebar from "../components/Sidebar";
import CategorieHeader from "../components/CategorieHeader";
import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";
import { Image } from "cloudinary-react";

const Categories = () => {
  const { categories } = useParams();
  const { openSidebar } = useGlobalContext();
  const [picturesData, setPicturesData] = useState([]);

  //UseEffect to get pictures' url from mongoDB
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setPicturesData(response.data);
    });
  }, []);

  let liste = [];
  for (let i = 0; i < picturesData.length; i++) {
    if (picturesData[i].categorie.includes(`${categories}`)) {
      liste.push(picturesData[i]);
    }
  }
  return (
    <Wrapper>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <Sidebar />
      <Content>
        <CategorieHeader categorie={categories} />
        <Underline />
        <Grid header="Début grille">
          {liste.map((val) => {

            return (
              <Thumb
                key={val._id}
                url={val.url}
                categorie={val.categorie}
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

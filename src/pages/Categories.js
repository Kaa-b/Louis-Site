import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Content } from "./Categories.styles";
import Axios from "axios";
//Components
import Grid from "../components/Grid";
import Underline from "../components/Underline";
import Thumb from "../components/Thumb";
import Sidebar from "../components/Sidebar";
import CategorieHeader from "../components/CategorieHeader";
import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";

const Categories = () => {
  const { categories } = useParams();
  const { openSidebar } = useGlobalContext();
  const [picturesData, setPicturesData] = useState([]);

  //UseEffect to get pictures' url from mongoDB
  useEffect(() => {
    Axios.get("https://mscl-photography.herokuapp.com/read").then((response) => {
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
        <Grid header="">
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

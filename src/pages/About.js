import React from "react";
import { paragraphe } from "../data";
import { Link } from "react-router-dom";
// Components
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Underline from "../components/Underline";
import Youtube from "../components/Youtube";
import Presentation from "../components/Presentation";
import Infos from "../components/Infos";
import Citation from "../components/Citation";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
// Styles
import { Wrapper, Content } from "./About.styles";

const { text } = paragraphe[0];

const About = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <Sidebar />
      <Content>
        <Carousel />
        <Citation text={text} />
        <Underline />
        <Categories />
        <Underline />
        <Youtube />
        <Underline />
        <Presentation />
        <Underline />
        <Infos />
      </Content>
    </Wrapper>
  );
};

export default About;

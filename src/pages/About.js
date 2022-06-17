import React from "react";
import { paragraphe } from "../data";
// Components
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Text from "../components/Text";
import Categories from "../components/Categories";
import Underline from "../components/Underline";
import Youtube from "../components/Youtube";
import Presentation from "../components/Presentation";
import Infos from "../components/Infos";
// Styles
import { Wrapper, Content } from "./About.styles";

const {text} = paragraphe[0];

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <Carousel />
        <Text text={text}/>
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

import React from "react";
//Components
import Logo from "../Logo";
import Button from "../Button/index";
import SocialMedia from "../SocialMedia";
//Styles
import {
  Wrapper,
  Content,
  LogoWrapper,
  ButtonWrapper,
  SocialMediaWrapper,
} from "./CentralMenu.styles";
import { Link } from "react-router-dom";

const CentralMenu = () => (
  <Wrapper>
    <Content>
      <LogoWrapper>
        <Logo width="250px"/>
      </LogoWrapper>

      <ButtonWrapper>
        <Link to="/about/" style={{textDecoration:'none'}} >
          <Button text="ENTRER" /*callback={}*/ />
        </Link>
      </ButtonWrapper>

      <SocialMediaWrapper>
        <SocialMedia color={"W"}/>
      </SocialMediaWrapper>
    </Content>
  </Wrapper>
);

export default CentralMenu;


//Ajouter une option de couleur pour le logo et pour les réseaux sociaux à l'appel de ces components pour le menu principal
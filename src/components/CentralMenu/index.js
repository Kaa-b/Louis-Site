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
        <Logo width="180px"/>
      </LogoWrapper>

      <ButtonWrapper>
        <Link to="/about/" style={{textDecoration:'none'}} >
          <Button text="ENTRER" /*callback={}*/ />
        </Link>
      </ButtonWrapper>

      <SocialMediaWrapper>
        <SocialMedia />
      </SocialMediaWrapper>
    </Content>
  </Wrapper>
);

export default CentralMenu;

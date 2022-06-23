import React from "react";
import { Link } from "react-router-dom";
// Styles
import {
  Wrapper,
  Content,
  LinkWrapper,
} from "./Navbar.styles";
// Components
import Logo from "../Logo";
import SocialMedia from "../SocialMedia";
// Data
import { categories } from "../../data";

const Navbar = () => {
  return (
    <Wrapper >
      <Link to="/about" style={{ textDecoration: "none" }}>
       <Logo width="100px" />
      </Link>
      <Content>
        {categories.map((cat) => {
          const { id, url, text, icon } = cat;
          return (
            <Link key={id} to={url} style={{ textDecoration: "none" }}>
              <LinkWrapper>
                {icon}
                {text}
              </LinkWrapper>
            </Link>
          );
        })}
      </Content>
        <SocialMedia /*direction="row"*//>
    </Wrapper>
  );
};

export default Navbar;

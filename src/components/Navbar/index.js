import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
// Styles
import { Header, Content, LinkWrapper, SocialWrapper, LinkContent } from "./Navbar.styles";
// Components
import Logo from "../Logo";
import SocialMedia from "../SocialMedia";
// Data
import { categories } from "../../data";

const Navbar = () => {
  const { isSidebarOpen, closeSidebar, closeSidebarIfClicked, windowSize } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <Header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo width="100px" />
        </Link>
        <button className={`${(windowSize < 600) ? "close-btn show-close-btn" : "close-btn"}`}  onClick={closeSidebar}>
          <FaTimes />
        </button>
      </Header>
      <Content>
        {categories.map((cat) => {
          const { id, url, text, icon } = cat;
          return (
            <Link key={id} to={url} style={{ textDecoration: "none" }} onClick={closeSidebarIfClicked}>
              <LinkWrapper>
                <LinkContent>
                  {icon}
                  {text}
                </LinkContent>
              </LinkWrapper>
            </Link>
          );
        })}
      </Content>
      <SocialWrapper>
        <SocialMedia />
      </SocialWrapper>
    </aside>
  );
};

export default Navbar;

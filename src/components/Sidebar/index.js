import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
// Styles
import {
  Header,
  Content,
  LinkWrapper,
  SocialWrapper,
  LinkContent,
  LogoWrapper,
} from "./Sidebar.styles";
// Components
import Logo from "../Logo";
import SocialMedia from "../SocialMedia";
// Data
import { categories } from "../../data";

const Sidebar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    closeSidebarIfClicked,
    dimensions,
    openSidebar,
  } = useGlobalContext();

  useEffect(() => {
    if (dimensions.width > 600) {
      openSidebar();
    }
  }, [dimensions, openSidebar]);

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <Header>
        <Link to="/" style={{ textDecoration: "none" }} onClick={closeSidebarIfClicked}>
          <LogoWrapper>
            <Logo width="100px" />
          </LogoWrapper>
        </Link>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </Header>
      <Content>
        {categories.map((cat) => {
          const { id, url, text, icon } = cat;
          return (
            <Link
              key={id}
              to={url}
              style={{ textDecoration: "none" }}
              onClick={closeSidebarIfClicked}
            >
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

export default Sidebar;

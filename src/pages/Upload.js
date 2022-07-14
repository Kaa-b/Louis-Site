import React from "react";
// Components
import Sidebar from "../components/Sidebar";
import UploadImg from "../components/UploadImg";
// Styles
import { Wrapper, Content } from "./Upload.styles";
import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";


const Upload = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <Sidebar />
      <Content>
        <UploadImg/>
      </Content>
    </Wrapper>
  );
};

export default Upload;

import React, { useState } from "react";
// Components
import Sidebar from "../components/Sidebar";
import UploadImg from "../components/UploadImg";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Alert } from "react-bootstrap";
// Styles
import { Wrapper, Content } from "./Upload.styles";
import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";

const Upload = () => {
  const [error, setError] = useState("");
  const { openSidebar, currentUser, logout } = useGlobalContext();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/about");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Wrapper>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <Sidebar />
      <Content>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
        <UploadImg />
      </Content>
    </Wrapper>
  );
};

export default Upload;

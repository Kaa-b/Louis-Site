import React, { Fragment } from "react";
import { useGlobalContext } from "./context";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Upload from "./pages/Upload";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
// Styles
import { GlobalStyle } from "./GlobalStyle";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import "./styles.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categories" element={<Categories />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/about/" element={<About />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/signup/" element={<Signup />} />
      <Route path="/forgot-password/" element={<ForgotPassword />} />
      <Route path="/upload/" element={<PrivateRoute />}>
        <Route path="/upload/" element={<Upload />} />
      </Route>
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;

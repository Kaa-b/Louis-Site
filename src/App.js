import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
// Styles
import { GlobalStyle } from "./GlobalStyle";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import "./styles.css";
// Data
// import { social } from "./data";
// const { url, redirect } = social;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categories" element={<Categories />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/about/" element={<About />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;

import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Upload from "./pages/Upload";
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
      <Route path="/upload/" element={<Upload />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;

import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // Sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeSidebarIfClicked = () => {
    if (dimensions.width < 600) {
      setIsSidebarOpen(false);
    }
  };

  //Resizing

  //Timer to not resize at every pixel but every 500ms instead
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }


  //Handle the re-render
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    },500);

    window.addEventListener("resize", debouncedHandleResize);

    //Cleaning the event listener
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  },);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        closeSidebarIfClicked,
        dimensions,
        debounce,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.object,
};

//custom hook, si on veut pas avoir à utiliser useContext dans les autres
// ATTENTION il faut toujours commencer par "useMachinChose" sinon React va pas etre content
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

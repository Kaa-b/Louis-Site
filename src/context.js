import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowSize] = useState(window.innerWidth);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeSidebarIfClicked = () => {
    if (windowSize < 600) {
      setIsSidebarOpen(false);
    }
  };

  useEffect (() => {
    if (windowSize > 600) {
        setIsSidebarOpen(true);
      }
  },[windowSize])
  

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        windowSize,
        openSidebar,
        closeSidebar,
        closeSidebarIfClicked,
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

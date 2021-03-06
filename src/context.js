import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { auth } from "./firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  //Authentification
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Sidebar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

  //Resizing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);

    //Cleaning the event listener
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  //Authentification ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        closeSidebarIfClicked,
        dimensions,
        debounce,
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.object,
};

//custom hook, si on veut pas avoir ?? utiliser useContext dans les autres
// ATTENTION il faut toujours commencer par "useMachinChose" sinon React va pas etre content
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

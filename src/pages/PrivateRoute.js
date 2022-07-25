import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const PrivateRoute = () => {
  const { currentUser } = useGlobalContext();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

// export default function PrivateRoute({ element: Component, ...rest }) {
// const { currentUser } = useGlobalContext()

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? <Component {...props} /> : <Navigate to="/login" />
//       }}
//     ></Route>
//   )

// }

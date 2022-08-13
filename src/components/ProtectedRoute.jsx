import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ loggedIn, children, ...props }) {
  if (loggedIn === null) {
    return null;
  }

  return (
    <Route {...props}>{loggedIn ? children : <Redirect to="/signin" />}</Route>
  );
}

export default ProtectedRoute;

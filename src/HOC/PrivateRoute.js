import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { getAuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ ...rest }) => {
  const navigate = useNavigate();

  const isAuthenticated = getAuthContext();

  useEffect(() => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Route {...rest} />
    </>
  );
};

export default PrivateRoute;

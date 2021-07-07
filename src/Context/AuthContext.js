/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext, useEffect } from "react";
import { useLocalStorage } from "react-use";

const GetAuthContext = React.createContext();
const SetAuthContext = React.createContext();

export function getAuthContext() {
  return useContext(GetAuthContext);
}

export function setAuthContext() {
  return useContext(SetAuthContext);
}

const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useLocalStorage("email");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(email);
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsAuthenticated(true);
      console.log("true");
    } else {
      setIsAuthenticated(false);
      console.log("false");
    }
  }, [email]);

  useEffect(() => {
    setIsLoaded(true);
  }, [isAuthenticated]);

  return (
    <GetAuthContext.Provider value={isAuthenticated}>
      <SetAuthContext.Provider value={setEmail}>
        {isLoaded && children}
      </SetAuthContext.Provider>
    </GetAuthContext.Provider>
  );
};

export default AuthContext;

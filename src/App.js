import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";

import PrivateRoute from "./HOC/PrivateRoute";

import Home from "./views/Home";
import Add from "./views/AddRecipe";
import View from "./views/ViewAll";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <PrivateRoute exact path="/view-all" element={<View />} />
          <PrivateRoute exact path="/add-new-recipe" element={<Add />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

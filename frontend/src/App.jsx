import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/client/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}></Route>
      </Routes>
    </div>
  );
};

export default App;

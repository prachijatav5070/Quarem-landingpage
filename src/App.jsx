import React from "react";
import NavbarPage from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SavenPage from "./SavenPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarPage />
                <FirstPage />
                <SavenPage />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

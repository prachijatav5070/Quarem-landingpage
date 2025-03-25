import React from "react";
import NavbarPage from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SavenPage from "./SavenPage";
import EightPage from "./EightPage";
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
                <EightPage/>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

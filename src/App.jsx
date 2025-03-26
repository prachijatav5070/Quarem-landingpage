import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import LandingPage from "./LandingPage";
import NavbarSection from "./Navbar";
import FirstSection from "./FirstSection";
import SavenSection from "./SavenSection";
import EightSection from "./EightSection";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarSection />
                <FirstSection />
                <LandingPage />
                <SavenSection />
                <EightSection />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

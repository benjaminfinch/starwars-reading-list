import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Single } from "./views/single";
import { SinglePlanet } from "./views/single-planet";
import { SingleVehicle } from "./views/single-vehicle";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/planet_details/:theid" element={<SinglePlanet />} />
            <Route path="/vehicle_details/:theid" element={<SingleVehicle />} />
            <Route path="*" element={<h1>Ops...Page not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Data } from "./Data";

function NavRoutes() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
   
        <Route path="/about/name/:data" element={<Data />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

  );
}

export { NavRoutes };

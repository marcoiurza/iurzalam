import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Logistics from "./pages/Logistics";
import Products from "./pages/Products";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

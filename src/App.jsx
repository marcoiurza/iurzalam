import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Logistics from "./pages/Logistics";
import LaunchPage from "./pages/LaunchPage";
import Products from "./pages/Products";

// The complete site remains available by building with VITE_SITE_MODE=full.
const launchMode = import.meta.env.VITE_SITE_MODE !== "full";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  if (launchMode) {
    return <LaunchPage />;
  }

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

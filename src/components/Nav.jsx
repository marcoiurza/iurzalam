import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { navLinks } from "../data/siteContent";
import BrandLogo from "./BrandLogo";
import { CloseIcon, MenuIcon } from "./Icons";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-nav__inner">
          <Link className="site-nav__brand" to="/">
            <BrandLogo compact />
          </Link>

          <nav className="site-nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-nav__actions">
            <Link className="btn-primary btn-primary--small" to="/contact">
              Contact us
            </Link>
            <button
              className="site-nav__toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : ""}
      >
        <div className="mobile-nav__header">
          <Link className="mobile-nav__brand" to="/">
            <BrandLogo compact />
          </Link>
          <button
            className="mobile-nav__close"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="mobile-nav__menu" aria-label="Mobile">
          {navLinks.filter((link) => link.to !== "/contact").map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `mobile-nav__link${isActive ? " is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="btn-primary mobile-nav__cta" to="/contact">
            Start a conversation
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;

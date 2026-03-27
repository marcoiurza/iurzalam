import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { navLinks } from "../data/siteContent";
import { CloseIcon, MenuIcon } from "./Icons";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-nav__inner">
          <Link className="site-nav__brand" to="/">
            IurzaLam
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
              Get in touch
            </Link>
            <button
              className="site-nav__toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav__header">
          <Link className="mobile-nav__brand" to="/">
            IurzaLam
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
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="mobile-nav__link">
              {link.label}
            </NavLink>
          ))}
          <Link className="btn-primary mobile-nav__cta" to="/contact">
            Get in touch
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;

import { Link } from "react-router-dom";

import BrandLogo from "./BrandLogo";
import { footerCerts, siteMeta } from "../data/siteContent";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__upper">
        <div className="site-footer__brand-col">
          <Link className="site-footer__brand" to="/">
            <BrandLogo />
          </Link>
          <p className="site-footer__tagline">
            Independent European HPL and compact laminate distribution, built since 1968.
          </p>
          <div className="site-footer__certs">
            {footerCerts.map((item) => (
              <span key={item} className="site-footer__cert-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="site-footer__heading">Products</p>
          <div className="site-footer__links">
            <Link to="/products">Vertex HPL Standard</Link>
            <Link to="/products">Vertex HPL Premium</Link>
            <Link to="/products">Vertex Compact</Link>
            <Link to="/products">View the full range</Link>
          </div>
        </div>

        <div>
          <p className="site-footer__heading">Company</p>
          <div className="site-footer__links">
            <Link to="/about">About</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/logistics">Logistics</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="site-footer__heading">Contact</p>
          <div className="site-footer__contact">
            <p>{siteMeta.email}</p>
            <p>{siteMeta.office}</p>
            <p>{siteMeta.logisticsHub}</p>
            <p>{siteMeta.responseTime}</p>
          </div>
        </div>
      </div>

      <div className="site-footer__lower">
        <p>&copy; 2026 {siteMeta.legalName}. All rights reserved.</p>
        <p>{siteMeta.office} - Distribution through Italy for Europe and selected global markets.</p>
      </div>
    </footer>
  );
}

export default Footer;

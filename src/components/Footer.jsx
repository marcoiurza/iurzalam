import { Link } from "react-router-dom";

import { footerCerts } from "../data/siteContent";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__upper">
        <div className="site-footer__brand-col">
          <Link className="site-footer__brand" to="/">
            IurzaLam
          </Link>
          <p className="site-footer__tagline">
            Global HPL &amp; Compact Laminate Distribution. Est. 1968.
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
            <Link to="/products">HPL Standard</Link>
            <Link to="/products">HPL Premium</Link>
            <Link to="/products">Compact Laminate</Link>
            <Link to="/products">View all products</Link>
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
            <p>info@iurzalam.com</p>
            <p>London, United Kingdom</p>
            <p>Italy Warehouse &amp; Logistics Hub</p>
            <p>Global supply, any quantity</p>
          </div>
        </div>
      </div>

      <div className="site-footer__lower">
        <p>&copy; 2025 Iurza Decorative Surfaces Ltd. Registered in England &amp; Wales No. 16980223.</p>
        <p>71-75 Shelton Street &middot; London WC2H 9JQ</p>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { ContainerIcon, WarehouseIcon } from "../components/Icons";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const warehouseList = [
  "Any quantity from single pallet",
  "Consolidated and mixed-product orders",
  "Flexible call-off arrangements",
  "Italy-based - optimised for European delivery"
];

const containerList = [
  "Full 20ft or 40ft container",
  "Direct to your port of choice",
  "Complete shipping documentation",
  "Available worldwide"
];

const coverageItems = [
  ["\uD83C\uDDEC\uD83C\uDDE7", "United Kingdom", "Active"],
  ["\uD83C\uDDF3\uD83C\uDDF1", "Netherlands", "Active"],
  ["\uD83C\uDDE7\uD83C\uDDEA", "Belgium", "Active"],
  ["\uD83C\uDDF5\uD83C\uDDF1", "Poland", "Active"],
  ["\uD83C\uDDE9\uD83C\uDDEA", "Germany", "Active"],
  ["\uD83C\uDDE8\uD83C\uDDED", "Switzerland", "Active"],
  ["\uD83C\uDDEE\uD83C\uDDF9", "Italy", "Warehouse & logistics hub"],
  ["\uD83C\uDF0D", "Rest of World", "Full container direct"]
];

function Logistics() {
  const modelRef = useReveal();
  const coverageRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <PageTitle title="Logistics - IurzaLam" />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.WAREHOUSE})` }}>
          <div className="page-hero__overlay page-hero__overlay--dark" />
          <div className="page-hero__content page-hero__content--bottom">
            <p className="page-hero__breadcrumb">Home / Logistics</p>
            <h1>Any quantity. Anywhere.</h1>
            <p>
              Our Italy-based warehouse and direct container options mean we can supply any buyer at any scale.
            </p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={modelRef} className="reveal">
            <p className="section-label">HOW WE SUPPLY</p>
            <h2 className="section-title">Two supply models. One relationship.</h2>
            <div className="supply-models">
              <article className="supply-card supply-card--light">
                <div className="supply-card__icon">
                  <WarehouseIcon />
                </div>
                <h3>Warehouse Stock</h3>
                <p>
                  Products held in our Italian warehouse and available at any quantity - from a single pallet
                  upwards. Ideal for distributors and fabricators who need regular, flexible supply without the
                  commitment of a full container. Shorter lead times, consolidated orders, flexible call-off.
                </p>
                <ul className="detail-list">
                  {warehouseList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="supply-card supply-card--dark">
                <div className="supply-card__icon">
                  <ContainerIcon />
                </div>
                <h3>Full Container Direct</h3>
                <p>
                  Full container shipments direct to port for high-volume buyers who want maximum cost efficiency.
                  Ideal for distributors placing large seasonal orders or fabricators with consistent high-volume
                  demand. We manage the documentation, logistics, and certification paperwork end to end.
                </p>
                <ul className="detail-list detail-list--light">
                  {containerList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--stone">
          <div ref={coverageRef} className="reveal">
            <p className="section-label">COVERAGE</p>
            <h2 className="section-title">Europe is home. Everywhere else is reachable.</h2>
            <p className="section-copy coverage-copy">
              Our Italian warehouse is positioned at the centre of European logistics networks - within reach of
              every major market. For buyers outside Europe, full container direct shipment is available to any port
              worldwide.
            </p>
            <div className="coverage-grid">
              {coverageItems.map(([flag, country, status]) => (
                <div key={country} className="coverage-card">
                  <span className="coverage-card__flag">{flag}</span>
                  <div>
                    <strong>{country}</strong>
                    <p>{status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--forest">
          <div ref={ctaRef} className="docs-cta reveal">
            <div>
              <h2>Discuss your supply requirements.</h2>
            </div>
            <div className="docs-cta__action">
              <Link className="btn-primary" to="/contact">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Logistics;

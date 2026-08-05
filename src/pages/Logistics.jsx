import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { ContainerIcon, WarehouseIcon } from "../components/Icons";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const warehouseList = [
  "Any quantity from single pallet",
  "Consolidated and mixed-product orders",
  "Flexible call-off arrangements",
  "Italy-based and tuned for European delivery"
];

const containerList = [
  "Full 20ft or 40ft container",
  "Direct to your port of choice",
  "Commercial and shipping documentation managed",
  "Suitable for selected global markets"
];

const coverageItems = [
  ["GB", "United Kingdom", "Stock-supported"],
  ["NL", "Netherlands", "Active distribution market"],
  ["BE", "Belgium", "Project supply"],
  ["PL", "Poland", "Growth market"],
  ["DE", "Germany", "Specification-led sales"],
  ["CH", "Switzerland", "Commercial alignment"],
  ["IT", "Italy", "Warehouse and logistics platform"],
  ["INTL", "Selected export markets", "Full container direct"]
];

function Logistics() {
  const modelRef = useReveal();
  const coverageRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <PageTitle
        title="Logistics"
        description="Vertex Laminati supplies through an Italy-based warehouse programme and direct-container logistics for larger European and export accounts."
        path="/logistics"
      />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.WAREHOUSE})` }}>
          <div className="page-hero__overlay page-hero__overlay--dark" />
          <div className="page-hero__content page-hero__content--bottom">
            <p className="page-hero__breadcrumb">Home / Logistics</p>
            <h1>Tailored supply. Reliable delivery.</h1>
            <p>
              Our Italy-based warehouse model and direct-container options let Vertex serve both repeat buyers and
              larger seasonal programmes.
            </p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={modelRef} className="reveal">
            <p className="section-label">HOW WE SUPPLY</p>
            <h2 className="section-title">Two supply models. One commercial relationship.</h2>
            <div className="supply-models">
              <article className="supply-card supply-card--light">
                <div className="supply-card__icon">
                  <WarehouseIcon />
                </div>
                <h3>Warehouse Stock Programme</h3>
                <p>
                  Product held in Italy and available in flexible commercial quantities. Ideal for distributors,
                  fabricators, and project-led buyers who need replenishment speed, mixed orders, or lower initial
                  commitment.
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
                  For higher-volume accounts, direct containers improve landed cost and widen range flexibility. We
                  coordinate the commercial paperwork, shipping structure, and documentation package end to end.
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
            <h2 className="section-title">Built around Europe’s buying rhythm.</h2>
            <p className="section-copy coverage-copy">
              The Vertex model starts with Europe, where lead times, replenishment reliability, and specification
              confidence matter most. Export markets are supported when volumes and routing justify direct shipment.
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
              <p>We can help scope the right model for replenishment stock, project supply, or direct shipment.</p>
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

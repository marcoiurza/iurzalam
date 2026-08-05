import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { ContainerIcon, WarehouseIcon } from "../components/Icons";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const warehouseList = [
  "Flexible quantities and mixed pallets",
  "Full-truck and repeat replenishment programmes",
  "Transparent lead times and coordinated call-offs",
  "Registered branch in Turate, near the Milan motorway network"
];

const containerList = [
  "Full 20ft or 40ft container",
  "Produced to order and shipped factory-to-door",
  "Tailored design, size, and finish selections",
  "Commercial and shipping documentation coordinated"
];

const coverageItems = [
  ["CH", "Switzerland", "Headquarters and commercial management"],
  ["IT", "Italy", "Registered branch, stock, and logistics"],
  ["GB", "United Kingdom", "European market coverage"],
  ["NL", "Netherlands", "European market coverage"],
  ["BE", "Belgium", "European market coverage"],
  ["PL", "Poland", "European market coverage"],
  ["DE", "Germany", "European market coverage"],
  ["15+", "European markets", "Pan-European delivery"]
];

function Logistics() {
  const modelRef = useReveal();
  const coverageRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <PageTitle
        title="Logistics"
        description="Vertex Laminati combines Swiss commercial management with a registered logistics branch in Turate near Milan, supporting mixed pallets, full trucks, and direct containers across Europe."
        path="/logistics"
      />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.WAREHOUSE})` }}>
          <div className="page-hero__overlay page-hero__overlay--dark" />
          <div className="page-hero__content page-hero__content--bottom">
            <p className="page-hero__breadcrumb">Home / Logistics</p>
            <h1>Tailored supply. Reliable delivery.</h1>
            <p>
              Swiss commercial management and a logistics hub in Turate near Milan support flexible European stock,
              project supply, and direct-container programmes.
            </p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={modelRef} className="reveal">
            <p className="section-label">HOW WE SUPPLY</p>
            <h2 className="section-title">Two supply models. One accountable relationship.</h2>
            <div className="supply-models">
              <article className="supply-card supply-card--light">
                <div className="supply-card__icon">
                  <WarehouseIcon />
                </div>
                <h3>Warehouse Stock Programme</h3>
                <p>
                  Documented stock is managed through the registered Italian branch at Via C. B. Cavour 129/A, 22078
                  Turate (CO). The location supports distributors, fabricators, and project buyers needing mixed
                  orders, repeat call-offs, and faster European dispatch.
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
                  Full containers are produced to order and shipped from the manufacturing partner to the customer.
                  The model provides wider control over design, size, finish, programming, and landed economics for
                  volume partners.
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
            <h2 className="section-title">Built around Europe&apos;s buying rhythm.</h2>
            <p className="section-copy coverage-copy">
              The Vertex model supports more than 15 European markets through mixed pallets, full trucks, and direct
              containers, with transparent lead times and senior guidance on every programme.
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

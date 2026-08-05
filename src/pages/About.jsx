import PageTitle from "../components/PageTitle";
import { images, siteMeta } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const timeline = [
  ["1953", "The first generation begins working in decorative laminates, establishing the product and market knowledge carried forward by Vertex."],
  ["April 2026", "Vertex Laminati SA is incorporated in Switzerland and entered in the Ticino Commercial Register."],
  ["June 2026", "The Italian branch is established in Turate, creating a registered logistics base near Milan for European distribution."],
  ["Today", "Swiss commercial management and an Italian logistics platform support distributors, fabricators, and industrial converters across more than 15 European markets."]
];

const businessCards = [
  {
    title: "Swiss Reliability",
    body: "Commercial management, contracts, quality administration, and senior guidance are coordinated from the registered headquarters in Coldrerio, Ticino."
  },
  {
    title: "European Distribution",
    body: "The Turate branch near Milan supports flexible stock, mixed pallets, full trucks, rapid dispatch, and direct-container programmes."
  },
  {
    title: "Manufacturing Depth",
    body: "A long-term relationship with Stylam Industries connects Vertex to a broad, certified manufacturing portfolio serving more than 80 export countries."
  }
];

const teamCards = [
  {
    title: "General Management",
    body: "Senior commercial direction from Switzerland, linking market strategy, supplier relationships, quality administration, and customer decision-making."
  },
  {
    title: "Operations & Logistics",
    body: "A cross-border team covering warehouse supervision, logistics and distribution, sales administration, facilities, samples, and office coordination."
  },
  {
    title: "Finance & Sales",
    body: "Swiss finance support and regional commercial roles provide direct guidance, responsive quotations, and structured account development."
  }
];

const companyInfo = [
  ["Legal entity", siteMeta.legalName],
  ["Legal form", siteMeta.legalForm],
  ["Swiss UID", siteMeta.uid],
  ["Registered", siteMeta.registeredSince],
  ["Registered office", siteMeta.address],
  ["Share capital", "CHF 500,000 - fully paid"],
  ["Italian branch", siteMeta.logisticsHub],
  ["Italian identifiers", `VAT ${siteMeta.italianVat} - REA ${siteMeta.italianRea}`]
];

const operatingCards = [
  ["CH", "Swiss headquarters", "Management & administration"],
  ["IT", "Turate logistics hub", "Stock & distribution"],
  ["EU", "Pan-European delivery", "Pallets, trucks & containers"],
  ["15+", "European markets", "Distributor & fabricator focus"]
];

function About() {
  const narrativeRef = useReveal();
  const businessRef = useReveal();
  const rootsRef = useReveal();

  return (
    <>
      <PageTitle
        title="About"
        description="Vertex Laminati SA is a Swiss distributor of decorative and compact laminates, built on four generations of industry experience since 1953 and supported by a logistics hub near Milan."
        path="/about"
      />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.HERITAGE})` }}>
          <div className="page-hero__overlay page-hero__overlay--angled" />
          <div className="page-hero__content page-hero__content--mid">
            <p className="section-label section-label--light">WHO WE ARE</p>
            <h1>
              Four generations <em>in decorative laminates.</em>
            </h1>
          </div>
        </section>

        <section className="section section--white">
          <div ref={narrativeRef} className="heritage-grid reveal">
            <div className="timeline">
              {timeline.map(([year, text]) => (
                <div key={year} className="timeline__item">
                  <span className="timeline__year">{year}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <aside className="pull-quote-card">
              <span className="pull-quote-card__mark">&ldquo;</span>
              <blockquote>
                More than seventy years of product knowledge, market relationships, and one simple promise: we do
                not let our partners down.
              </blockquote>
            </aside>
          </div>
        </section>

        <section className="section section--stone">
          <div ref={businessRef} className="reveal">
            <p className="section-label">THE VERTEX MODEL</p>
            <h2 className="section-title">European quality. Better economics. One committed partner.</h2>
            <div className="business-grid">
              {businessCards.map((card) => (
                <article key={card.title} className="business-card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--charcoal">
          <div ref={rootsRef} className="european-roots reveal">
            <div>
              <h2>Senior-led across Switzerland and Italy.</h2>
              <p>
                The organisation spans management, operations, warehouse and logistics, samples and facilities,
                finance, sales administration, and regional commercial development. Publicly, Vertex presents the
                team by function so customers know how the business supports them without exposing internal HR data.
              </p>
            </div>
            <div className="dark-country-grid">
              {operatingCards.map(([flag, country, status]) => (
                <div key={country} className="dark-country-card">
                  <strong>
                    {flag} {country}
                  </strong>
                  <span>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div>
            <p className="section-label">ORGANISATION</p>
            <h2 className="section-title">Direct, functional, accountable.</h2>
            <div className="credential-grid">
              {teamCards.map((card) => (
                <article key={card.title} className="credential-card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--stone">
          <div>
            <p className="section-label">OFFICIAL COMPANY PROFILE</p>
            <h2 className="section-title">Vertex Laminati SA</h2>
            <p className="section-copy">
              The registered corporate purpose covers the import, export, trade, and processing of timber, panels,
              semi-finished goods, decorative surfaces, and related materials for furniture, interiors, and building.
            </p>
            <div className="company-grid">
              {companyInfo.map(([label, value]) => (
                <div key={label} className="company-grid__item">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;

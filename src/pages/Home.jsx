import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { CheckIcon, HeritageIcon, WarehouseIcon } from "../components/Icons";
import { certificationItems, europeanCards, homeApplications, images, reachMarkets } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const valueCards = [
  {
    number: "01",
    title: "Certification-Led Range",
    body: "Vertex Laminati products are positioned around the approvals Europe actually asks for: ETA, FSC, PEFC, Greenguard Gold, and CATAS. Documentation is ready for specification teams, procurement desks, and compliance reviews.",
    icon: <CheckIcon />,
    link: "/certifications"
  },
  {
    number: "02",
    title: "Italy-Based, Flexible Quantities",
    body: "Our warehouse programme supports mixed pallets, recurring replenishment, and direct containers for higher-volume accounts. One commercial relationship, whether you buy trial quantities or full seasonal stock.",
    icon: <WarehouseIcon />,
    link: "/logistics"
  },
  {
    number: "03",
    title: "Built Since 1968",
    body: "Our founding team brings more than 55 years of experience in European laminate distribution, built since 1968 across demanding distributor and fabricator markets.",
    icon: <HeritageIcon />,
    link: "/about"
  }
];

const logisticsFacts = [
  ["Any quantity", "From single-pallet call-offs to full-container programmes"],
  ["Italy warehouse", "Structured for fast European replenishment"],
  ["Commercial flexibility", "Mixed orders, rolling supply, and project scheduling"],
  ["Broader reach", "Selected global markets served through direct shipment"]
];

const productCards = [
  {
    image: images.KITCHEN_1,
    alt: "Kitchen interior featuring Vertex HPL Standard decorative laminate surfaces",
    number: "01",
    title: "Vertex HPL Standard",
    body: "General-purpose decorative laminate for cabinetry, joinery, retail fit-out, and interior wall systems.",
    pills: ["Matt", "Gloss", "Soft Touch", "Textured", "Wood Decor", "Solid Colour"]
  },
  {
    image: images.COMMERCIAL_2,
    alt: "Commercial interior counter finished in Vertex HPL Premium decorative surface",
    number: "02",
    title: "Vertex HPL Premium",
    body: "Acrylic-faced specification surface for projects that need a more seamless, higher-performance finish.",
    pills: ["Matt", "Gloss", "Anti-fingerprint", "Marble", "Stone", "Solid Colour"]
  },
  {
    image: images.WASHROOM_1,
    alt: "Compact laminate used for washroom cubicles in commercial settings",
    number: "03",
    title: "Vertex Compact",
    body: "Self-supporting compact laminate for washrooms, lockers, cladding, and other moisture-critical applications.",
    pills: ["Interior Grade", "Exterior Grade", "Anti-bacterial", "Marine", "Cladding"]
  }
];

function Home() {
  const applicationsRef = useReveal();
  const valueRef = useReveal();
  const logisticsRef = useReveal();
  const reachRef = useReveal();
  const quoteRef = useReveal();
  const productRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <PageTitle
        title="European HPL & Compact Laminate Distribution"
        description="Vertex Laminati supplies specification-grade HPL and compact laminate surfaces across Europe, backed by Italy-based logistics and certification-ready documentation."
        path="/"
      />

      <main>
        <section className="hero hero--home" style={{ backgroundImage: `url(${images.HERO_MAIN})` }}>
          <div className="hero__overlay hero__overlay--home" />
          <div className="hero__content hero__content--home">
            <p className="hero-eyebrow">VERTEX LAMINATI · BUILT SINCE 1968</p>
            <h1 className="hero-h1">
              Specification-grade laminates for <em>European distribution.</em>
            </h1>
            <p className="hero-sub">
              Vertex Laminati supplies a proprietary HPL and compact laminate range backed by ETA, FSC, PEFC,
              Greenguard Gold, and CATAS credentials, stocked through Italy and delivered across Europe.
            </p>
            <div className="hero-ctas">
              <Link className="btn-primary" to="/contact">
                Request a Quote
              </Link>
              <Link className="btn-ghost" to="/products">
                Explore the Range
              </Link>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <span className="scroll-indicator__line" />
          </div>
        </section>

        <section className="cert-strip">
          <div className="cert-strip__label">Certification suite</div>
          {certificationItems.map((item) => (
            <Link key={item.abbr} className="cert-strip__item" to="/certifications">
              <span className="cert-strip__name">{item.abbr}</span>
              <span className="cert-strip__desc">{item.desc}</span>
            </Link>
          ))}
        </section>

        <section className="section section--stone">
          <div ref={applicationsRef} className="reveal">
            <div className="section-header section-header--split">
              <div>
                <p className="section-label">APPLICATIONS</p>
                <h2 className="section-title">Surfaces built for real project use</h2>
              </div>
              <Link className="btn-text" to="/products">
                View all products
              </Link>
            </div>

            <div className="applications-grid">
              {homeApplications.map((item, index) => (
                <figure key={item.title} className={`application-card app-img-${index + 1}`}>
                  <div className="application-card__image-wrap">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="application-card__overlay" />
                  <figcaption className="application-card__caption">
                    <span className="app-tag">{item.title}</span>
                    {item.desc ? <span className="app-desc">{item.desc}</span> : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div ref={valueRef} className="reveal">
            <div className="section-header section-header--centered">
              <p className="section-label">WHY VERTEX</p>
              <h2 className="section-title">Independent market positioning, built for long-term supply.</h2>
              <p className="section-subtitle">
                Vertex Laminati is positioned as an independent European HPL distributor with deep industry heritage,
                proprietary public-facing branding, and the logistics discipline required by serious B2B buyers.
              </p>
            </div>

            <div className="value-grid">
              {valueCards.map((card) => (
                <article key={card.number} className="value-card">
                  <span className="value-card__number">{card.number}</span>
                  <div className="icon-box">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <Link className="btn-text" to={card.link}>
                    Explore
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={logisticsRef} className="logistics-feature reveal">
          <div className="logistics-feature__image" style={{ backgroundImage: `url(${images.WAREHOUSE})` }}>
            <div className="logistics-feature__image-overlay" />
            <div className="logistics-feature__copy">
              <p className="section-label section-label--light">LOGISTICS</p>
              <h2>Italy warehouse. Europe-first supply.</h2>
              <p>
                Our logistics model is structured around European replenishment: shorter lead times, flexible order
                sizes, and direct container options for larger accounts that want margin-efficient scale.
              </p>
            </div>
          </div>
          <div className="logistics-feature__facts">
            {logisticsFacts.map(([title, text]) => (
              <div key={title} className="logistics-feature__fact">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--stone">
          <div ref={reachRef} className="reach-grid reveal">
            <div className="reach-grid__content">
              <p className="section-label">MARKET COVERAGE</p>
              <h2 className="section-title">Europe first. Export-ready when needed.</h2>
              <p className="section-copy">
                Vertex Laminati is built around Europe’s distributor and fabricator markets, with active commercial
                focus across the UK, Benelux, DACH, Poland, and Switzerland. Selected global accounts are supported
                through direct shipment structures where the economics make sense.
              </p>

              <div className="market-list">
                {reachMarkets.map((market) => (
                  <div key={market.country} className="market-list__row">
                    <span className="market-list__name">
                      {market.flag} {market.country}
                    </span>
                    <span className="market-list__status">{market.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="country-visual-grid">
              {europeanCards.map((country) => (
                <div
                  key={country.country}
                  className="country-visual-card"
                  style={{ backgroundImage: `url(${country.image})` }}
                >
                  <div className="country-visual-card__overlay" />
                  <span className="country-visual-card__label">
                    {country.flag} {country.country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="heritage-quote">
          <div ref={quoteRef} className="reveal heritage-quote__inner">
            <span className="heritage-quote__mark">&ldquo;</span>
            <blockquote>
              Our founding team brings over 55 years of experience in European laminate distribution, built since
              1968.
            </blockquote>
            <p>Institutional market knowledge · Europe-focused commercial discipline · Built since 1968</p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={productRef} className="reveal">
            <div className="section-header section-header--narrow">
              <p className="section-label">OUR RANGE</p>
              <h2 className="section-title">Three product lines. One clear specification offer.</h2>
              <p className="section-subtitle section-subtitle--left">
                From general-purpose HPL to self-supporting compact laminate, the Vertex range is positioned for
                distributor sales, project supply, and repeat fabrication programmes across Europe.
              </p>
            </div>

            <div className="product-preview-grid">
              {productCards.map((card) => (
                <article key={card.title} className="product-preview-card">
                  <div className="product-preview-card__media">
                    <img src={card.image} alt={card.alt} loading="lazy" />
                    <span className="product-preview-card__badge">Documentation Ready</span>
                  </div>
                  <div className="product-preview-card__body">
                    <span className="product-preview-card__number">{card.number}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                    <div className="pill-row">
                      {card.pills.map((pill) => (
                        <span key={pill} className="pill">
                          {pill}
                        </span>
                      ))}
                    </div>
                    <Link className="btn-text" to="/products">
                      Explore
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={ctaRef} className="final-cta reveal">
          <div className="final-cta__bg" style={{ backgroundImage: `url(${images.EXTERIOR_1})` }} />
          <div className="final-cta__content">
            <h2>Ready to plan your range, quantities, or market rollout?</h2>
            <p>
              We support distributors, fabricators, and project-led buyers with range guidance, certification packs,
              and logistics options sized to the commercial opportunity.
            </p>
            <div className="final-cta__actions">
              <Link className="btn-primary" to="/contact">
                Speak to the Team
              </Link>
              <Link className="btn-ghost" to="/certifications">
                Review Certifications
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

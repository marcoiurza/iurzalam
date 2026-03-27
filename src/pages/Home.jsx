import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { CheckIcon, HeritageIcon, WarehouseIcon } from "../components/Icons";
import { certificationItems, europeanCards, homeApplications, images, reachMarkets } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const valueCards = [
  {
    number: "01",
    title: "Fully Certified",
    body: "Our range carries ETA, FSC, PEFC, Greenguard, and CATAS certification - the complete set of approvals required by European specification authorities, public procurement frameworks, sustainability assessors, and health and safety standards. Every product. No exceptions.",
    icon: <CheckIcon />,
    link: "/certifications"
  },
  {
    number: "02",
    title: "Warehoused in Italy. Any Quantity.",
    body: "Our Italian distribution hub means we can supply any buyer at any order size - from single pallet to full container. Flexible quantities for smaller orders, full-container direct shipments for high-volume buyers. One supplier, one relationship, whatever your scale.",
    icon: <WarehouseIcon />,
    link: "/logistics"
  },
  {
    number: "03",
    title: "Three Generations of Trade Knowledge",
    body: "Three generations of relationships, product depth, and market understanding built since 1968. The knowledge accumulated over decades of active trade in the European laminate market is not reproducible by a conventional trading company.",
    icon: <HeritageIcon />,
    link: "/about"
  }
];

const logisticsFacts = [
  ["Any quantity", "From single pallet to full container"],
  ["Full container option", "Direct shipment for high-volume buyers"],
  ["European focus", "Italy hub - optimised for EU, UK, and CH delivery"],
  ["Global supply", "We ship to buyers worldwide"]
];

const productCards = [
  {
    image: images.KITCHEN_1,
    alt: "Kitchen interior featuring HPL Standard decorative laminate surfaces",
    number: "01",
    title: "HPL Standard",
    body: "General-purpose HPL in a wide range of decors and finishes. For furniture manufacturing, shopfitting, and interior partitioning.",
    pills: ["Matt", "Gloss", "Soft Touch", "Textured", "Wood Decor", "Solid Colour"]
  },
  {
    image: images.COMMERCIAL_2,
    alt: "Commercial interior counter finished in HPL Premium decorative surface",
    number: "02",
    title: "HPL Premium",
    body: "100% acrylic solid surface on HPL substrate. UV-stable, scratch-resistant, and thermoformable. The specification choice for high-end kitchens, bathrooms, and commercial counters.",
    pills: ["Matt", "Gloss", "Anti-fingerprint", "Marble", "Stone", "Solid Colour"]
  },
  {
    image: images.WASHROOM_1,
    alt: "Compact laminate used for washroom cubicles in commercial settings",
    number: "03",
    title: "Compact Laminate",
    body: "Self-supporting panel with superior moisture, impact, and chemical resistance. Interior and exterior-grade formulations for washrooms, lockers, cladding, and beyond.",
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
      <PageTitle title="IurzaLam - Global HPL & Compact Laminate Distribution" />

      <main>
        <section className="hero hero--home" style={{ backgroundImage: `url(${images.HERO_MAIN})` }}>
          <div className="hero__overlay hero__overlay--home" />
          <div className="hero__content hero__content--home">
            <p className="hero-eyebrow">EST. 1968 &middot; GLOBAL DISTRIBUTION</p>
            <h1 className="hero-h1">
              Where specification meets <em>certified supply.</em>
            </h1>
            <p className="hero-sub">
              Three generations of European laminate expertise. Three product lines, fully certified for every
              major market standard. Warehoused in Italy. Delivered anywhere.
            </p>
            <div className="hero-ctas">
              <Link className="btn-primary" to="/contact">
                Request a Quote
              </Link>
              <Link className="btn-ghost" to="/products">
                Explore Products &#8594;
              </Link>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <span className="scroll-indicator__line" />
          </div>
        </section>

        <section className="cert-strip">
          <div className="cert-strip__label">Fully certified</div>
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
                <h2 className="section-title">Surfaces in use across the world</h2>
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
              <p className="section-label">WHY IURZALAM</p>
              <h2 className="section-title">The specification-grade laminate distributor the market needed</h2>
              <p className="section-subtitle">
                We are not a catalogue distributor. We are a family-run specialist with decades of institutional
                knowledge, every certification required by the European market, and a logistics infrastructure
                designed to serve any buyer at any scale.
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
              <h2>Italy warehouse. Global reach.</h2>
              <p>
                Our central distribution hub in Italy means shorter lead times for European buyers, flexible order
                quantities, and direct container options for high-volume accounts. We supply fabricators,
                distributors, and contractors anywhere in the world.
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
              <p className="section-label">OUR REACH</p>
              <h2 className="section-title">Europe first. Everywhere else too.</h2>
              <p className="section-copy">
                Our primary focus is Europe - where our family has operated for decades and where our certifications
                are most directly relevant to specification. But our logistics infrastructure means we can supply
                buyers anywhere in the world. If you need IurzaLam products, we can get them to you.
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
              Three generations of the Iurza family have traded European decorative laminates since 1968. The
              knowledge accumulated first-hand over decades is what turns supply into genuine market judgement.
            </blockquote>
            <p>&mdash; Three generations in European decorative surfaces &middot; Est. 1968</p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={productRef} className="reveal">
            <div className="section-header section-header--narrow">
              <p className="section-label">OUR RANGE</p>
              <h2 className="section-title">Three product lines. Every specification covered.</h2>
              <p className="section-subtitle section-subtitle--left">
                From general-purpose HPL to self-supporting exterior compact laminate - certified for every major
                European market standard, warehoused in Italy, available at any quantity.
              </p>
            </div>

            <div className="product-preview-grid">
              {productCards.map((card) => (
                <article key={card.title} className="product-preview-card">
                  <div className="product-preview-card__media">
                    <img src={card.image} alt={card.alt} loading="lazy" />
                    <span className="product-preview-card__badge">ETA Certified</span>
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
            <h2>Ready to discuss your requirements?</h2>
            <p>
              We supply fabricators, distributors, and contractors at any scale - from flexible warehouse
              quantities to full-container direct shipments. Certification documentation available on request.
            </p>
            <div className="final-cta__actions">
              <Link className="btn-primary" to="/contact">
                Contact Us
              </Link>
              <Link className="btn-ghost" to="/contact">
                Download Spec Sheets
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

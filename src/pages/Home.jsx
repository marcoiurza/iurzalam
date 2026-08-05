import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { CheckIcon, HeritageIcon, WarehouseIcon } from "../components/Icons";
import { certificationItems, europeanCards, homeApplications, images, reachMarkets } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const valueCards = [
  {
    number: "01",
    title: "Intelligent Guidance",
    body: "We combine market knowledge, technical understanding, and commercial awareness to help partners navigate specification, compliance, and range decisions with clarity.",
    icon: <CheckIcon />,
    link: "/certifications"
  },
  {
    number: "02",
    title: "Tailored Solutions",
    body: "We work alongside our partners to shape the right product and supply model, from mixed pallets and recurring replenishment to direct containers for higher-volume accounts.",
    icon: <WarehouseIcon />,
    link: "/logistics"
  },
  {
    number: "03",
    title: "Reliable Partnership",
    body: "Our team carries four generations of laminate-market knowledge, dating to 1953, with a commitment to consistent sourcing, responsive service, and long-term commercial relationships.",
    icon: <HeritageIcon />,
    link: "/about"
  }
];

const logisticsFacts = [
  ["Flexible quantities", "From mixed pallets and full trucks to full-container programmes"],
  ["Turate logistics hub", "Positioned near Milan for fast European replenishment"],
  ["Commercial flexibility", "Mixed orders, rolling supply, and project scheduling"],
  ["Broader reach", "Selected global markets served through direct shipment"]
];

const productCards = [
  {
    image: images.KITCHEN_1,
    alt: "Kitchen interior featuring Vertex decorative high-pressure laminate surfaces",
    number: "01",
    title: "Decorative & Technical HPL",
    body: "Decorative, Unicore, digital, Synchro, post-forming, ESD, fire-retardant, chemical-resistant, writable, and metallic laminate families.",
    pills: ["Decorative", "Unicore", "Digital", "Synchro", "Post-forming", "Technical"]
  },
  {
    image: images.COMMERCIAL_2,
    alt: "Commercial counter finished in a specialist decorative surface",
    number: "02",
    title: "Speciality Surfaces",
    body: "Granex acrylic solid surface, TableX table tops, Stella multipanels, TouchMe anti-fingerprint, Gloss Pro+, and hot-coated boards.",
    pills: ["Granex", "TableX", "Stella", "TouchMe", "High Gloss", "Hot Coating"]
  },
  {
    image: images.WASHROOM_1,
    alt: "Compact laminate used for washroom cubicles in commercial settings",
    number: "03",
    title: "Compact & Exterior Systems",
    body: "Structural compact panels for cubicles, lockers, façades, fascia systems, wet areas, and other demanding applications.",
    pills: ["Compact", "Exterior", "Cubicles", "Lockers", "Marine", "Cladding"]
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
        title="Co-creator of possibilities"
        description="Vertex Laminati SA supplies a broad portfolio of decorative, technical, compact, exterior, and specialist laminate surfaces across Europe."
        path="/"
      />

      <main>
        <section className="hero hero--home" style={{ backgroundImage: `url(${images.HERO_MAIN})` }}>
          <div className="hero__overlay hero__overlay--home" />
          <div className="hero__content hero__content--home">
            <p className="hero-eyebrow">CO-CREATOR OF POSSIBILITIES</p>
            <h1 className="hero-h1">
              Transforming possibility <em>into growth.</em>
            </h1>
            <p className="hero-sub">
              We guide and co-create laminati solutions, tailored to help our partners realise their greatest
              potential and unlock long-term success.
            </p>
            <div className="hero-ctas">
              <Link className="btn-primary" to="/contact">
                Contact us
              </Link>
              <Link className="btn-ghost" to="/products">
                View our collections
              </Link>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <span className="scroll-indicator__line" />
          </div>
        </section>

        <section className="cert-strip">
          <div className="cert-strip__label">Supporting documentation</div>
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
              <p className="section-label">HOW WE CREATE VALUE</p>
              <h2 className="section-title">Intelligent guidance. Tailored solutions.</h2>
              <p className="section-subtitle">
                Creative thinking, collaborative relationships, and reliable execution turn complex laminate
                decisions into clearer pathways for growth.
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
                Our Turate logistics hub near Milan supports European replenishment with flexible quantities, mixed
                pallets, full trucks, and direct containers for larger programmes.
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
                Vertex Laminati supports distributors, fabricators, and industrial converters across more than 15
                European markets. Selected global accounts are served through direct shipment structures when the
                programme and routing are suitable.
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
              Four generations in decorative laminates. More than 70 years of product knowledge, relationships, and
              dependable service since 1953.
            </blockquote>
            <p>Four generations - European distribution heritage - Built since 1953</p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={productRef} className="reveal">
            <div className="section-header section-header--narrow">
              <p className="section-label">OUR RANGE</p>
              <h2 className="section-title">A broad surface portfolio. One committed partner.</h2>
              <p className="section-subtitle section-subtitle--left">
                From decorative and technical HPL to compact systems, acrylic solid surfaces, prelaminated boards,
                and specialist finishes, Vertex brings the range together for European distribution and fabrication.
              </p>
            </div>

            <div className="product-preview-grid">
              {productCards.map((card) => (
                <article key={card.title} className="product-preview-card">
                  <div className="product-preview-card__media">
                    <img src={card.image} alt={card.alt} loading="lazy" />
                    <span className="product-preview-card__badge">Specification supported</span>
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
            <h2>What could we create together?</h2>
            <p>
              Bring us your market opportunity, project requirement, or supply challenge. We will help shape the
              laminati solution and pathway forward.
            </p>
            <div className="final-cta__actions">
              <Link className="btn-primary" to="/contact">
                Start a conversation
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

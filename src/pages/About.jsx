import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const timeline = [
  [
    "1968",
    "The Iurza family enters European laminate distribution - among the first to import laminates from India into Europe."
  ],
  [
    "Second generation",
    "The network expands across Europe. Direct commercial relationships established with distributors and fabricators across Switzerland, Germany, and the Benelux."
  ],
  [
    "Third generation",
    "IurzaLam is founded to bring three generations of knowledge, relationships, and product expertise to a modern, scalable distribution business."
  ]
];

const businessCards = [
  {
    title: "Product Ownership",
    body: "We sell our products under the IurzaLam name. Our range is fully certified, independently tested, and backed by complete European documentation. Not sourced on demand - curated, specified, and owned."
  },
  {
    title: "Certification-Led",
    body: "We built our product range around certifications, not despite them. ETA, FSC, PEFC, Greenguard, CATAS - every standard required by the European market. Because a product you cannot specify is a product you cannot sell."
  },
  {
    title: "Logistics Infrastructure",
    body: "Italy warehouse for flexible quantities. Full container option for volume buyers. The same products, the same certifications, the same documentation - whether you are ordering a single pallet or a full container."
  }
];

const companyInfo = [
  ["Registered name", "Iurza Decorative Surfaces Ltd"],
  ["Trading as", "IurzaLam"],
  ["Company number", "16980223"],
  ["Jurisdiction", "England & Wales"],
  ["Registered office", "71-75 Shelton Street, London WC2H 9JQ"],
  ["SIC code", "46730 \u2014 Wholesale of wood, construction materials"],
  ["Logistics hub", "Italy"],
  ["Coverage", "Europe (primary) \u00B7 Global (full container)"]
];

const countryCards = [
  ["\uD83C\uDDEC\uD83C\uDDE7", "United Kingdom", "Active"],
  ["\uD83C\uDDF3\uD83C\uDDF1", "Netherlands", "Active"],
  ["\uD83C\uDDE7\uD83C\uDDEA", "Belgium", "Active"],
  ["\uD83C\uDDF5\uD83C\uDDF1", "Poland", "Active"],
  ["\uD83C\uDDE9\uD83C\uDDEA", "Germany", "Active"],
  ["\uD83C\uDDE8\uD83C\uDDED", "Switzerland", "Active"]
];

function About() {
  const narrativeRef = useReveal();
  const businessRef = useReveal();
  const rootsRef = useReveal();

  return (
    <>
      <PageTitle title="About - IurzaLam" />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.HERITAGE})` }}>
          <div className="page-hero__overlay page-hero__overlay--angled" />
          <div className="page-hero__content page-hero__content--mid">
            <p className="section-label section-label--light">OUR STORY</p>
            <h1>
              Three generations. One <em>industry.</em>
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
                The Iurza family has traded European decorative laminates since 1968. Three generations of market
                knowledge, supplier relationships, and specification expertise - built over decades, not assembled
                for a launch.
              </blockquote>
            </aside>
          </div>
        </section>

        <section className="section section--stone">
          <div ref={businessRef} className="reveal">
            <p className="section-label">THE BUSINESS</p>
            <h2 className="section-title">Built differently from the start.</h2>
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
              <h2>The European market is in our DNA.</h2>
              <p>
                Since 1968, the family trade has been shaped around European buyer expectations: specification
                standards, procurement processes, repeat relationships, and documentation discipline. IurzaLam was
                built to formalise that knowledge into a modern business with owned products and dependable supply.
              </p>
            </div>
            <div className="dark-country-grid">
              {countryCards.map(([flag, country, status]) => (
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
            <p className="section-label">COMPANY INFORMATION</p>
            <h2 className="section-title">Iurza Decorative Surfaces Ltd</h2>
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

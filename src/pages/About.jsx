import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const timeline = [
  [
    "1968",
    "Grandfather enters the decorative laminate trade, establishing the first commercial relationships and the market instincts the business still draws on today."
  ],
  [
    "1998",
    "Father expands the network across Europe, deepening supply relationships and strengthening the commercial discipline around professional buyers and repeat trade."
  ],
  [
    "2026",
    "Marco launches IurzaLam to bring that accumulated knowledge into a modern distribution business focused on owned products, documentation-led specification, and scalable supply."
  ]
];

const businessCards = [
  {
    title: "Product Ownership",
    body: "We sell our products under the IurzaLam name. Our range is documented, independently certified where applicable, and backed by complete specification paperwork. Not sourced on demand - curated, specified, and owned."
  },
  {
    title: "Documentation-Led",
    body: "We built the range around the paperwork professional buyers actually need: ETA, CE, DoP, FSC, GREENGUARD, EPD, HPD, ISO systems, fire classification, food-contact, marine, recycled-content, and additional market-specific documentation."
  },
  {
    title: "Logistics Infrastructure",
    body: "Italy warehouse for flexible quantities. Full container option for volume buyers. The same products, the same documentation, the same relationship - whether you are ordering a single pallet or a full container."
  }
];

const companyInfo = [
  ["Registered name", "Iurza Decorative Surfaces Ltd"],
  ["Trading as", "IurzaLam"],
  ["Company number", "16980223"],
  ["Jurisdiction", "England & Wales"],
  ["Registered office", "71-75 Shelton Street, London WC2H 9JQ"],
  ["SIC code", "46730 - Wholesale of wood, construction materials"],
  ["Logistics hub", "Italy"],
  ["Coverage", "Europe (primary) - Global (full container)"]
];

const countryCards = [
  ["UK", "United Kingdom", "Active"],
  ["NL", "Netherlands", "Active"],
  ["BE", "Belgium", "Active"],
  ["PL", "Poland", "Active"],
  ["DE", "Germany", "Active"],
  ["CH", "Switzerland", "Active"]
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
              <span className="pull-quote-card__mark">"</span>
              <blockquote>
                Grandfather in 1968. Father in 1998. Marco in 2026. The dates matter because continuity matters:
                judgement in this industry is accumulated over years of trade, not assembled for a launch.
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

import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const timeline = [
  ["1968", "Commercial roots established in European laminate distribution."],
  ["1990s-2010s", "Relationships expanded across Benelux, DACH, Italy, and Poland through active B2B market work."],
  ["Today", "Vertex Laminati operates as an independent European brand with proprietary public positioning and flexible supply infrastructure."]
];

const businessCards = [
  {
    title: "Creative by Nature",
    body: "We explore new possibilities and turn market insight, technical understanding, and original thinking into meaningful laminate solutions."
  },
  {
    title: "Collaborative by Design",
    body: "We work alongside our partners, becoming an extension of their team and shaping solutions around shared commercial goals."
  },
  {
    title: "Reliable in Delivery",
    body: "We pair intelligent guidance with consistent sourcing, Europe-first distribution, and responsive service our partners can depend on."
  }
];

const teamCards = [
  {
    title: "Founder & CEO",
    body: "Leads commercial strategy, supplier coordination, and European market development, with more than a decade of international B2B distribution experience."
  },
  {
    title: "Industry Senior Advisor",
    body: "Brings over 30 years in European laminate distribution, with deep relationships across Benelux, Poland, Italy, and broader specification-led channels."
  },
  {
    title: "Operations & Logistics",
    body: "Coordinates warehouse planning, shipment structures, and documentation flow to keep repeat supply reliable across multiple destination markets."
  }
];

const companyInfo = [
  ["Public brand", "Vertex Laminati"],
  ["Legal entity", "Vertex Laminati SA"],
  ["Commercial office", "Coldrerio, Ticino, Switzerland"],
  ["Distribution model", "Italy stock programme - Full container direct"],
  ["Primary coverage", "United Kingdom - Benelux - Germany - Poland - Switzerland"],
  ["Commercial focus", "Distributors - Fabricators - Joinery manufacturers - Project-led buyers"]
];

const countryCards = [
  ["GB", "United Kingdom", "Active"],
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
      <PageTitle
        title="About"
        description="Vertex Laminati is a creative, collaborative, trusted, and intelligent co-creator of tailored laminate solutions, built on European industry roots dating to 1968."
        path="/about"
      />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.HERITAGE})` }}>
          <div className="page-hero__overlay page-hero__overlay--angled" />
          <div className="page-hero__content page-hero__content--mid">
            <p className="section-label section-label--light">WHO WE ARE</p>
            <h1>
              The co-creator <em>of possibilities.</em>
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
                Vertex Laminati is led by professionals with roots in European laminate distribution going back to
                1968.
              </blockquote>
            </aside>
          </div>
        </section>

        <section className="section section--stone">
          <div ref={businessRef} className="reveal">
            <p className="section-label">OUR PERSONALITY</p>
            <h2 className="section-title">Creative. Collaborative. Trusted. Intelligent.</h2>
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
              <h2>Role-based leadership, Europe-focused execution.</h2>
              <p>
                The public-facing team profile is deliberately role-led. Buyers work with Vertex Laminati as a
                professional commercial platform, not as a personality-led or supplier-led resale business.
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
            <p className="section-label">LEADERSHIP ROLES</p>
            <h2 className="section-title">Public team profile</h2>
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
            <p className="section-label">COMPANY PROFILE</p>
            <h2 className="section-title">Vertex Laminati SA</h2>
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

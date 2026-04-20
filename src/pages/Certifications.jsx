import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const certifications = [
  {
    key: "ETA",
    full: "European Technical Assessment",
    title: "European Technical Assessment",
    bodyOne:
      "ETA is the formal approval framework used across European construction and permanent works projects. It underpins Declaration of Performance documentation and provides the specification confidence required for regulated procurement environments.",
    bodyTwo:
      "For buyers serving public-sector, healthcare, education, or infrastructure programmes, ETA-backed documentation is table stakes. Vertex Laminati positions its range around that expectation from day one.",
    relevant:
      "Public-sector specification - Main contractor procurement - Healthcare and education projects - CPR-sensitive construction packages",
    background: "stone"
  },
  {
    key: "FSC",
    full: "Forest Stewardship Council",
    title: "Forest Stewardship Council",
    bodyOne:
      "FSC confirms that wood-based inputs originate from responsibly managed forests and audited supply chains. It remains one of the most widely recognised sourcing credentials in international interiors and building materials procurement.",
    bodyTwo:
      "For teams targeting BREEAM, LEED, DGNB, or internal ESG policies, FSC documentation supports responsible sourcing claims and helps keep approved material lists compliant.",
    relevant:
      "BREEAM and LEED projects - Public procurement - ESG reporting - Responsible sourcing policies",
    background: "white"
  },
  {
    key: "PEFC",
    full: "Programme for Endorsement of Forest Certification",
    title: "Programme for the Endorsement of Forest Certification",
    bodyOne:
      "PEFC provides audited chain-of-custody visibility across a broad network of national forest certification schemes. It is widely accepted in European procurement as a valid and practical route to sustainable timber assurance.",
    bodyTwo:
      "For distributors and project buyers, PEFC strengthens the documentation package behind each shipment and helps satisfy sustainability checks without adding friction to commercial approval.",
    relevant:
      "European public procurement - Sustainable building standards - Corporate responsibility reporting - Green material approvals",
    background: "stone"
  },
  {
    key: "GG",
    full: "Greenguard Gold",
    title: "Greenguard Gold",
    bodyOne:
      "Greenguard Gold verifies low chemical emissions and supports healthier interior environments, especially in schools, healthcare settings, and other projects with stricter indoor air quality expectations.",
    bodyTwo:
      "That matters commercially because specifiers increasingly need proof that surfaces can sit inside sensitive-use environments without triggering extra material reviews or substitution requests.",
    relevant:
      "Schools and educational facilities - Healthcare interiors - Childcare projects - Indoor air quality-led specifications",
    background: "white"
  },
  {
    key: "CATAS",
    full: "Independent European Testing",
    title: "CATAS Testing & Performance Verification",
    bodyOne:
      "CATAS is one of Europe’s best-known independent testing and certification bodies for furniture and interior materials. Its reports support due diligence on durability, resistance, and performance claims.",
    bodyTwo:
      "For commercial teams, CATAS strengthens confidence during technical review and gives procurement departments a familiar third-party reference point when assessing specification risk.",
    relevant:
      "Technical due diligence - EN-standard verification - Procurement review - Performance-led specifications",
    background: "stone"
  }
];

function Certifications() {
  const introRef = useReveal();
  const docsRef = useReveal();

  return (
    <>
      <PageTitle
        title="Certifications"
        description="Vertex Laminati surfaces are positioned with the certification suite Europe expects: ETA, FSC, PEFC, Greenguard Gold, and CATAS."
        path="/certifications"
      />

      <main>
        <section className="page-hero page-hero--centered" style={{ backgroundImage: `url(${images.MATERIAL_STONE})` }}>
          <div className="page-hero__overlay page-hero__overlay--forest" />
          <div className="page-hero__content page-hero__content--centered">
            <p className="section-label section-label--light">COMPLIANCE &amp; CERTIFICATION</p>
            <h1>Every certificate that matters.</h1>
            <p>
              The Vertex Laminati range is presented with the documentation needed for professional specification,
              sustainability review, and procurement sign-off across Europe.
            </p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={introRef} className="cert-intro reveal">
            <div>
              <h2 className="section-title">Certification is commercial infrastructure.</h2>
              <p className="section-copy">
                In professional materials distribution, the right paperwork is not an afterthought. It determines
                whether a product can be specified, approved, or purchased without delay. Vertex Laminati’s public
                range is positioned around that reality.
              </p>
            </div>
            <div className="cert-intro__stats">
              <div className="cert-intro__stat">
                <strong>5</strong>
                <span>Core certifications used across the range</span>
              </div>
              <div className="cert-intro__stat">
                <strong>EU</strong>
                <span>Focused on European procurement expectations</span>
              </div>
              <div className="cert-intro__stat">
                <strong>Ready</strong>
                <span>Documentation available on request</span>
              </div>
            </div>
          </div>
        </section>

        {certifications.map((item) => (
          <section
            key={item.key}
            className={`section ${item.background === "stone" ? "section--stone" : "section--white"}`}
          >
            <div className="cert-detail">
              <div className="cert-detail__content">
                <p className="section-label">{item.key === "GG" ? "GREENGUARD GOLD" : item.key}</p>
                <h2 className="section-title section-title--small">{item.title}</h2>
                <p className="section-copy">{item.bodyOne}</p>
                <p className="section-copy">{item.bodyTwo}</p>
                <div className="cert-callout">
                  <span>RELEVANT FOR</span>
                  <p>{item.relevant}</p>
                </div>
              </div>
              <div className="cert-detail__badge">
                <div className="cert-badge">
                  <div className="cert-badge__inner">
                    <strong>{item.key}</strong>
                    <span>{item.full}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="section section--forest">
          <div ref={docsRef} className="docs-cta reveal">
            <div>
              <h2>Request certification documentation</h2>
              <p>
                Performance reports, chain-of-custody records, and supporting specification documents are available
                for the Vertex range on request.
              </p>
            </div>
            <div className="docs-cta__action">
              <Link className="btn-primary" to="/contact">
                Request Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Certifications;

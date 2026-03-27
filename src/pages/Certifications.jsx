import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const primaryCredentials = [
  {
    key: "ETA",
    full: "European Technical Assessment",
    title: "European Technical Assessment",
    bodyOne:
      "The European Technical Assessment is the formal approval framework used for construction products on permanent works across the EU and EEA. It supports Declaration of Performance requirements, CE marking workflows, and project-level compliance where specifiers and contractors need formal technical approval.",
    bodyTwo:
      "For specifiers and main contractors working to CPR requirements, ETA documentation is a threshold item rather than a marketing extra. It supports due diligence on regulated projects where performance, durability, and compliance evidence all need to be documented clearly.",
    relevant:
      "Public sector specification - Main contractor procurement - CPR-notified projects - Healthcare and education build programmes - EU and EEA construction works",
    background: "stone"
  },
  {
    key: "CE",
    full: "CE Certificate + Declaration of Performance",
    title: "CE Certificate and Declaration of Performance",
    bodyOne:
      "The compliance folder includes CE Certificate and Declaration of Performance documentation, giving buyers the formal paperwork needed to support CE-marked product supply on applicable projects. In practice, this is often the document set procurement teams ask for first.",
    bodyTwo:
      "Together with ETA documentation, the CE and DoP paperwork gives specifiers, contractors, and distributors a usable route from product selection to compliance file. That matters on live projects where technical documentation needs to be shared quickly and without ambiguity.",
    relevant:
      "Project compliance files - CE-marked supply - Main contractor due diligence - Procurement documentation - Technical submittals",
    background: "white"
  },
  {
    key: "FSC",
    full: "Forest Stewardship Council",
    title: "Forest Stewardship Council",
    bodyOne:
      "FSC Chain of Custody documentation confirms responsible fibre sourcing and is the benchmark many professional buyers use when responsible materials policies are part of the specification process. It remains one of the most recognisable sustainability credentials in the market.",
    bodyTwo:
      "For projects targeting responsible sourcing credits or operating under internal ESG policies, FSC paperwork is often mandatory. It supports public procurement, green building targets, and corporate reporting where material provenance needs to be documented, not assumed.",
    relevant:
      "Responsible sourcing policies - BREEAM and LEED projects - Public procurement - ESG reporting - Corporate specification frameworks",
    background: "stone"
  },
  {
    key: "GG",
    full: "GREENGUARD + GREENGUARD Gold",
    title: "GREENGUARD and GREENGUARD Gold",
    bodyOne:
      "The compliance library includes both GREENGUARD and GREENGUARD Gold documentation for HPL, covering low-emission indoor air quality requirements. These credentials are especially relevant where the product sits inside healthcare, education, workplace, and public-use environments.",
    bodyTwo:
      "For specifiers working on sensitive interiors, GREENGUARD Gold is often the stronger reference point because it addresses the stricter end of the emissions conversation. Having both documents available gives buyers a clearer documentation path for indoor-use projects.",
    relevant:
      "Indoor air quality requirements - Education and healthcare interiors - Workplace fit-outs - Low-emission specifications - Sensitive occupancy environments",
    background: "white"
  },
  {
    key: "EPD",
    full: "EPD + HPD",
    title: "Environmental and Health Declarations",
    bodyOne:
      "The documentation set includes both EPD and HPD material declarations. That means specifiers and sustainability consultants can review not just certification status but broader environmental and health disclosure information for the product set under review.",
    bodyTwo:
      "These declarations are especially useful when the conversation moves beyond technical approval into sustainability reporting, material transparency, embodied impact, or internal client governance around approved product classes.",
    relevant:
      "Sustainability reporting - Material transparency reviews - Green building submissions - Consultant due diligence - Corporate governance on materials",
    background: "stone"
  }
];

const additionalCredentials = [
  ["ISO 9001", "Quality management certification"],
  ["ISO 14001", "Environmental management certification"],
  ["ISO 45001", "Occupational health and safety certification"],
  ["M1", "Low-emission Finland classification"],
  ["NSF", "Food-contact certification"],
  ["Fire Resistance", "Independent fire classification report"],
  ["DNV Marine", "Marine equipment directive documentation"],
  ["Recycled Content", "Recycled content certificate"],
  ["SGBP", "Swiss Green Building documentation"],
  ["Singapore Green Label", "Regional environmental certification"],
  ["Anti-Fungal ASTM G21", "Surface performance test report"]
];

function Certifications() {
  const introRef = useReveal();
  const additionalRef = useReveal();
  const docsRef = useReveal();

  return (
    <>
      <PageTitle title="Certifications - IurzaLam" />

      <main>
        <section className="page-hero page-hero--centered" style={{ backgroundImage: `url(${images.MATERIAL_CLOSE})` }}>
          <div className="page-hero__overlay page-hero__overlay--forest" />
          <div className="page-hero__content page-hero__content--centered">
            <p className="section-label section-label--light">COMPLIANCE &amp; DOCUMENTATION</p>
            <h1>
              More than badges. <em>Usable documentation.</em>
            </h1>
            <p>
              Our range is supported by a broad library of certificates, declarations, and test reports for
              specification, procurement, sustainability review, and project documentation.
            </p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={introRef} className="cert-intro reveal">
            <div>
              <h2 className="section-title">Compliance is part of the product offer.</h2>
              <p className="section-copy">
                The compliance folder currently includes 19 documented items across certificates, declarations, and
                technical reports. That matters because professional buyers do not just need a panel - they need a
                panel backed by paperwork that can move through procurement, specification, and project approval.
              </p>
            </div>
            <div className="cert-intro__stats">
              <div className="cert-intro__stat">
                <strong>19</strong>
                <span>Documented certificates, declarations, and reports</span>
              </div>
              <div className="cert-intro__stat">
                <strong>ETA + CE</strong>
                <span>Core technical paperwork for regulated project environments</span>
              </div>
              <div className="cert-intro__stat">
                <strong>100%</strong>
                <span>Documentation available on request for professional review</span>
              </div>
            </div>
          </div>
        </section>

        {primaryCredentials.map((item) => (
          <section
            key={item.key}
            className={`section ${item.background === "stone" ? "section--stone" : "section--white"}`}
          >
            <div className="cert-detail">
              <div className="cert-detail__content">
                <p className="section-label">{item.key}</p>
                <h2 className="section-title section-title--small">{item.title}</h2>
                <p className="section-copy">{item.bodyOne}</p>
                <p className="section-copy">{item.bodyTwo}</p>
                <div className="cert-callout">
                  <span>Relevant for</span>
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

        <section className="section section--white">
          <div ref={additionalRef} className="reveal">
            <div className="section-header section-header--narrow">
              <p className="section-label">ADDITIONAL DOCUMENTATION</p>
              <h2 className="section-title">Additional credentials in the current compliance library</h2>
              <p className="section-subtitle section-subtitle--left">
                Beyond the core credentials above, the compliance folder also contains market-specific
                certifications, management-system certificates, and technical reports that can be supplied as part
                of the project documentation pack.
              </p>
            </div>

            <div className="credential-grid">
              {additionalCredentials.map(([title, text]) => (
                <article key={title} className="credential-card">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--forest">
          <div ref={docsRef} className="docs-cta reveal">
            <div>
              <h2>Request the documentation pack</h2>
              <p>
                Certificates, declarations, and technical reports are available for professional review. Tell us
                what product or project you are working on and we will assemble the relevant compliance package.
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

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
      "The European Technical Assessment is the formal approval framework mandated by the Construction Products Regulation (CPR) for products used in permanent works across the EU and EEA. It provides the Declaration of Performance (DoP) required for CE marking and full regulatory compliance on notified projects - covering mechanical resistance, fire safety, hygiene, and durability.",
    bodyTwo:
      "For specifiers and main contractors working to CPR requirements, ETA certification is non-negotiable. It is the threshold standard for specification on public sector, healthcare, education, and infrastructure projects across Europe. Every product in the IurzaLam range carries ETA certification.",
    relevant:
      "Public sector specification \u00B7 Main contractor procurement \u00B7 CPR-notified projects \u00B7 Healthcare and education build programmes \u00B7 EU and EEA construction works",
    background: "stone"
  },
  {
    key: "FSC",
    full: "Forest Stewardship Council",
    title: "Forest Stewardship Council",
    bodyOne:
      "FSC certification confirms that the wood fibre used in manufacturing originates from forests managed in accordance with FSC Principles and Criteria - covering environmental integrity, social responsibility, and economic sustainability. It is the globally recognised benchmark for responsible forest management.",
    bodyTwo:
      "For projects targeting BREEAM, LEED, DGNB, or other green building credentials, FSC chain-of-custody documentation is required for responsible sourcing credits. It satisfies the UK Timber Procurement Policy, EU Timber Regulation, and equivalent national frameworks.",
    relevant:
      "BREEAM and LEED projects \u00B7 Public sector procurement \u00B7 ESG and sustainability reporting \u00B7 Corporate responsible sourcing policies",
    background: "white"
  },
  {
    key: "PEFC",
    full: "Programme for Endorsement of Forest Certification",
    title: "Programme for the Endorsement of Forest Certification",
    bodyOne:
      "PEFC is the world's largest forest certification organisation, endorsing national certification schemes across more than 50 countries. Widely accepted within European public sector procurement as equivalent to FSC, it is recognised under EU timber import regulations and national frameworks including the UK Timber Procurement Policy.",
    bodyTwo:
      "PEFC chain-of-custody certification provides an unbroken, audited documentation trail from forest to finished product - giving procurement teams verifiable, third-party confirmed evidence of legal and sustainable timber sourcing.",
    relevant:
      "European public procurement \u00B7 Sustainable building standards \u00B7 Corporate responsibility reporting \u00B7 BREEAM and LEED credits",
    background: "stone"
  },
  {
    key: "GG",
    full: "Greenguard Gold - UL Environment",
    title: "Greenguard Gold - UL Environment",
    bodyOne:
      "Greenguard certification, administered by UL Environment, verifies that a product meets strict chemical emission limits for volatile organic compounds (VOCs), formaldehyde, and more than 360 other chemicals. Products are tested to the most rigorous indoor air quality standards and re-certified annually.",
    bodyTwo:
      "Greenguard Gold applies the most stringent emission criteria - specifically developed for products used in environments occupied by children and vulnerable adults. It satisfies the LEED v4 EQ credit for low-emitting materials and is the standard required by UK healthcare design guidance (HTM), education guidance (BB103), and childcare specifications.",
    relevant:
      "Schools and educational facilities \u00B7 NHS and healthcare environments \u00B7 Childcare and nursery projects \u00B7 LEED v4 EQ credits \u00B7 Indoor air quality requirements",
    background: "white"
  },
  {
    key: "CATAS",
    full: "European Testing & Certification",
    title: "CATAS - European Testing & Certification",
    bodyOne:
      "CATAS is the leading independent European research, testing, and certification body for wood-based panels, furniture, and interior materials, accredited to ISO 17025 and ISO 17065. CATAS testing is the accepted third-party verification standard for mechanical performance, surface resistance, dimensional stability, and durability across European specification frameworks.",
    bodyTwo:
      "CATAS certification provides the independently verified technical performance data - to applicable European standards including EN 438 for HPL sheets and EN 14322 for related panels - that procurement teams require for due diligence on material specification. CATAS reports are accepted by European specification authorities across both public and private sector procurement.",
    relevant:
      "Technical specification compliance \u00B7 Procurement due diligence \u00B7 EN 438 / EN 14322 standards \u00B7 Independent performance verification",
    background: "stone"
  }
];

function Certifications() {
  const introRef = useReveal();
  const docsRef = useReveal();

  return (
    <>
      <PageTitle title="Certifications - IurzaLam" />

      <main>
        <section className="page-hero page-hero--centered" style={{ backgroundImage: `url(${images.MATERIAL_STONE})` }}>
          <div className="page-hero__overlay page-hero__overlay--forest" />
          <div className="page-hero__content page-hero__content--centered">
            <p className="section-label section-label--light">COMPLIANCE &amp; CERTIFICATION</p>
            <h1>Every certificate that matters.</h1>
            <p>
              Our complete range carries every certification required for professional specification, public
              procurement, and sustainable sourcing across Europe.
            </p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={introRef} className="cert-intro reveal">
            <div>
              <h2 className="section-title">Certification is not a formality.</h2>
              <p className="section-copy">
                For specifiers working to CPR requirements, procurement teams applying BREEAM or LEED criteria, or
                fabricators supplying the healthcare and education sectors, a laminate product without the correct
                certifications is simply not specifiable. Our range carries the complete set of approvals demanded
                by the European market - built in from the start, not added later.
              </p>
            </div>
            <div className="cert-intro__stats">
              <div className="cert-intro__stat">
                <strong>5</strong>
                <span>Certifications. Every product.</span>
              </div>
              <div className="cert-intro__stat">
                <strong>ETA</strong>
                <span>Required for CPR compliance on permanent works</span>
              </div>
              <div className="cert-intro__stat">
                <strong>100%</strong>
                <span>Of our range. No exceptions.</span>
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
                <p className="section-label">{item.key === "GG" ? "GREENGUARD" : item.key}</p>
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
                Declarations of Performance, test reports, and chain-of-custody certificates are available for any
                product in our range. Get in touch and we will provide the full documentation package for your
                project.
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

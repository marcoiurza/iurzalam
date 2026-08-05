import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const certifications = [
  {
    key: "CE",
    label: "CE / DECLARATION OF PERFORMANCE",
    full: "EN 438-7 compact wall panels",
    title: "CE conformity & Declaration of Performance",
    bodyOne:
      "Certificate of Conformity No. 208 is issued to manufacturing partner Stylam Industries Limited for interior and exterior grade compact laminate used in wall applications. It covers a stated 2–30 mm range under EN 438-7:2005 and is due for reissue no later than 10 June 2027.",
    bodyTwo:
      "The accompanying Declaration of Performance, DoP-02/20220401, identifies EGS and EDS compact panels from 2–20 mm. The quoted grade, thickness, installation, and declared performance must be checked against the project requirement.",
    relevant:
      "Compact wall panels - EN 438-7 specification - Interior and exterior wall applications - CPR documentation",
    background: "stone"
  },
  {
    key: "FSC",
    label: "FSC CHAIN OF CUSTODY",
    full: "Manufacturer chain of custody",
    title: "FSC chain-of-custody support",
    bodyOne:
      "Manufacturing partner Stylam Industries Limited holds FSC chain-of-custody certificate BV-COC-146497 / BV-CW-146497 for the manufacture and sale of HPL within FSC Mix, FSC Recycled, and FSC Controlled Wood scopes. The certificate expires on 25 February 2029.",
    bodyTwo:
      "A chain-of-custody certificate does not make every supplied sheet FSC certified. A product is treated as covered only when the appropriate FSC claim appears on the relevant sales and delivery documentation. Vertex confirms this at quotation and order stage.",
    relevant:
      "Order-specific FSC claims - Responsible sourcing reviews - Project documentation - Audited supply-chain evidence",
    background: "white"
  },
  {
    key: "EPD",
    label: "ENVIRONMENTAL PRODUCT DECLARATION",
    full: "Compact HPL panels",
    title: "Environmental Product Declaration",
    bodyOne:
      "EPD S-P-06473 covers High Pressure Laminates – Compact Panels manufactured by Stylam Industries Limited. It is prepared in accordance with ISO 14025 and EN 15804:2012+A2:2019, has global geographical scope, and is valid until 1 January 2028.",
    bodyTwo:
      "The declaration provides third-party-verified life-cycle information for its stated compact-panel product scope. It supports environmental assessment, but it is not a blanket environmental claim for every Vertex product line.",
    relevant:
      "Life-cycle assessment - Building-product submissions - Sustainability review - Compact panel specification",
    background: "stone"
  },
  {
    key: "GG",
    label: "GREENGUARD GOLD",
    full: "Low-emission HPL",
    title: "GREENGUARD Gold",
    bodyOne:
      "Certificate 14128-420 covers High Pressure Laminates manufactured by Stylam Industries Limited under the UL 2818-2022 Gold standard for chemical emissions. The current certificate period runs from 8 July 2025 to 7 December 2026.",
    bodyTwo:
      "The supplied certificate is manufacturer-held. Vertex confirms whether the proposed product and branding route are covered before presenting a GREENGUARD claim for a particular offer or project.",
    relevant:
      "Low-emission interiors - Schools and healthcare - Indoor air quality review - Applicable HPL products",
    background: "white"
  },
  {
    key: "M1",
    label: "M1 EMISSION CLASSIFICATION",
    full: "Specified 0.6–0.8 mm HPL",
    title: "M1 emission classification",
    bodyOne:
      "The M1 classification held by Stylam Industries Ltd covers Stylam High Pressure Laminate in the stated 0.6–0.8 mm VGS/HGS scope, including solid-colour and print designs. The classification is valid until 16 May 2028.",
    bodyTwo:
      "Because the certificate defines both thickness and product type, M1 should be referenced only when the offered laminate matches that scope. Other constructions require separate confirmation.",
    relevant:
      "Finnish indoor-emission requirements - Interior HPL - Low-emission specifications - Product-scope verification",
    background: "stone"
  },
  {
    key: "DNV",
    label: "DNV MARINE EQUIPMENT",
    full: "Marine low flame-spread HPL",
    title: "DNV marine type examination",
    bodyOne:
      "DNV type-examination certificate MEDB0000966 covers Stylam High Pressure Laminate as a decorative veneer surface material with low flame-spread characteristics under the Marine Equipment framework. It is valid until 3 December 2029.",
    bodyTwo:
      "Marine approval remains conditional on the approved construction, production surveillance, marking, and installation requirements stated in the certificate. Vertex checks the exact grade and project conditions before supply.",
    relevant:
      "Marine interiors - Decorative veneers - MED documentation - Grade and installation verification",
    background: "white"
  }
];

function Certifications() {
  const introRef = useReveal();
  const docsRef = useReveal();

  return (
    <>
      <PageTitle
        title="Certifications"
        description="Review the manufacturing-level certification landscape and verified certificate scopes supporting applicable Vertex HPL, compact, technical, and specialist products."
        path="/certifications"
      />

      <main>
        <section className="page-hero page-hero--centered" style={{ backgroundImage: `url(${images.MATERIAL_STONE})` }}>
          <div className="page-hero__overlay page-hero__overlay--forest" />
          <div className="page-hero__content page-hero__content--centered">
            <p className="section-label section-label--light">COMPLIANCE &amp; CERTIFICATION</p>
            <h1>Trusted guidance. Clearer specification.</h1>
            <p>
              Verified supporting records, clearly matched to the product, grade, holder, and validity period relevant
              to each project.
            </p>
          </div>
        </section>

        <section className="section section--white">
          <div ref={introRef} className="cert-intro reveal">
            <div>
              <h2 className="section-title">Scope before slogans.</h2>
              <p className="section-copy">
                The current compliance pack is principally issued to Vertex&apos;s manufacturing partner, Stylam
                Industries Limited. Vertex provides the original supporting documents for applicable products; it
                does not present itself as the certificate holder, and no record is treated as universal across the
                full range. Vertex FSC and PEFC chain-of-custody certification for Coldrerio and Turate is recorded as
                in progress and will not be claimed as issued until the final certificates are available.
              </p>
            </div>
            <div className="cert-intro__stats">
              <div className="cert-intro__stat">
                <strong>6</strong>
                <span>Evidence-backed documentation areas highlighted</span>
              </div>
              <div className="cert-intro__stat">
                <strong>Clear</strong>
                <span>Holder, scope, and validity stated</span>
              </div>
              <div className="cert-intro__stat">
                <strong>Checked</strong>
                <span>Applicability confirmed per product and order</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--stone">
          <div className="certification-landscape">
            <div className="section-header section-header--split">
              <div>
                <p className="section-label">MANUFACTURING-LEVEL ASSURANCE</p>
                <h2 className="section-title">A broader documentation landscape.</h2>
              </div>
              <p className="section-copy certification-landscape__intro">
                The portfolio is supported by a wider set of product, environmental, marine, emissions, recycled
                content, health, and management-system records. Logos are shown as a visual index, not as a blanket
                claim across every Vertex product.
              </p>
            </div>
            <figure className="certification-landscape__figure">
              <img
                src="/brand/certification-landscape.jpg"
                alt="Manufacturing-level certification and compliance logo landscape from the 2026 Vertex company presentation"
                loading="lazy"
              />
              <figcaption>
                Manufacturing-level certifications and supporting records. Applicability is confirmed by product,
                grade, thickness, construction, destination market, and order documentation. Vertex FSC / PEFC
                chain-of-custody certification remains in progress.
              </figcaption>
            </figure>
          </div>
        </section>

        {certifications.map((item) => (
          <section
            key={item.key}
            className={`section ${item.background === "stone" ? "section--stone" : "section--white"}`}
          >
            <div className="cert-detail">
              <div className="cert-detail__content">
                <p className="section-label">{item.label}</p>
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
                Tell us the product, grade, thickness, application, and destination market. We will provide the
                relevant original records and identify their holder, scope, validity, and any project-specific limits.
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

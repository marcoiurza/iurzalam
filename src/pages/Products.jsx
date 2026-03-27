import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const docsValue = "ETA \u00B7 FSC \u00B7 PEFC \u00B7 Greenguard \u00B7 CATAS";

const standardSpecs = [
  ["Thickness", "0.6mm - 1.5mm"],
  ["Formats", "Standard (1300x3050mm) \u00B7 Large Format (1300x4200mm)"],
  ["Finishes", "Matt \u00B7 Gloss \u00B7 Soft Touch \u00B7 Brushed \u00B7 Textured \u00B7 Metallic"],
  ["Decor range", "Solids \u00B7 Wood \u00B7 Stone \u00B7 Concrete \u00B7 Abstract"],
  ["Applications", "Furniture \u00B7 Shopfitting \u00B7 Partitioning \u00B7 Cabinetry"],
  ["Documentation", docsValue],
  ["Standard", "EN 438"],
  ["Supply options", "Warehouse (any quantity) \u00B7 Full container (direct)"]
];

const premiumSpecs = [
  ["Thickness", "3mm \u00B7 6mm \u00B7 12mm \u00B7 20mm"],
  ["Sheet size", "760x2440mm \u00B7 760x3660mm"],
  ["Surface", "100% Acrylic Solid Surface"],
  ["Finishes", "Matt \u00B7 Gloss \u00B7 Anti-fingerprint"],
  ["Documentation", docsValue],
  ["Fire rating", "Fire Retardant Grade available"],
  ["Special properties", "Thermoformable \u00B7 Non-porous \u00B7 Repairable \u00B7 Imperceptible joints \u00B7 Food-contact safe"],
  ["Supply options", "Warehouse (any quantity) \u00B7 Full container (direct)"]
];

const compactSpecs = [
  ["Thickness", "2mm \u00B7 3mm \u00B7 4mm \u00B7 6mm \u00B7 10mm \u00B7 13mm \u00B7 20mm \u00B7 25mm+"],
  ["Formats", "Standard \u00B7 Large Format"],
  ["Grades", "Interior \u00B7 Exterior (UV-stable) \u00B7 Anti-bacterial \u00B7 Marine"],
  ["Finishes", "Matt \u00B7 Gloss \u00B7 Satin \u00B7 Metallic \u00B7 Textured"],
  ["Edge", "Homogenous through-colour core"],
  ["Applications", "Washrooms \u00B7 Lockers \u00B7 Worktops \u00B7 Exterior Cladding \u00B7 Marine"],
  ["Documentation", docsValue],
  ["Standard", "EN 438-6"],
  ["Supply options", "Warehouse (any quantity) \u00B7 Full container (direct)"]
];

const comparisonRows = [
  ["Self-supporting", "\u2717", "\u2717", "\u2713"],
  ["Exterior grade", "\u2717", "\u2717", "\u2713"],
  ["Thermoformable", "\u2717", "\u2713", "\u2717"],
  ["Anti-bacterial", "Optional", "\u2713", "\u2713"],
  ["ETA Certified", "\u2713", "\u2713", "\u2713"],
  ["Food-contact safe", "\u2717", "\u2713", "\u2717"],
  ["Moisture resistant", "Low-Medium", "High", "Very High"],
  ["Any quantity", "\u2713", "\u2713", "\u2713"],
  ["Best for", "Furniture/Shopfit", "Hi-spec interiors", "Washrooms/Exterior"]
];

function ProductGallery({ items }) {
  return (
    <div className="product-gallery" role="list">
      {items.map((item) => (
        <figure key={item.caption} className="product-gallery__item" role="listitem">
          <img src={item.image} alt={item.alt} loading="lazy" />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function SpecsGrid({ items }) {
  return (
    <div className="spec-grid">
      {items.map(([label, value]) => (
        <div key={label} className="spec-grid__item">
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}

function Products() {
  const statsRef = useReveal();
  const compareRef = useReveal();

  return (
    <>
      <PageTitle title="Products - IurzaLam" />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.MATERIAL_CLOSE})` }}>
          <div className="page-hero__overlay page-hero__overlay--dark" />
          <div className="page-hero__content page-hero__content--bottom">
            <p className="page-hero__breadcrumb">Home / Products</p>
            <h1>Our Products</h1>
            <p>
              ETA-certified HPL and compact laminate - fully documented, warehoused in Italy, available globally.
            </p>
          </div>
        </section>

        <section ref={statsRef} className="stats-bar reveal">
          <div className="stats-bar__item">
            <strong>Three product lines</strong>
            <span>HPL Standard \u00B7 HPL Premium \u00B7 Compact</span>
          </div>
          <div className="stats-bar__item">
            <strong>Any quantity</strong>
            <span>Warehouse stock or full container. Italy hub.</span>
          </div>
          <div className="stats-bar__item">
            <strong>5 certifications</strong>
            <span>ETA \u00B7 FSC \u00B7 PEFC \u00B7 Greenguard \u00B7 CATAS - every product</span>
          </div>
        </section>

        <section className="product-detail product-detail--stone">
          <div className="product-detail__media product-detail__media--sticky">
            <div className="product-detail__image-wrap">
              <img src={images.KITCHEN_1} alt="HPL Standard kitchen surface application" loading="lazy" />
              <div className="product-detail__label-box">
                <h2>HPL Standard</h2>
                <span>High-Pressure Laminate</span>
              </div>
            </div>
          </div>
          <div className="product-detail__content">
            <span className="product-detail__count">01 / 03</span>
            <h2>HPL Standard</h2>
            <p>
              General-purpose high-pressure laminate manufactured to European standards. Available in a
              comprehensive range of decors, finishes, and formats - from solids and woods to stones and concretes
              - to meet the full range of professional specification demands.
            </p>
            <p>
              Suitable for furniture manufacturing, shopfitting, kitchen cabinetry, interior partitioning, and
              commercial interior projects of any scale. Warehoused in Italy for flexible supply, with
              full-container options available for high-volume buyers.
            </p>
            <SpecsGrid items={standardSpecs} />
            <ProductGallery
              items={[
                { image: images.KITCHEN_1, alt: "Kitchen worktops in HPL Standard laminate", caption: "Kitchen Worktops" },
                { image: images.OFFICE_1, alt: "Office furniture made with HPL Standard laminate", caption: "Office Furniture" },
                { image: images.COMMERCIAL_1, alt: "Bar and counter fit-out in HPL Standard laminate", caption: "Bar & Counter" },
                { image: images.SHOWROOM, alt: "Retail shopfitting with decorative laminate surfaces", caption: "Retail Shopfitting" }
              ]}
            />
            <Link className="btn-primary" to="/contact">
              Request Specification Sheet
            </Link>
          </div>
        </section>

        <section className="product-detail product-detail--white product-detail--reverse">
          <div className="product-detail__content">
            <span className="product-detail__count">02 / 03</span>
            <h2>HPL Premium</h2>
            <p>
              Our premium HPL product combines a 100% acrylic solid surface layer with an HPL substrate for
              exceptional performance. The result is a surface that combines the dimensional stability and
              workability of laminate with the seamless, non-porous properties of solid surface - UV-stable,
              scratch-resistant, food-contact safe, anti-bacterial, and thermoformable.
            </p>
            <p>
              Available in an extensive palette of solids, marbles, stones, concretes, and large-chip acrylic
              effects. The specification choice for architects and designers working on high-end residential and
              commercial interiors where standard HPL performance is insufficient.
            </p>
            <SpecsGrid items={premiumSpecs} />
            <ProductGallery
              items={[
                { image: images.KITCHEN_2, alt: "High-spec kitchen island in HPL Premium", caption: "Kitchen Islands" },
                { image: images.BATHROOM_1, alt: "Bathroom vanity in premium decorative surface", caption: "Bathroom Vanity" },
                { image: images.COMMERCIAL_2, alt: "Commercial counters in HPL Premium material", caption: "Commercial Counters" },
                { image: images.OFFICE_2, alt: "Reception desks specified in HPL Premium material", caption: "Reception Desks" }
              ]}
            />
            <div className="feature-callout">
              The only HPL product in its class to combine a 100% acrylic solid surface with the complete suite of
              European market certifications. Available from IurzaLam in any quantity.
            </div>
          </div>
          <div className="product-detail__media product-detail__media--sticky">
            <div className="product-detail__image-wrap">
              <img src={images.BATHROOM_2} alt="HPL Premium bathroom interior application" loading="lazy" />
              <div className="product-detail__label-box">
                <h2>HPL Premium</h2>
                <span>High-Pressure Laminate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="product-detail product-detail--stone">
          <div className="product-detail__media product-detail__media--sticky">
            <div className="product-detail__image-wrap">
              <img src={images.LOCKER_1} alt="Compact laminate locker installation" loading="lazy" />
              <div className="product-detail__label-box">
                <h2>Compact Laminate</h2>
                <span>Self-supporting panel system</span>
              </div>
            </div>
          </div>
          <div className="product-detail__content">
            <span className="product-detail__count">03 / 03</span>
            <h2>Compact Laminate</h2>
            <p>
              A self-supporting structural panel manufactured entirely from resin-impregnated kraft paper,
              compressed under extreme heat and pressure. Unlike standard HPL - which bonds to a substrate board -
              compact laminate is its own substrate. The result is superior mechanical performance, dimensional
              stability, and resistance to moisture, chemicals, and impact.
            </p>
            <p>
              The material of choice for washroom cubicle systems, locker rooms, wet areas, exterior wall
              cladding, marine environments, and any application where moisture exposure, hygiene, or structural
              integrity cannot be compromised. Available in both interior and exterior-grade formulations.
            </p>
            <SpecsGrid items={compactSpecs} />
            <ProductGallery
              items={[
                { image: images.WASHROOM_1, alt: "Compact laminate washroom cubicle system", caption: "Washroom Cubicles" },
                { image: images.LOCKER_1, alt: "Compact laminate locker systems", caption: "Locker Systems" },
                { image: images.EXTERIOR_2, alt: "Exterior cladding in compact laminate", caption: "Exterior Cladding" },
                { image: images.EXTERIOR_1, alt: "Facade panels in compact laminate", caption: "Facade Panels" }
              ]}
            />
          </div>
        </section>

        <section className="comparison-section">
          <div ref={compareRef} className="comparison-section__inner reveal">
            <h2>Product comparison</h2>
            <p>Choose the right specification for your application.</p>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th />
                    <th>HPL Standard</th>
                    <th>HPL Premium</th>
                    <th>Compact Laminate</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td className={row[1] === "\u2713" ? "is-positive" : row[1] === "\u2717" ? "is-negative" : ""}>{row[1]}</td>
                      <td className={row[2] === "\u2713" ? "is-positive" : row[2] === "\u2717" ? "is-negative" : ""}>{row[2]}</td>
                      <td className={row[3] === "\u2713" ? "is-positive" : row[3] === "\u2717" ? "is-negative" : ""}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;

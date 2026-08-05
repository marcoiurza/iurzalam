import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const docsValue = "ETA - FSC - PEFC - Greenguard Gold - CATAS";

const standardSpecs = [
  ["Thickness", "0.6mm - 1.5mm"],
  ["Formats", "1300x3050mm - 1300x4200mm"],
  ["Finishes", "Matt - Gloss - Soft Touch - Brushed - Textured - Metallic"],
  ["Decor range", "Solids - Wood - Stone - Concrete - Abstract"],
  ["Applications", "Furniture - Shopfitting - Partitioning - Cabinetry"],
  ["Documentation", docsValue],
  ["Standard", "EN 438"],
  ["Supply options", "Italy stock programme - Full container direct"]
];

const premiumSpecs = [
  ["Thickness", "3mm - 6mm - 12mm - 20mm"],
  ["Sheet size", "760x2440mm - 760x3660mm"],
  ["Surface", "100% acrylic solid surface on HPL substrate"],
  ["Finishes", "Matt - Gloss - Anti-fingerprint"],
  ["Documentation", docsValue],
  ["Fire rating", "Fire retardant grade available"],
  ["Special properties", "Thermoformable - Non-porous - Repairable - Food-contact safe"],
  ["Supply options", "Italy stock programme - Full container direct"]
];

const compactSpecs = [
  ["Thickness", "2mm - 3mm - 4mm - 6mm - 10mm - 13mm - 20mm - 25mm+"],
  ["Formats", "Standard - Large format"],
  ["Grades", "Interior - Exterior (UV-stable) - Anti-bacterial - Marine"],
  ["Finishes", "Matt - Gloss - Satin - Metallic - Textured"],
  ["Edge", "Homogenous through-colour core"],
  ["Applications", "Washrooms - Lockers - Worktops - Exterior Cladding - Marine"],
  ["Documentation", docsValue],
  ["Standard", "EN 438-6"],
  ["Supply options", "Italy stock programme - Full container direct"]
];

const comparisonRows = [
  ["Self-supporting", "No", "No", "Yes"],
  ["Exterior grade", "No", "No", "Yes"],
  ["Thermoformable", "No", "Yes", "No"],
  ["Anti-bacterial options", "Available", "Core offer", "Core offer"],
  ["Certification suite", "Complete", "Complete", "Complete"],
  ["Food-contact safe", "No", "Yes", "No"],
  ["Moisture resistance", "Low-Medium", "High", "Very High"],
  ["Supply model", "Stock or direct", "Stock or direct", "Stock or direct"],
  ["Best fit", "Furniture & shopfit", "High-spec interiors", "Washrooms & exterior"]
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
      <PageTitle
        title="Products"
        description="Explore the Vertex Laminati range: HPL Standard, HPL Premium, and Compact surfaces for cabinetry, fit-out, washrooms, and exterior applications."
        path="/products"
      />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.MATERIAL_CLOSE})` }}>
          <div className="page-hero__overlay page-hero__overlay--dark" />
          <div className="page-hero__content page-hero__content--bottom">
            <p className="page-hero__breadcrumb">Home / Products</p>
            <h1>Innovative laminati solutions.</h1>
            <p>
              Three surface systems, each positioned for professional distribution, specification, and repeat supply.
            </p>
          </div>
        </section>

        <section ref={statsRef} className="stats-bar reveal">
          <div className="stats-bar__item">
            <strong>Three product lines</strong>
            <span>HPL Standard - HPL Premium - Compact</span>
          </div>
          <div className="stats-bar__item">
            <strong>Flexible volumes</strong>
            <span>Italy stock support or direct-container planning</span>
          </div>
          <div className="stats-bar__item">
            <strong>Certification ready</strong>
            <span>ETA - FSC - PEFC - Greenguard Gold - CATAS</span>
          </div>
        </section>

        <section className="product-detail product-detail--stone">
          <div className="product-detail__media product-detail__media--sticky">
            <div className="product-detail__image-wrap">
              <img src={images.KITCHEN_1} alt="Vertex HPL Standard kitchen surface application" loading="lazy" />
              <div className="product-detail__label-box">
                <h2>Vertex HPL Standard</h2>
                <span>High-pressure laminate</span>
              </div>
            </div>
          </div>
          <div className="product-detail__content">
            <span className="product-detail__count">01 / 03</span>
            <h2>Vertex HPL Standard</h2>
            <p>
              General-purpose high-pressure laminate for furniture manufacturing, shopfitting, cabinetry, and
              interior wall systems. The range is designed to cover the commercial core: dependable decors, workable
              lead times, and documentation fit for professional buyers.
            </p>
            <p>
              Stock-supported through Italy for flexible quantities, with direct-container options for accounts that
              want wider range consolidation or lower landed cost at scale.
            </p>
            <SpecsGrid items={standardSpecs} />
            <ProductGallery
              items={[
                { image: images.KITCHEN_1, alt: "Kitchen worktops in Vertex HPL Standard laminate", caption: "Kitchen Worktops" },
                { image: images.OFFICE_1, alt: "Office furniture made with Vertex HPL Standard laminate", caption: "Office Furniture" },
                { image: images.COMMERCIAL_1, alt: "Bar and counter fit-out in Vertex HPL Standard laminate", caption: "Bar & Counter" },
                { image: images.SHOWROOM, alt: "Retail shopfitting with Vertex decorative laminate surfaces", caption: "Retail Shopfitting" }
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
            <h2>Vertex HPL Premium</h2>
            <p>
              Vertex HPL Premium combines an acrylic solid-surface finish with an HPL substrate to deliver a more
              seamless, repairable, and specification-led surface option for high-end interiors.
            </p>
            <p>
              It is the right choice where designers want laminate efficiency with a more elevated finish language:
              reception desks, bathroom vanities, hospitality counters, healthcare joinery, and other premium-touch
              applications.
            </p>
            <SpecsGrid items={premiumSpecs} />
            <ProductGallery
              items={[
                { image: images.KITCHEN_2, alt: "High-spec kitchen island in Vertex HPL Premium", caption: "Kitchen Islands" },
                { image: images.BATHROOM_1, alt: "Bathroom vanity in Vertex HPL Premium", caption: "Bathroom Vanity" },
                { image: images.COMMERCIAL_2, alt: "Commercial counters in Vertex HPL Premium", caption: "Commercial Counters" },
                { image: images.OFFICE_2, alt: "Reception desk specified in Vertex HPL Premium", caption: "Reception Desks" }
              ]}
            />
            <div className="feature-callout">
              A premium surface offer positioned for designers and buyers who need higher perceived value without
              sacrificing documentation, repeatability, or supply flexibility.
            </div>
          </div>
          <div className="product-detail__media product-detail__media--sticky">
            <div className="product-detail__image-wrap">
              <img src={images.BATHROOM_2} alt="Vertex HPL Premium bathroom interior application" loading="lazy" />
              <div className="product-detail__label-box">
                <h2>Vertex HPL Premium</h2>
                <span>Specification surface system</span>
              </div>
            </div>
          </div>
        </section>

        <section className="product-detail product-detail--stone">
          <div className="product-detail__media product-detail__media--sticky">
            <div className="product-detail__image-wrap">
              <img src={images.LOCKER_1} alt="Vertex Compact locker installation" loading="lazy" />
              <div className="product-detail__label-box">
                <h2>Vertex Compact</h2>
                <span>Self-supporting panel system</span>
              </div>
            </div>
          </div>
          <div className="product-detail__content">
            <span className="product-detail__count">03 / 03</span>
            <h2>Vertex Compact</h2>
            <p>
              Vertex Compact is a self-supporting structural laminate panel built for applications where moisture,
              durability, hygiene, or impact resistance are non-negotiable.
            </p>
            <p>
              It is particularly well suited to washroom cubicles, locker systems, wet areas, exterior wall
              cladding, and other environments where standard bonded laminate systems are not the right answer.
            </p>
            <SpecsGrid items={compactSpecs} />
            <ProductGallery
              items={[
                { image: images.WASHROOM_1, alt: "Vertex Compact washroom cubicle system", caption: "Washroom Cubicles" },
                { image: images.LOCKER_1, alt: "Vertex Compact locker systems", caption: "Locker Systems" },
                { image: images.EXTERIOR_2, alt: "Exterior cladding in Vertex Compact", caption: "Exterior Cladding" },
                { image: images.EXTERIOR_1, alt: "Facade panels in Vertex Compact", caption: "Facade Panels" }
              ]}
            />
          </div>
        </section>

        <section className="comparison-section">
          <div ref={compareRef} className="comparison-section__inner reveal">
            <h2>Product comparison</h2>
            <p>Choose the right surface system for the application, performance target, and buying model.</p>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th />
                    <th>HPL Standard</th>
                    <th>HPL Premium</th>
                    <th>Compact</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
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

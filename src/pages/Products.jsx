import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { images } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const formats = [
  "1220 × 2440",
  "1245 × 2465",
  "1300 × 2800",
  "1300 × 3050",
  "1860 × 2440",
  "1860 × 3660",
  "1860 × 4320",
  "1600 × 3660",
  "1600 × 4320",
  "2160 × 2980"
];

const corePortfolio = [
  {
    name: "Decorative Laminates",
    body: "Benchmark HPL for furniture, cladding, doors, shelving, cabinetry, and store fitting, offered across a broad décor and finish programme."
  },
  {
    name: "Unicore Laminates",
    body: "Colour-through decorative papers infused with melamine and thermosetting resins as both surface and core for a uniform visual result."
  },
  {
    name: "Digital · DigiDelight",
    body: "Custom digital surfaces that translate graphics, themes, and project-specific artwork into durable decorative laminate."
  },
  {
    name: "Post-Forming Laminates",
    body: "Thermoformable laminate for forward and reverse bending around substrate edges, creating smooth corners on horizontal and vertical interiors."
  },
  {
    name: "Electrostatic · ESD",
    body: "Static-dissipative laminate for IT spaces, laboratories, electronics, pharmaceutical environments, and other ESD-sensitive applications."
  },
  {
    name: "Magnetic Laminates",
    body: "A magnetic decorative surface that can also accept non-permanent markers for retail, education, commercial, and residential use."
  },
  {
    name: "Chalk & Marker Boards",
    body: "Smooth, durable writing-grade boards for schools, offices, hospitality, restaurants, and collaborative interiors."
  },
  {
    name: "Synchro Laminates",
    body: "Embossed-in-register surfaces designed to align texture with the visual grain for a more convincing solid-wood and veneer character."
  },
  {
    name: "MirrorShield Laminates",
    body: "Real aluminium, stainless-steel, and copper foils on a phenolic kraft base for durable, semi-rigid reflective surface applications."
  },
  {
    name: "Metallic · GloMetal",
    body: "Premium metal laminates combining refined visual effects with the durability required for demanding design-led interiors."
  },
  {
    name: "Flicker Laminates",
    body: "A specialist decorative-effect family available for projects seeking distinctive light, movement, and visual character."
  },
  {
    name: "Chemical Resistant Laminates",
    body: "HPHT-engineered surfaces for areas of heavy chemical use, with grade-specific resistance, hygiene, and cleaning documentation."
  },
  {
    name: "Fire Retardant Laminates",
    body: "Grade-specific constructions developed to limit flame propagation. Classification evidence is matched to the exact product and installation."
  },
  {
    name: "Industrial Laminates",
    body: "Structural composites of resin-impregnated fibrous webs fused under heat and pressure for stable geometry and high strength-to-weight performance."
  }
];

const complementaryPortfolio = [
  {
    name: "Granex · Acrylic Solid Surface",
    body: "A non-porous composite of alumina trihydrate, acrylic MMA resin, and pigments, designed to evoke natural stone and support seamless fabrication."
  },
  {
    name: "TableX Table Tops",
    body: "A dedicated table-top range for interior and exterior hospitality, workplace, and leisure applications."
  },
  {
    name: "Stella Multipanels",
    body: "Lightweight decorative panels spanning solid, stone, and wood interpretations for versatile interior applications."
  },
  {
    name: "Exterior Cladding · Fascia",
    body: "Compact façade panels with a UV-protective surface system, available across project-specific colours, thicknesses, and formats."
  },
  {
    name: "Cuboid Cubicles & Lockers",
    body: "A modular compact-panel system for washrooms, lockers, healthcare, education, transport, hospitality, and other high-traffic environments."
  },
  {
    name: "Hot Coating Technology",
    body: "A PU and acrylic coating process developed for high scratch and abrasion resistance on specialist board and surface programmes."
  },
  {
    name: "TouchMe Anti-Fingerprint",
    body: "Super-matt prelaminated MDF with a soft-touch, low-reflective finish and anti-fingerprint surface character."
  },
  {
    name: "Gloss Pro+ High Gloss",
    body: "High-gloss prelaminated boards produced on specialist European technology for durable, design-led interior surfaces."
  }
];

function ProductGrid({ items, start = 1 }) {
  return (
    <div className="portfolio-grid">
      {items.map((item, index) => (
        <article key={item.name} className="portfolio-card">
          <span className="portfolio-card__number">{String(index + start).padStart(2, "0")}</span>
          <h3>{item.name}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function Products() {
  const dimensionsRef = useReveal();
  const coreRef = useReveal();
  const complementaryRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <PageTitle
        title="Products"
        description="Explore Vertex decorative, technical, compact, exterior, industrial, acrylic, writable, metallic, and prelaminated surfaces across ten formats, up to 2160 mm wide or 4320 mm long, and thicknesses from 0.5 to 30 mm."
        path="/products"
      />

      <main>
        <section className="page-hero" style={{ backgroundImage: `url(${images.MATERIAL_CLOSE})` }}>
          <div className="page-hero__overlay page-hero__overlay--dark" />
          <div className="page-hero__content page-hero__content--bottom">
            <p className="page-hero__breadcrumb">Home / Products</p>
            <h1>High-pressure & compact decorative laminates.</h1>
            <p>
              A broad European distribution portfolio spanning decorative surfaces, performance grades, compact
              systems, specialist boards, and industrial applications.
            </p>
          </div>
        </section>

        <section className="stats-bar">
          <div className="stats-bar__item">
            <strong>14 core families</strong>
            <span>Decorative, technical, writable, metallic, and industrial HPL</span>
          </div>
          <div className="stats-bar__item">
            <strong>10 formats</strong>
            <span>Up to 2160 mm wide or 4320 mm long</span>
          </div>
          <div className="stats-bar__item">
            <strong>0.5–30 mm</strong>
            <span>Thin decorative sheets through structural compact panels</span>
          </div>
        </section>

        <section className="section section--white">
          <div ref={dimensionsRef} className="reveal">
            <p className="section-label">FORMATS &amp; THICKNESSES</p>
            <h2 className="section-title">A format range built for fabrication.</h2>
            <p className="section-copy">
              The complete portfolio spans ten published sheet formats and a 0.5–30 mm thickness range. Availability
              varies by product, décor, finish, grade, and supply programme, so final dimensions are confirmed during
              specification.
            </p>
            <div className="format-range">
              <div className="format-grid" aria-label="Available sheet formats in millimetres">
                {formats.map((format) => (
                  <div key={format} className="format-grid__item">
                    <strong>{format}</strong>
                    <span>mm</span>
                  </div>
                ))}
              </div>
              <aside className="thickness-card">
                <span>THICKNESSES</span>
                <strong>0.5–30 mm</strong>
                <p>High-pressure laminate across the full thickness range, from thin sheets to compact panels.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section--stone">
          <div ref={coreRef} className="reveal">
            <p className="section-label">CORE HPL PORTFOLIO</p>
            <h2 className="section-title">Decorative range. Technical depth.</h2>
            <p className="section-copy">
              Fourteen core laminate families cover design, fabrication, performance, writing, metallic, hygiene,
              fire, electrostatic, and industrial requirements.
            </p>
            <ProductGrid items={corePortfolio} />
          </div>
        </section>

        <section className="section section--white">
          <div ref={complementaryRef} className="reveal">
            <p className="section-label">COMPLEMENTARY SURFACES &amp; SYSTEMS</p>
            <h2 className="section-title">Beyond conventional laminate.</h2>
            <p className="section-copy">
              The wider programme adds solid surfaces, table tops, lightweight panels, exterior systems, cubicles,
              lockers, and advanced prelaminated finishes.
            </p>
            <ProductGrid items={complementaryPortfolio} start={15} />
          </div>
        </section>

        <section className="section section--forest">
          <div ref={ctaRef} className="docs-cta reveal">
            <div>
              <h2>Match the range to your application.</h2>
              <p>
                Tell us the décor, finish, format, thickness, performance requirement, annual volume, and destination.
                We will map the suitable products, supply route, samples, and supporting documentation.
              </p>
            </div>
            <div className="docs-cta__action">
              <Link className="btn-primary" to="/contact">
                Request a specification
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;

import { useEffect, useRef, useState } from "react";
import BrandLogo from "../components/BrandLogo";
import PageTitle from "../components/PageTitle";
import { siteMeta } from "../data/siteContent";
import "../styles/launch.css";

const capabilities = [
  ["01", "Decorative & technical HPL"],
  ["02", "Compact & exterior systems"],
  ["03", "Specialist surfaces & sourcing"]
];

const proofPoints = [
  ["Since 1953", "Family expertise"],
  ["15+ markets", "European reach"],
  ["CH + IT", "Commercial & logistics base"]
];

function EnquiryDialog({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    dialogRef.current?.querySelector("input")?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Vertex enquiry — ${data.get("interest")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      `Email: ${data.get("email")}`,
      `Interest: ${data.get("interest")}`,
      "",
      data.get("message") || "Please contact me about samples and specifications."
    ].join("\n");

    window.location.href = `mailto:${siteMeta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div className="launch-dialog-backdrop" onMouseDown={onClose}>
      <section
        className="launch-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="launch-dialog__header">
          <div>
            <p className="launch-kicker">Samples · specifications · sourcing</p>
            <h2 id="enquiry-title">Tell us what you need.</h2>
          </div>
          <button className="launch-dialog__close" type="button" onClick={onClose} aria-label="Close enquiry form">
            ×
          </button>
        </div>

        <form className="launch-form" onSubmit={handleSubmit}>
          <div className="launch-form__row">
            <label>
              <span>Name *</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              <span>Company</span>
              <input name="company" autoComplete="organization" />
            </label>
          </div>
          <label>
            <span>Work email *</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>I am interested in</span>
            <select name="interest" defaultValue="Samples & specifications">
              <option>Samples &amp; specifications</option>
              <option>Product sourcing</option>
              <option>Distribution partnership</option>
              <option>Technical support</option>
            </select>
          </label>
          <label>
            <span>Project or requirement</span>
            <textarea name="message" rows="3" placeholder="Material, application, quantity or timing…" />
          </label>
          <div className="launch-form__submit">
            <p>Submitting opens a prepared message in your email app.</p>
            <button type="submit">Continue in email <span aria-hidden="true">↗</span></button>
          </div>
        </form>
      </section>
    </div>
  );
}

function LaunchPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const materialRef = useRef(null);

  const handleMaterialPointerMove = (event) => {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;
    materialRef.current?.style.setProperty("--pointer-x", `${x.toFixed(2)}px`);
    materialRef.current?.style.setProperty("--pointer-y", `${y.toFixed(2)}px`);
  };

  const resetMaterialPointer = () => {
    materialRef.current?.style.setProperty("--pointer-x", "0px");
    materialRef.current?.style.setProperty("--pointer-y", "0px");
  };

  return (
    <div className="launch-page-v2">
      <PageTitle
        title="Decorative & technical laminates"
        description="Vertex Laminati supports European distributors, fabricators, and specifiers with decorative HPL, compact systems, specialist surfaces, and responsive sourcing."
        path="/"
      />

      <header className="launch-topbar">
        <a className="launch-topbar__brand" href="/" aria-label="Vertex Laminati SA home">
          <BrandLogo />
        </a>
        <div className="launch-topbar__status">
          <span className="launch-topbar__dot" aria-hidden="true" />
          <span>Open for business</span>
        </div>
      </header>

      <main className="launch-stage">
        <section className="launch-content" aria-labelledby="launch-title">
          <p className="launch-kicker">Swiss expertise · European reach</p>
          <h1 id="launch-title">
            <span className="launch-title__line"><span>The right surface.</span></span>
            <span className="launch-title__line"><em>The right solution.</em></span>
          </h1>
          <p className="launch-summary">
            Vertex guides distributors, fabricators and specifiers through decorative and technical laminates—with
            responsive sourcing from Switzerland and Italy.
          </p>

          <div className="launch-cta-row">
            <button className="launch-primary-cta" type="button" onClick={() => setEnquiryOpen(true)}>
              <span className="launch-primary-cta__label">Request samples &amp; specifications</span>
              <span className="launch-primary-cta__icon" aria-hidden="true">↗</span>
            </button>
            <a className="launch-contact-link" href={`tel:${siteMeta.phone.replace(/\s/g, "")}`}>
              <span>Speak to us</span>
              {siteMeta.phone}
            </a>
          </div>

          <ol className="launch-capabilities" aria-label="Vertex Laminati capabilities">
            {capabilities.map(([number, label]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
        </section>

        <aside
          className="launch-material"
          ref={materialRef}
          aria-label="A curated selection of laminate panels and finishes"
          onPointerMove={handleMaterialPointerMove}
          onPointerLeave={resetMaterialPointer}
        >
          <div className="launch-material__media">
            <img src="/brand/vertex-materials-hero.jpg" alt="Layered decorative laminate panels in colour, wood, stone and metallic finishes" />
          </div>
          <div className="launch-material__header">
            <span>Material intelligence</span>
            <span>Europe</span>
          </div>
          <div className="launch-material__caption">
            <span aria-hidden="true">V</span>
            <p className="launch-material__words" aria-label="Colour. Texture. Performance.">
              <span aria-hidden="true">Colour.</span>
              <span aria-hidden="true">Texture.</span>
              <span aria-hidden="true">Performance.</span>
            </p>
          </div>
        </aside>
      </main>

      <footer className="launch-proof">
        <div className="launch-proof__points">
          {proofPoints.map(([value, label]) => (
            <div className="launch-proof__item" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="launch-proof__certs" aria-label="Product documentation available">
          <span>Product documentation</span>
          <strong>CE · EPD · GREENGUARD · M1 · DNV</strong>
        </div>
        <div className="launch-proof__site-note">
          <span>Full website coming soon</span>
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
        </div>
      </footer>

      <EnquiryDialog open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}

export default LaunchPage;

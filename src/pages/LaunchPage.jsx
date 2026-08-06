import BrandLogo from "../components/BrandLogo";
import PageTitle from "../components/PageTitle";
import { images, siteMeta } from "../data/siteContent";
import "../styles/launch.css";

const launchHighlights = [
  ["70+ years", "Laminate-market knowledge"],
  ["15+ markets", "European reach"],
  ["CH + IT", "Commercial and logistics base"]
];

function LaunchPage() {
  return (
    <div className="launch-page">
      <PageTitle
        title="A new digital home is taking shape"
        description="Vertex Laminati SA is a Swiss distributor of decorative, technical, and compact laminates, supporting European distributors, fabricators, and industrial converters."
        path="/"
      />

      <header className="launch-header">
        <a className="launch-header__brand" href="/" aria-label="Vertex Laminati SA home">
          <BrandLogo />
        </a>
        <div className="launch-status" aria-label="New website coming soon">
          <span className="launch-status__dot" aria-hidden="true" />
          <span className="launch-status__long">New website coming soon</span>
          <span className="launch-status__short">Launching soon</span>
        </div>
      </header>

      <main className="launch-main">
        <section className="launch-intro" aria-labelledby="launch-title">
          <p className="launch-eyebrow">Swiss expertise · European reach</p>
          <h1 id="launch-title">
            A new surface for <em>possibility.</em>
          </h1>
          <p className="launch-lead">
            Our new digital home is taking shape. Vertex Laminati is already open for business—helping distributors,
            fabricators, and specification teams turn laminate possibilities into commercially sound solutions.
          </p>

          <div className="launch-actions">
            <a className="launch-button launch-button--primary" href={`mailto:${siteMeta.email}`}>
              Start a conversation
            </a>
            <a className="launch-button launch-button--secondary" href={`tel:${siteMeta.phone.replace(/\s/g, "")}`}>
              {siteMeta.phone}
            </a>
          </div>

          <dl className="launch-highlights" aria-label="Vertex Laminati highlights">
            {launchHighlights.map(([value, label]) => (
              <div key={value} className="launch-highlight">
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <aside
          className="launch-visual"
          style={{ backgroundImage: `url(${images.HERO_MAIN})` }}
          aria-label="Contemporary architecture featuring high-performance decorative surfaces"
        >
          <div className="launch-visual__shade" aria-hidden="true" />
          <div className="launch-visual__topline">
            <span>Decorative &amp; technical laminates</span>
            <span>Europe</span>
          </div>
          <div className="launch-visual__statement">
            <span className="launch-visual__mark" aria-hidden="true">
              V
            </span>
            <p>Co-creator of possibilities.</p>
          </div>
        </aside>
      </main>

      <footer className="launch-footer">
        <div>
          <strong>{siteMeta.legalName}</strong>
          <span>{siteMeta.office}</span>
        </div>
        <div className="launch-footer__contact">
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          <span aria-hidden="true">·</span>
          <span>Turate logistics hub, Italy</span>
        </div>
        <span>© 2026 {siteMeta.legalName}</span>
      </footer>
    </div>
  );
}

export default LaunchPage;

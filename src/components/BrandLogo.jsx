function BrandLogo({ compact = false }) {
  return (
    <span className={`brand-logo${compact ? " brand-logo--compact" : ""}`} aria-label="Vertex Laminati SA">
      <svg className="brand-logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <path className="brand-logo__mark-accent" d="M10 20 32 44 54 20 50 17 32 37 14 17Z" />
        <path className="brand-logo__mark-mid" d="M10 28 32 52 54 28 50 25 32 45 14 25Z" />
        <path className="brand-logo__mark-base" d="M10 36 32 60 54 36 50 33 32 53 14 33Z" />
      </svg>
      <span className="brand-logo__type">
        <span className="brand-logo__name">VERTEX</span>
        <span className="brand-logo__sub">LAMINATI SA</span>
      </span>
    </span>
  );
}

export default BrandLogo;

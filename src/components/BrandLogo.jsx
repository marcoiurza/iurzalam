function BrandLogo({ compact = false }) {
  return (
    <span className={`brand-logo${compact ? " brand-logo--compact" : ""}`} aria-label="Vertex Laminati SA">
      <svg className="brand-logo__mark" viewBox="0 0 84 72" aria-hidden="true">
        <path d="M4 12 34 39l15-11L27 6 4 12Z" fill="#1D2A52" />
        <path d="M27 6 49 28l31-22H51L27 6Z" fill="#D8AE3B" />
        <path d="M11 29 37 50l16-11-23-18-19 8Z" fill="#FFFFFF" />
        <path d="M7 45 35 69l41-35-18 3-23 19L7 45Z" fill="#1D2A52" />
        <path d="M49 42 57 45l10-8-13 1-5 7Z" fill="#43AFC0" />
      </svg>
      <span className="brand-logo__type">
        <span className="brand-logo__name">VERTEX</span>
        <span className="brand-logo__sub">LAMINATI SA</span>
      </span>
    </span>
  );
}

export default BrandLogo;

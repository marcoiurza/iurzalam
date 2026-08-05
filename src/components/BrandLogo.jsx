function BrandLogo({ compact = false, onDark = false }) {
  const src = onDark ? "/brand/vertex-lockup-white.svg" : "/brand/vertex-lockup-deep-blue.svg";
  return (
    <span
      className={`brand-logo${compact ? " brand-logo--compact" : ""}`}
      aria-label="Vertex Laminati SA"
    >
      <img className="brand-logo__img" src={src} alt="Vertex Laminati SA" width="1184" height="380" />
    </span>
  );
}

export default BrandLogo;

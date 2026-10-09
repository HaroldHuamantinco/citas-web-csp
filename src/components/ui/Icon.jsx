export default function Icon({ name, size = 24, filled = false, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-rounded shrink-0 select-none ${className}`}
      style={{ fontSize: size, fontVariationSettings: `'FILL' ${filled ? 1 : 0}` }}
    >
      {name}
    </span>
  )
}

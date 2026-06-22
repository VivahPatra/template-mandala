interface Props {
  className?: string
}

export default function LotusDivider({ className = '' }: Props) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* Left rule */}
      <svg viewBox="0 0 120 8" width="120" height="8" aria-hidden>
        <line x1="0" y1="4" x2="105" y2="4" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.4" />
        <line x1="0" y1="6.5" x2="105" y2="6.5" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.2" />
        <rect x="108" y="1.5" width="5" height="5" fill="var(--color-accent)" opacity="0.6" transform="rotate(45 110.5 4)" />
      </svg>

      <svg viewBox="0 0 28 28" width="28" height="28" className="mandala-spin" aria-hidden style={{ opacity: 0.6 }}>
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <ellipse key={i} cx="14" cy="14" rx="2" ry="6" fill="var(--color-accent)" opacity="0.6"
            transform={`rotate(${deg} 14 14) translate(0,-6)`} />
        ))}
        <circle cx="14" cy="14" r="3" fill="var(--color-accent)" opacity="0.8" />
      </svg>

      {/* Right rule */}
      <svg viewBox="0 0 120 8" width="120" height="8" aria-hidden>
        <rect x="0" y="1.5" width="5" height="5" fill="var(--color-accent)" opacity="0.6" transform="rotate(45 2.5 4)" />
        <line x1="15" y1="4" x2="120" y2="4" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.4" />
        <line x1="15" y1="6.5" x2="120" y2="6.5" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.2" />
      </svg>
    </div>
  )
}

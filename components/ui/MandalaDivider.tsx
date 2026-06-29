'use client'

export default function MandalaDivider() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[5]" aria-hidden>
      <img src="/assets/mandala.webp" alt="" className="mandala-spin"
        style={{ width: 300, height: 'auto', opacity: 0.7 }} />
    </div>
  )
}

'use client'

export default function MandalaDivider2() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[5]" aria-hidden>
      <img src="/assets/wheel.webp" alt="" className="mandala-spin-reverse"
        style={{ width: 300, height: 'auto', opacity: 0.5 }} />
    </div>
  )
}

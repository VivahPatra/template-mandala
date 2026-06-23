'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { formatShortDate } from '@/lib/utils'

function MandalaRing({ size, petals, color, opacity, className }: { size: number; petals: number; color: string; opacity: number; className?: string }) {
  const r = size / 2
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className={className} aria-hidden>
      <circle cx={r} cy={r} r={r - 4} fill="none" stroke={color} strokeWidth="0.5" opacity={opacity * 0.4} strokeDasharray="3 5" />
      {Array.from({ length: petals }, (_, i) => {
        const deg = (i / petals) * 360
        return (
          <ellipse key={i} cx={r} cy={r} rx={r * 0.06} ry={r * 0.22}
            fill={color} opacity={opacity}
            transform={`rotate(${deg} ${r} ${r}) translate(0,${-r * 0.65})`} />
        )
      })}
    </svg>
  )
}

export default function HeroSection() {
  const weddingData = useWeddingData()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const mandalaScale = useTransform(scrollYProgress, [0, 1], [1, 1.3])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center" style={{ overflowX: 'clip' }}>

      {/* Deep gradient bg + wheel */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(34,20,53,1) 0%, var(--color-bg) 100%)',
      }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/assets/wheel.png" alt="" className="mandala-spin" style={{ width: '80%', maxWidth: 600, height: 'auto', opacity: 0.08 }} />
      </div>

      {/* Rotating mandala layers */}
      <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ scale: mandalaScale }} aria-hidden>
        <div className="absolute mandala-spin" style={{ opacity: 0.32 }}>
          <img src="/assets/wheel.png" alt="" style={{ width: 700, height: 'auto' }} />
        </div>
        <div className="absolute mandala-spin-reverse" style={{ opacity: 0.38 }}>
          <img src="/assets/mandala.png" alt="" style={{ width: 500, height: 'auto' }} />
        </div>
        <div className="absolute mandala-spin" style={{ opacity: 0.1 }}>
          <MandalaRing size={320} petals={12} color="var(--color-accent)" opacity={0.5} />
        </div>
        <div className="absolute mandala-spin-reverse" style={{ opacity: 0.55 }}>
          <MandalaRing size={180} petals={8} color="var(--color-accent3)" opacity={0.4} />
        </div>
      </motion.div>

      {/* Jewel glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute w-80 h-80 rounded-full blur-[140px] float-slow"
          style={{ background: 'rgba(139,58,139,0.08)', top: '15%', left: '10%' }} />
        <div className="absolute w-72 h-72 rounded-full blur-[120px] float-med"
          style={{ background: 'rgba(212,168,48,0.06)', bottom: '20%', right: '10%' }} />
        <div className="absolute w-60 h-60 rounded-full blur-[100px]"
          style={{ background: 'rgba(42,138,106,0.05)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      </div>

      {/* Mandala at top and bottom — half visible */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden>
        <img src="/assets/mandala.png" alt="" className="mandala-spin" style={{ width: 400, height: 'auto', opacity: 0.55 }} />
      </div>
      {/* man2 left and right — half visible */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden>
        <img src="/assets/man2.png" alt="" className="mandala-spin" style={{ width: 400, height: 'auto', opacity: 0.2 }} />
      </div>
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden>
        <img src="/assets/man2.png" alt="" className="mandala-spin-reverse" style={{ width: 400, height: 'auto', opacity: 0.2 }} />
      </div>

      {/* Sacred geometry border */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none z-20" aria-hidden>
        <div className="absolute inset-0" style={{ border: '1px solid rgba(212,168,48,0.2)' }} />
        <div className="absolute inset-2" style={{ border: '0.5px solid rgba(212,168,48,0.1)' }} />
      </div>

      {/* Text */}
      <motion.div
        className="relative z-10 text-center px-8 py-10 rounded-3xl"
        style={{ y: textY, opacity, background: 'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(14,8,24,0.8) 0%, rgba(14,8,24,0.4) 65%, transparent 100%)' }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-12" />

        <motion.p variants={fadeUp}
          className="font-sans text-[10px] tracking-[0.5em] uppercase mb-8"
          style={{ color: 'var(--color-accent)', textShadow: '0 0 12px rgba(212,168,48,0.4)' }}>
          ✦ &nbsp; Sacred Union &nbsp; ✦
        </motion.p>

        <motion.div variants={fadeUp} className="mb-4">
          <h1 className="font-display leading-none shimmer-text" style={{ fontSize: 'clamp(2.8rem, 10vw, 7rem)', letterSpacing: '0.04em', textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(212,168,48,0.2)' }}>
            {weddingData.groomName}
          </h1>
          <div className="flex items-center justify-center gap-6 my-3">
            <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent))' }} />
            <span className="font-display text-2xl glow-pulse" style={{ color: 'var(--color-accent)' }}>&amp;</span>
            <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent))' }} />
          </div>
          <h1 className="font-display leading-none shimmer-text" style={{ fontSize: 'clamp(2.8rem, 10vw, 7rem)', letterSpacing: '0.04em', textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(212,168,48,0.2)' }}>
            {weddingData.brideName}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mt-8 mb-4">
          <div className="h-px w-10" style={{ background: 'var(--color-accent)', opacity: 0.4 }} />
          <span className="font-sans text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
            {formatShortDate(weddingData.weddingDate)}
          </span>
          <div className="h-px w-10" style={{ background: 'var(--color-accent)', opacity: 0.4 }} />
        </motion.div>

        <motion.p variants={fadeUp}
          className="font-serif italic text-sm tracking-wider"
          style={{ color: 'var(--color-text)', opacity: 0.9, textShadow: '0 0 10px rgba(212,168,48,0.3)' }}>
          {weddingData.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-14 flex flex-col items-center gap-2" style={{ opacity: 0.3 }}>
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase" style={{ color: 'var(--color-accent)' }}>Scroll</span>
          <motion.div className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

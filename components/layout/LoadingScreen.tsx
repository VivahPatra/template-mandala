'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    let frame: number
    const start = performance.now()
    const duration = 2500
    const tick = (now: number) => {
      const elapsed = now - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setPct(next)
      if (next < 100) { frame = requestAnimationFrame(tick) }
      else { onComplete() }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Lotus mandala */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-8">
        {/* Outer ring CW — wheel.webp */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <img src="/assets/wheel.webp" alt="" style={{ width: 160, height: 160, opacity: 0.7 }} />
        </motion.div>

        {/* Middle ring CCW — mandala.webp */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ width: 110, height: 110 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <img src="/assets/mandala.webp" alt="" style={{ width: 110, height: 110, opacity: 0.6 }} />
        </motion.div>

        {/* Inner — man2.webp */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ width: 64, height: 64 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          <img src="/assets/man2.webp" alt="" style={{ width: 64, height: 64, opacity: 0.5 }} />
        </motion.div>

      </div>

      {/* Line draw animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-px mb-6"
        style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }}
      />

      <motion.p
        className="font-display text-xl tracking-widest"
        style={{ color: 'var(--color-accent)', opacity: 0.7 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ॐ
      </motion.p>
  
      {/* Percentage */}
      <motion.p
        className="font-sans text-xs tracking-[0.3em] mt-4"
        style={{ color: 'var(--color-accent)', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.3 }}
      >
        {pct}%
      </motion.p>
  </motion.div>
  )
}

'use client'
import { motion } from 'framer-motion'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Lotus mandala */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-8">
        {/* Outer ring CW — wheel.png */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <img src="/assets/wheel.png" alt="" style={{ width: 160, height: 160, opacity: 0.7 }} />
        </motion.div>

        {/* Middle ring CCW — mandala.png */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ width: 110, height: 110 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <img src="/assets/mandala.png" alt="" style={{ width: 110, height: 110, opacity: 0.6 }} />
        </motion.div>

        {/* Inner — man2.png */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ width: 64, height: 64 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          <img src="/assets/man2.png" alt="" style={{ width: 64, height: 64, opacity: 0.5 }} />
        </motion.div>

        {/* Center lotus emoji */}
        <motion.div
          className="relative z-10 text-4xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 16px var(--color-glow-strong))' }}
        >
          <span style={{ fontSize: 48, color: 'var(--color-accent)' }}>ॐ</span>
        </motion.div>
      </div>

      {/* Line draw animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={onComplete}
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
    </motion.div>
  )
}

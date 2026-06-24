'use client'
import { useEffect, useState } from 'react'
import MandalaDivider from '@/components/ui/MandalaDivider'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { motion } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { useEditMode } from '@/context/EditModeContext'
import EditableText from '@/components/ui/EditableText'
import { fadeUp, staggerContainer } from '@/lib/animations'
import LotusDivider from '@/components/ui/LotusDivider'

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function CountdownSection() {
  const weddingDataCtx = useWeddingData()
  const { data: editData, isEditing } = useEditMode()
  const weddingData = isEditing ? editData : weddingDataCtx
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(weddingData.weddingDate))
    const id = setInterval(() => setTime(getTimeLeft(weddingData.weddingDate)), 1000)
    return () => clearInterval(id)
  }, [weddingData.weddingDate])

  const units = [
    { label: 'Days',    value: time?.days ?? 0 },
    { label: 'Hours',   value: time?.hours ?? 0 },
    { label: 'Minutes', value: time?.minutes ?? 0 },
    { label: 'Seconds', value: time?.seconds ?? 0 },
  ]

  return (
    <section id="countdown" className="pt-44 pb-28 px-6 relative " style={{ background: 'var(--color-bg)' }}>
      <MandalaDivider />
      <FlowerOverlay />
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Counting Down &nbsp; ✦
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Until We Are One
          </motion.h2>
          <LotusDivider className="mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {units.map(({ label, value }, i) => (
            <motion.div
              key={label}
              className="relative rounded-2xl  text-center py-8 px-4"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 24px var(--color-glow)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Gold glow corners */}
              <div className="absolute top-0 left-0 w-8 h-8 opacity-40" style={{ background: 'radial-gradient(circle at top left, var(--color-accent), transparent)' }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-40" style={{ background: 'radial-gradient(circle at bottom right, var(--color-accent), transparent)' }} />

              <motion.p
                className="shimmer-text font-display"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}
                key={value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(value).padStart(2, '0')}
              </motion.p>
              <p className="font-sans text-xs tracking-widest uppercase mt-2" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
        >
          <EditableText tag="p" field="tagline" className="font-serif italic text-base" style={{ color: 'var(--color-text)' }}>
            {weddingData.tagline}
          </EditableText>
        </motion.div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import MandalaDivider from '@/components/ui/MandalaDivider'
import { useWeddingData } from '@/context/WeddingDataContext'
import { useEditMode } from '@/context/EditModeContext'
import EditableText from '@/components/ui/EditableText'
import LotusDivider from '@/components/ui/LotusDivider'
import FlowerOverlay from '@/components/ui/FlowerOverlay'

export default function FooterSection() {
  const weddingDataCtx = useWeddingData()
  const { data: editData, isEditing } = useEditMode()
  const weddingData = isEditing ? editData : weddingDataCtx
  return (
    <footer id="footer" className="pt-44 pb-20 px-6 text-center relative " style={{ background: 'var(--color-surface2)' }}>
      <MandalaDivider />
      <FlowerOverlay />
      <div className="max-w-2xl mx-auto">
        <LotusDivider className="mb-10" />

        <p className="shimmer-text font-display mb-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          <EditableText field="brideName">{weddingData.brideName}</EditableText> &amp; <EditableText field="groomName">{weddingData.groomName}</EditableText>
        </p>
        <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
          20 December 2026
        </p>

        <EditableText tag="p" field="tagline" className="font-serif italic text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
          {weddingData.tagline}
        </EditableText>

        <EditableText tag="p" field="hashtag" className="font-sans text-xs tracking-widest" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>
          {weddingData.hashtag}
        </EditableText>

        <LotusDivider className="mt-10" />

        <p className="font-sans text-xs mt-8 opacity-30" style={{ color: 'var(--color-muted)' }}>
          Made with love · Sacred Geometry
        </p>
      </div>
    </footer>
  )
}

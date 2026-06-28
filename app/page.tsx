'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { WeddingDataProvider } from '@/context/WeddingDataContext'
import CustomCursor from '@/components/layout/CustomCursor'
import LoadingScreen from '@/components/layout/LoadingScreen'
import FloatingFABs from '@/components/layout/FloatingFABs'
import HeroSection from '@/components/sections/HeroSection'
import InvitationSection from '@/components/sections/InvitationSection'
import EventsSection from '@/components/sections/EventsSection'
import CoupleStory from '@/components/sections/CoupleStory'
import GallerySection from '@/components/sections/GallerySection'
import VenueSection from '@/components/sections/VenueSection'
import RSVPSection from '@/components/sections/RSVPSection'
import CountdownSection from '@/components/sections/CountdownSection'
import FooterSection from '@/components/sections/FooterSection'
import SectionGate from '@/components/ui/SectionGate'

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <WeddingDataProvider>
      <CustomCursor />
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loading" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      {loaded && (
        <>
          <FloatingFABs />
          <div className="relative overflow-x-hidden">
            <main>
              <SectionGate name="hero"><HeroSection /></SectionGate>
              <SectionGate name="invitation"><InvitationSection /></SectionGate>
              <SectionGate name="coupleStory"><CoupleStory /></SectionGate>
              <SectionGate name="gallery"><GallerySection /></SectionGate>
              <SectionGate name="events"><EventsSection /></SectionGate>
              <SectionGate name="venue"><VenueSection /></SectionGate>
              <SectionGate name="rsvp"><RSVPSection /></SectionGate>
              <SectionGate name="countdown"><CountdownSection /></SectionGate>
              <SectionGate name="footer"><FooterSection /></SectionGate>
            </main>
          </div>
        </>
      )}
    </WeddingDataProvider>
  )
}

'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { weddingData as defaultData } from '@/data/wedding-data'
import type { WeddingConfig } from '@/types/wedding.types'

const WeddingDataContext = createContext<WeddingConfig>(defaultData)

export function WeddingDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WeddingConfig>(defaultData)

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type !== 'VIVAHPATRA_UPDATE') return
      const d = e.data.data
      if (!d) return

      setData((prev) => ({
        ...prev,
        ...(d.groomName !== undefined && { groomName: d.groomName }),
        ...(d.brideName !== undefined && { brideName: d.brideName }),
        ...(d.groomParents !== undefined && { groomParents: d.groomParents }),
        ...(d.brideParents !== undefined && { brideParents: d.brideParents }),
        ...(d.weddingDate !== undefined && { weddingDate: new Date(d.weddingDate) }),
        ...(d.hashtag !== undefined && { hashtag: d.hashtag }),
        ...(d.tagline !== undefined && { tagline: d.tagline }),
        ...(d.invitationText !== undefined && { invitationText: d.invitationText }),
        ...(d.heroImage !== undefined && { heroImage: d.heroImage }),
        ...(d.galleryImages !== undefined && { galleryImages: d.galleryImages }),
        ...(d.events !== undefined && { events: d.events }),
        ...(d.coupleStory !== undefined && { coupleStory: d.coupleStory }),
        ...(d.familyBride !== undefined && { familyBride: d.familyBride }),
        ...(d.familyGroom !== undefined && { familyGroom: d.familyGroom }),
        ...((d.venueName !== undefined || d.venueAddress !== undefined || d.venueMapUrl !== undefined) && {
          venue: {
            name: d.venueName ?? prev.venue.name,
            address: d.venueAddress ?? prev.venue.address,
            mapUrl: d.venueMapUrl ?? prev.venue.mapUrl,
          },
        }),
        ...((d.rsvpPhone !== undefined || d.rsvpMessage !== undefined || d.rsvpDeadline !== undefined) && {
          rsvp: {
            whatsappNumber: d.rsvpPhone ?? prev.rsvp.whatsappNumber,
            message: d.rsvpMessage ?? prev.rsvp.message,
            deadline: d.rsvpDeadline ?? prev.rsvp.deadline,
          },
        }),
        ...(d.instagram !== undefined && { socialLinks: { instagram: d.instagram } }),
      }))
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <WeddingDataContext.Provider value={data}>
      {children}
    </WeddingDataContext.Provider>
  )
}

export function useWeddingData() {
  return useContext(WeddingDataContext)
}

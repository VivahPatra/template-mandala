import { WeddingConfig } from '@/types/wedding.types'

export const weddingData: WeddingConfig = {
  brideName: 'Meera',
  groomName: 'Dev',
  groomParents: 'Mr. Suresh & Mrs. Kamala Sharma',
  brideParents: 'Mr. Ramesh & Mrs. Savita Patel',
  weddingDate: new Date('2027-01-20T09:00:00'),
  hashtag: '#DevMeeraForever',
  tagline: 'Where sacred circles meet eternal love',
  invitationText:
    'With divine blessings and the love of our families, Meera and Dev joyfully invite you to witness the union of two souls. Your presence will complete the sacred circle of our celebration.',
  heroImage: '/assets/palace.webp',

  backgroundMusic: 'https://vivahpatra.co/music/saathiya.mp3',
  events: [
    { id: 'engagement', name: 'Engagement', emoji: '💍', date: 'January 16, 2027', time: '6:00 PM', venue: 'The Royal Garden', venueAddress: 'MG Road, Jaipur', image: '/assets/events/engagement.webp', color: '#d4a830', description: 'Rings, promises and sacred beginnings.' },
    { id: 'mehendi', name: 'Mehendi', emoji: '🌿', date: 'January 18, 2027', time: '4:00 PM', venue: 'Haveli Courtyard', venueAddress: 'Old City, Jaipur', image: '/assets/events/mehendi.webp', color: '#2a8a6a', description: 'Intricate patterns, laughter and music.' },
    { id: 'sangeet', name: 'Sangeet', emoji: '🎶', date: 'January 18, 2027', time: '8:00 PM', venue: 'The Grand Palace', venueAddress: 'Amber Fort Road, Jaipur', image: '/assets/events/sangeet.webp', color: '#8b3a8b', description: 'Dance under the stars in the Pink City.' },
    { id: 'haldi', name: 'Haldi', emoji: '✨', date: 'January 19, 2027', time: '10:00 AM', venue: 'Family Courtyard', venueAddress: 'C-Scheme, Jaipur', image: '/assets/events/haldi.webp', color: '#d4a830', description: 'Golden blessings for a golden future.' },
    { id: 'wedding', name: 'Wedding', emoji: '🔥', date: 'January 20, 2027', time: '9:00 AM', venue: 'Lakshmi Narayan Mandir', venueAddress: 'JLN Marg, Jaipur', image: '/assets/events/wedding.webp', color: '#c04050', description: 'Seven circles, one eternal bond.' },
    { id: 'reception', name: 'Reception', emoji: '🥂', date: 'January 20, 2027', time: '7:00 PM', venue: 'The Grand Palace', venueAddress: 'Amber Fort Road, Jaipur', image: '/assets/events/reception.webp', color: '#8b3a8b', description: 'A night of celebration and joy.' },
  ],

  galleryImages: [
    { src: '/assets/gallery/gallery-1.jpg', alt: 'Couple photo 1', span: 'wide' },
    { src: '/assets/gallery/gallery-2.jpg', alt: 'Couple photo 2', span: 'tall' },
    { src: '/assets/gallery/gallery-3.jpg', alt: 'Couple photo 3', span: 'normal' },
    { src: '/assets/gallery/gallery-4.jpg', alt: 'Couple photo 4', span: 'normal' },
    { src: '/assets/gallery/gallery-5.jpg', alt: 'Couple photo 5', span: 'wide' },
    { src: '/assets/gallery/gallery-6.jpg', alt: 'Couple photo 6', span: 'normal' },
  ],

  coupleStory: [
    { date: 'April 2020', title: 'Sacred Meeting', description: 'At a temple festival in Pushkar, their eyes met across the mandala rangoli. The universe had spoken.', icon: '✨', image: '/assets/story/story-1.jpg' },
    { date: 'October 2021', title: 'First Date', description: 'A walk through Jantar Mantar, tracing sacred geometry in the stars. They discovered they orbit the same center.', icon: '⭐', image: '/assets/story/story-2.jpg' },
    { date: 'March 2025', title: 'The Proposal', description: 'In the mirror palace of Amer Fort, surrounded by infinite reflections, he asked the one question. She said yes a thousand times.', icon: '💍', image: '/assets/story/story-3.jpg' },
    { date: 'January 2027', title: 'The Sacred Circle', description: 'Seven pheras around the sacred fire. The mandala of their love story comes full circle.', icon: '🔥', image: '/assets/story/story-4.jpg' },
  ],

  familyBride: [
    { name: 'Ramesh Patel', relation: 'Father', photo: '/assets/family/bf.jpg', side: 'bride' },
    { name: 'Savita Patel', relation: 'Mother', photo: '/assets/family/bm.jpg', side: 'bride' },
    { name: 'Ankit Patel', relation: 'Brother', photo: '/assets/family/bb.jpg', side: 'bride' },
  ],

  familyGroom: [
    { name: 'Suresh Sharma', relation: 'Father', photo: '/assets/family/gf.jpg', side: 'groom' },
    { name: 'Kamala Sharma', relation: 'Mother', photo: '/assets/family/gm.jpg', side: 'groom' },
    { name: 'Priya Sharma', relation: 'Sister', photo: '/assets/family/gs.jpg', side: 'groom' },
  ],

  venue: {
    name: 'Lakshmi Narayan Mandir',
    address: 'JLN Marg, C-Scheme, Jaipur — 302001',
    mapUrl: 'https://maps.google.com',
  },

  rsvp: {
    whatsappNumber: '919876543210',
    message: 'Namaste! I would like to RSVP for the wedding of Dev & Meera on 20th January 2027.',
    deadline: 'January 5, 2027',
  },

  socialLinks: { instagram: 'https://instagram.com' },
}

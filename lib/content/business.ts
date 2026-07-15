export const business = {
  name: 'OCP Pest Control',
  shortName: 'OCP',
  phone: {
    display: '(866) 755-1284',
    href: 'tel:+18667551284',
    tracking: 'tel:+18667551284',
  },
  address: {
    street: '3332 S Hope St',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90007',
    full: '3332 S Hope St, Los Angeles, CA 90007',
  },
  license: '[NEEDS CLIENT INPUT: license number]',
  yearsInBusiness: '[NEEDS CLIENT INPUT: years in business]',
  insurance: '[NEEDS CLIENT INPUT: insurance status]',
  googleRating: null, // [NEEDS CLIENT INPUT: Google rating + review count]
  serviceArea: 'Los Angeles County and surrounding areas',
  hours: '[NEEDS CLIENT INPUT: hours of operation]',
  brandColors: '[NEEDS CLIENT INPUT: brand colors/logo]',
  geo: { lat: 34.0265, lng: -118.2748 },
  url: 'https://ocppestcontrol.com',
} as const

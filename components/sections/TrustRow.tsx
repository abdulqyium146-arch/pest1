import { business } from '@/lib/content/business'

// ─── Sub-components ───────────────────────────────────────────────────────────

function TrustItem({
  icon,
  label,
  value,
  note,
}: {
  icon: React.ReactNode
  label: string
  value: string
  note?: string
}) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      {/* neutral-950 for decorative icons — accent is CTA-only per design system */}
      <div className="text-neutral-950 mb-2" aria-hidden="true">
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1">{label}</p>
      <p className="text-xl font-bold text-neutral-950 font-display">{value}</p>
      {note && <p className="text-xs text-neutral-500 mt-1">{note}</p>}
    </div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08z" clipRule="evenodd" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.952-5.391 3.952-9.827A8.25 8.25 0 006 11.5c0 4.436 2.008 7.748 3.952 9.827a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM11.5 8.25a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

// Server Component — purely presentational trust signal strip
export function TrustRow() {
  return (
    <section
      className="bg-white border-b border-neutral-100"
      aria-label="Trust signals"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-neutral-100">
          {/* Phone — visually dominant, accent color is allowed on phone link */}
          <div className="col-span-2 md:col-span-1">
            <a
              href={business.phone.tracking}
              className="flex flex-col items-center text-center px-4 py-6 group transition-colors duration-150"
              aria-label={`Call us at ${business.phone.display}`}
            >
              <div className="text-accent mb-2 group-hover:scale-110 transition-transform duration-150" aria-hidden="true">
                <PhoneIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1">Call Anytime</p>
              <p className="text-2xl font-bold text-accent font-display">{business.phone.display}</p>
            </a>
          </div>

          {/* Licensed & Insured — placeholder until client provides license */}
          <TrustItem
            icon={<ShieldIcon />}
            label="Licensed & Insured"
            value="Verified Coverage"
            note={business.license !== '[NEEDS CLIENT INPUT: license number]' ? `License #${business.license}` : 'Details available on request'}
          />

          {/* Google Rating — placeholder token */}
          <TrustItem
            icon={<StarIcon />}
            label="Google Rating"
            value={business.googleRating !== null ? String(business.googleRating) : '★★★★★'}
            note="[NEEDS CLIENT INPUT: Google rating + review count]"
          />

          {/* Location */}
          <TrustItem
            icon={<MapPinIcon />}
            label="LA-Based Experts"
            value="South LA"
            note={`Serving ${business.address.city} & surroundings`}
          />
        </div>
      </div>
    </section>
  )
}

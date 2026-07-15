// Server Component — renders JSON-LD structured data as an inline script tag
// dangerouslySetInnerHTML is safe here: data comes from our own typed content files, not user input
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

import React from 'react'

type SectionProps = {
  id: string
  labelledBy: string
  children: React.ReactNode
}

// scroll-mt keeps the section's top below the sticky navigation bar.
export const Section = ({ id, labelledBy, children }: SectionProps): React.JSX.Element => (
  <section
    id={id}
    className="mx-auto w-full max-w-page scroll-mt-15 px-5 sm:scroll-mt-16 py-12"
    aria-labelledby={labelledBy}
  >
    {children}
  </section>
)

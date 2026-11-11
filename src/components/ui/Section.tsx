import React from 'react'

type SectionProps = {
  id: string
  // The id of the heading that names the section, so it shows up as a region for screen readers.
  labelledBy: string
  children: React.ReactNode
}

// A page section, centered at the page width. scroll-mt keeps its top below the sticky navigation bar.
const Section = ({ id, labelledBy, children }: SectionProps): React.JSX.Element => (
  <section id={id} className="mx-auto w-full max-w-page scroll-mt-15 px-5 py-12" aria-labelledby={labelledBy}>
    {children}
  </section>
)

export default Section

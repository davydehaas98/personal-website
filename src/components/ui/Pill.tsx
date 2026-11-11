import React from 'react'

// A round link to another site (contact links, Credly) that gets a green border and grows a little on hover.
// It is a group, so icons inside can react to the hover too.
const Pill = ({ href, children }: { href: string, children: React.ReactNode }): React.JSX.Element => (
  <a
    className="group inline-flex items-center gap-2.5 rounded-full border-2 border-line py-2.5 pr-5.5 pl-3 font-semibold text-ink transition duration-200 hover:scale-108 hover:border-brand focus-visible:scale-108 focus-visible:border-brand"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default Pill

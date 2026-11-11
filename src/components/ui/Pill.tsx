import React from 'react'

import { ExternalLink } from './ExternalLink'

export const Pill = ({ href, children }: { href: string; children: React.ReactNode }): React.JSX.Element => (
  <ExternalLink
    className="group inline-flex items-center gap-2.5 rounded-full border-2 border-line py-2.5 pr-5.5 pl-3 font-semibold text-ink transition duration-200 hover:scale-108 hover:border-brand focus-visible:scale-108 focus-visible:border-brand"
    href={href}
  >
    {children}
  </ExternalLink>
)

import React from 'react'

import { ExternalLink } from './ExternalLink'

// The border grows by moving its edges out instead of a scale transform, like Bubble.
export const Pill = ({ href, children }: { href: string; children: React.ReactNode }): React.JSX.Element => (
  <ExternalLink
    className="group relative inline-flex rounded-full py-3 pr-6 pl-3.5 font-semibold text-ink before:absolute before:inset-0 before:rounded-full before:border-2 before:border-line before:transition-[inset,border-color] before:duration-200 hover:before:-inset-[4%] hover:before:border-brand focus-visible:before:-inset-[4%] focus-visible:before:border-brand"
    href={href}
  >
    <span className="inline-flex items-center gap-2.5 transition-[scale] duration-200 group-hover:scale-108 group-focus-visible:scale-108">
      {children}
    </span>
  </ExternalLink>
)

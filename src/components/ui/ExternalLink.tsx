import React from 'react'

// A link to another site, opened in a new tab without giving that site access to this page.
export const ExternalLink = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.JSX.Element => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

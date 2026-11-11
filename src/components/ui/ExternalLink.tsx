import React from 'react'

export const ExternalLink = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.JSX.Element => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

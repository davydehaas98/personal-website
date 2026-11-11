import React from 'react'

// A round bubble (project logos, Credly badges) that gets a green border and grows a little when the surrounding
// link (a "group") is hovered or focused. Size and position come from className.
export const Bubble = ({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}): React.JSX.Element => (
  <span
    className={`grid place-items-center rounded-full border-2 border-line bg-surface transition duration-200 group-hover:scale-108 group-hover:border-brand group-focus-visible:scale-108 group-focus-visible:border-brand ${className}`}
    aria-hidden="true"
  >
    {children}
  </span>
)

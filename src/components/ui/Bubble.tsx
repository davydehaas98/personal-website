import React from 'react'

// Reacts to the surrounding `group`: hovered, focused, or containing a focused link.
export const Bubble = ({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}): React.JSX.Element => (
  <span
    className={`grid place-items-center rounded-full border-2 border-line bg-surface transition duration-200 group-hover:scale-108 group-hover:border-brand group-focus-visible:scale-108 group-focus-visible:border-brand group-has-[a:focus-visible]:scale-108 group-has-[a:focus-visible]:border-brand ${className}`}
    aria-hidden="true"
  >
    {children}
  </span>
)

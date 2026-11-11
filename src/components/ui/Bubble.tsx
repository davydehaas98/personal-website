import React from 'react'

// Grows when the surrounding `group` is hovered, focused or contains a focused link. The circle grows by moving its
// edges out (inset) instead of a scale transform: Firefox flashes hard lines at the edge of a bordered circle when a
// scale transition ends. Only the content scales. className must position the bubble (relative or absolute).
export const Bubble = ({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}): React.JSX.Element => (
  <span className={`grid place-items-center ${className}`} aria-hidden="true">
    <span className="absolute inset-0 rounded-full border-2 border-line bg-surface transition-[inset,border-color] duration-200 group-hover:-inset-[4%] group-hover:border-brand group-focus-visible:-inset-[4%] group-focus-visible:border-brand group-has-[a:focus-visible]:-inset-[4%] group-has-[a:focus-visible]:border-brand" />
    <span className="relative grid place-items-center transition-[scale] duration-200 group-hover:scale-108 group-focus-visible:scale-108 group-has-[a:focus-visible]:scale-108">
      {children}
    </span>
  </span>
)

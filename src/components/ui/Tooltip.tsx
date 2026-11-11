import React from 'react'

// The parent must be `relative` and a `group/tooltip`.
export const Tooltip = ({ children }: { children: string }): React.JSX.Element => (
  <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-1 -translate-x-1/2 translate-y-1 rounded-md bg-ink px-2 py-1 text-xs leading-[1.2] whitespace-nowrap text-page opacity-0 transition duration-150 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-5 after:border-transparent after:border-t-ink">
    {children}
  </span>
)

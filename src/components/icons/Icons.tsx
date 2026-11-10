import React from 'react'

// Inline SVG icons: they inherit the text colour (currentColor), so they work in light and dark mode.
type IconProps = React.SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  'aria-hidden': true,
  focusable: false,
} as const

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

// A brand logo, usually from Simple Icons (https://simpleicons.org, CC0). Drawn in the text colour unless a fill is
// given; that is an SVG attribute, not an inline style, so the strict CSP allows it and CSS can still override it.
export const BrandIcon = ({ icon, ...props }: IconProps & { icon: { path: string } }): React.JSX.Element => (
  <svg {...base} fill="currentColor" {...props}>
    <path d={icon.path} />
  </svg>
)

export const SunIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="4" {...stroke} />
    <path
      {...stroke}
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
    />
  </svg>
)

export const MoonIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <path {...stroke} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
)

export const ArrowUpRightIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <path {...stroke} d="M7 17 17 7M8 7h9v9" />
  </svg>
)

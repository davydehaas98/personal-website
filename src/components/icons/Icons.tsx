import React from 'react'

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

// A fill is an SVG attribute, not an inline style, so the strict CSP allows it and CSS can still override it.
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

export const BriefcaseIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <rect {...stroke} x="2.5" y="7" width="19" height="13.5" rx="2" />
    <path {...stroke} d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M2.5 13h19" />
  </svg>
)

export const GraduationCapIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <path {...stroke} d="M22 9.5 12 4.5 2 9.5l10 5 10-5ZM6 11.5v5c3.5 2.5 8.5 2.5 12 0v-5M22 9.5V16" />
  </svg>
)

export const AwardIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <circle {...stroke} cx="12" cy="8.5" r="6" />
    <path {...stroke} d="M8.5 13.5 7 21.5l5-2.5 5 2.5-1.5-8" />
  </svg>
)

export const CodeIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <path {...stroke} d="M8 8.5 4.5 12 8 15.5M16 8.5l3.5 3.5-3.5 3.5M13.5 5.5l-3 13" />
  </svg>
)

export const MailIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <rect {...stroke} x="3" y="5.5" width="18" height="13" rx="2" />
    <path {...stroke} d="m3.5 7 8.5 6.5L20.5 7" />
  </svg>
)

export const ArrowUpRightIcon = (props: IconProps): React.JSX.Element => (
  <svg {...base} {...props}>
    <path {...stroke} d="M7 17 17 7M8 7h9v9" />
  </svg>
)

import React from 'react'

import { BrandIcon } from '../icons/Icons'
import { invisibleOn, logos, type LogoName } from './logos'

// A logo in its brand colour (the fill attribute). The few that would all but vanish in one theme (see logos.ts)
// use the text colour in that theme instead.
export const Logo = ({ name, className }: { name: LogoName; className: string }): React.JSX.Element => (
  <BrandIcon
    icon={logos[name]}
    fill={`#${logos[name].hex}`}
    className={`light:data-[invisible-on=light]:fill-ink dark:data-[invisible-on=dark]:fill-ink ${className}`}
    data-invisible-on={invisibleOn(logos[name].hex)}
  />
)

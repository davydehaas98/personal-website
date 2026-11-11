import React from 'react'

import { BrandIcon } from '../icons/Icons'
import { invisibleOn, logos, type LogoName } from './logos'

export const Logo = ({ name, className }: { name: LogoName; className: string }): React.JSX.Element => (
  <BrandIcon
    icon={logos[name]}
    fill={`#${logos[name].hex}`}
    className={`light:data-[invisible-on=light]:fill-ink dark:data-[invisible-on=dark]:fill-ink ${className}`}
    data-invisible-on={invisibleOn(logos[name].hex)}
  />
)

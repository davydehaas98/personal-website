import React from 'react'

import { Logo } from '../logos/Logo'
import { logoName } from '../logos/logos'
import { Bubble } from '../ui/Bubble'
import { Tooltip } from '../ui/Tooltip'
import stack from './stack.json'

export const TechStack = (): React.JSX.Element => (
  <div className="mt-6">
    <p id="stack-title" className="text-[0.8125rem] font-semibold tracking-[0.04em] text-muted uppercase">
      Tech stack
    </p>
    <ul className="mt-3 flex flex-wrap justify-center gap-3" aria-labelledby="stack-title">
      {stack.map(({ logo, name }) => (
        <li key={logo} className="group/tooltip relative">
          <Bubble className="size-11">
            <Logo name={logoName(logo)} className="w-5.5" />
          </Bubble>
          <Tooltip>{name}</Tooltip>
        </li>
      ))}
    </ul>
  </div>
)

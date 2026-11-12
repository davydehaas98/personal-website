import React from 'react'

import photo from '../../assets/me.webp'
import { MapPinIcon } from '../icons/Icons'
import { TechStack } from './TechStack'

export const Home = (): React.JSX.Element => {
  return (
    <section
      id="home"
      className="mx-auto flex w-full max-w-page flex-col items-center gap-5 px-5 pt-16 pb-12 text-center"
    >
      <img
        className="size-42 flex-none rounded-full border-4 border-accent object-cover"
        src={photo}
        alt="Davy de Haas"
        width={168}
        height={168}
      />
      <div>
        <h1 className="mb-1 text-[clamp(2rem,5vw,2.75rem)]">Davy de Haas</h1>
        <p className="font-semibold">Software Engineer at iO</p>
        <p className="mt-1 mb-3 flex items-center justify-center gap-1.5 text-muted">
          <MapPinIcon className="w-4" />
          Eindhoven, North Brabant, The Netherlands
        </p>
        <p className="mx-auto max-w-[70ch] text-balance text-muted">
          I build backend systems and the infrastructure they run on. At iO I work on software for clients such as
          Brussels Airport, Signify, Basispoort, Nationale Apotheek and Favorite Gifts, mostly with Java (Spring) and
          TypeScript (NestJS). At home I run a Kubernetes cluster on Talos Linux, which also hosts this website.
        </p>
        <TechStack />
      </div>
    </section>
  )
}

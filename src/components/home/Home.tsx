import React from 'react'

import { TechStack } from './TechStack'

export const Home = (): React.JSX.Element => {
  return (
    <section
      id="home"
      className="mx-auto flex w-full max-w-page flex-col items-center gap-5 px-5 pt-16 pb-12 text-center"
    >
      <img
        className="size-42 flex-none rounded-full border-4 border-accent object-cover"
        src="/assets/images/me.jpg"
        alt="Davy de Haas"
        width={168}
        height={168}
      />
      <div>
        <h1 className="mb-1 text-[clamp(2rem,5vw,2.75rem)]">Davy de Haas</h1>
        <p className="mb-3 font-semibold">Software Engineer at iO, Campus Eindhoven.</p>
        <p className="mx-auto max-w-[55ch] text-muted">
          Enthusiastic software engineer with a great interest in DevOps, backend architectures and networking
          infrastructures.
        </p>
        <TechStack />
      </div>
    </section>
  )
}

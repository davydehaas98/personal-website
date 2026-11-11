import React from 'react'

import { ArrowUpRightIcon } from '../icons/Icons'
import { Logo } from '../logos/Logo'
import { logoName, logos, type LogoName } from '../logos/logos'
import { Bubble } from '../ui/Bubble'
import { ExternalLink } from '../ui/ExternalLink'
import { Tooltip } from '../ui/Tooltip'

// GitHub's language colours, for the dot in front of each language.
const languageColours: Record<string, string> = {
  'Go Template': 'bg-[#00add8]',
  HCL: 'bg-[#844fba]',
  Java: 'bg-[#b07219]',
  JavaScript: 'bg-[#f1e05a]',
  Python: 'bg-[#3572a5]',
  Shell: 'bg-[#89e051]',
}

// The repository's languages as GitHub reports them, each with GitHub's colour.
const Languages = ({ languages }: { languages: string[] }): React.JSX.Element => (
  <ul className="mb-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[0.8125rem] text-muted" aria-label="Languages">
    {languages.map((language) => (
      <li key={language} className="inline-flex items-center gap-1.5">
        <span className={`size-2.5 rounded-full ${languageColours[language] ?? 'bg-muted'}`} aria-hidden="true" />
        {language}
      </li>
    ))}
  </ul>
)

// What the project is built with, as small logos with their name in a tooltip.
const Stack = ({ names }: { names: LogoName[] }): React.JSX.Element => (
  <ul className="flex flex-wrap justify-center gap-2" aria-label="Built with">
    {names.map((name) => (
      <li key={name} className="group/tooltip relative">
        <Logo name={name} className="w-4.5" />
        <Tooltip>{logos[name].title}</Tooltip>
      </li>
    ))}
  </ul>
)

type Project = {
  name: string
  repository: string
  description: string
  languages: string[]
  logos: string[]
}

// A card linking to the repository, with the main (first) logo in a bubble on its top edge. It fills its grid cell,
// so the languages and logos line up at the bottom of every card in a row.
export const ProjectCard = ({ project }: { project: Project }): React.JSX.Element => {
  const names = project.logos.map(logoName)
  return (
    <ExternalLink
      className="group relative flex h-full flex-col items-center rounded-[20px] border-2 border-line bg-surface px-5 pt-11 pb-5 text-center transition duration-200 hover:border-brand focus-visible:border-brand"
      href={`https://github.com/${project.repository}`}
    >
      <Bubble className="absolute -top-8 left-1/2 size-16 -translate-x-1/2">
        <Logo name={names[0]} className="w-7.5" />
      </Bubble>
      <ArrowUpRightIcon className="absolute top-3.5 right-3.5 w-4 text-muted group-hover:text-brand group-focus-visible:text-brand" />
      <h3 className="mb-1.5 text-lg">{project.name}</h3>
      <p className="mb-3.5 flex-1 text-muted">{project.description}</p>
      <Languages languages={project.languages} />
      <Stack names={names} />
    </ExternalLink>
  )
}

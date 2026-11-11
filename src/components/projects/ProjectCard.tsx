import React, { useId } from 'react'

import { ArrowUpRightIcon } from '../icons/Icons'
import { Logo } from '../logos/Logo'
import { logoName, logos, type LogoName } from '../logos/logos'
import { Bubble } from '../ui/Bubble'
import { ExternalLink } from '../ui/ExternalLink'
import { Tooltip } from '../ui/Tooltip'

// GitHub's language colours.
const languageColours: Record<string, string> = {
  'Go Template': 'bg-[#00add8]',
  HCL: 'bg-[#844fba]',
  Java: 'bg-[#b07219]',
  JavaScript: 'bg-[#f1e05a]',
  Python: 'bg-[#3572a5]',
  Shell: 'bg-[#89e051]',
}

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

// Above the card's link overlay, so the tooltips still show on hover.
const Stack = ({ names }: { names: LogoName[] }): React.JSX.Element => (
  <ul className="relative z-1 flex flex-wrap justify-center gap-2" aria-label="Built with">
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

// Only the name is a link, so screen readers don't read the whole card as its name; its ::after covers the card,
// so the whole card is still clickable.
export const ProjectCard = ({ project }: { project: Project }): React.JSX.Element => {
  const names = project.logos.map(logoName)
  const id = useId()
  return (
    <article className="group relative flex h-full flex-col items-center rounded-[20px] border-2 border-line bg-surface px-5 pt-11 pb-5 text-center transition duration-200 hover:border-brand has-[a:focus-visible]:border-brand has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-brand">
      <Bubble className="absolute -top-8 left-1/2 size-16 -translate-x-1/2">
        <Logo name={names[0]} className="w-7.5" />
      </Bubble>
      <ArrowUpRightIcon className="absolute top-3.5 right-3.5 w-4 text-muted group-hover:text-brand group-has-[a:focus-visible]:text-brand" />
      <h3 className="mb-1.5 text-lg">
        <ExternalLink
          className="after:absolute after:inset-0 after:rounded-[18px] focus-visible:outline-none"
          href={`https://github.com/${project.repository}`}
          aria-describedby={`${id}-description`}
        >
          {project.name}
        </ExternalLink>
      </h3>
      <p id={`${id}-description`} className="mb-3.5 flex-1 text-muted">
        {project.description}
      </p>
      <Languages languages={project.languages} />
      <Stack names={names} />
    </article>
  )
}

import React from 'react'
import { ArrowUpRightIcon, BrandIcon, CodeIcon } from '../icons/Icons'
import SectionHeader from '../section-header/SectionHeader'
import Bubble from '../ui/Bubble'
import Section from '../ui/Section'
import { invisibleOn, logos, type LogoName } from './logos'
import projects from './projects.json'

// GitHub's language colours, for the dot in front of each language.
const languageColours: Record<string, string> = {
  'Go Template': 'bg-[#00add8]',
  HCL: 'bg-[#844fba]',
  Java: 'bg-[#b07219]',
  JavaScript: 'bg-[#f1e05a]',
  Python: 'bg-[#3572a5]',
  Shell: 'bg-[#89e051]',
}

// A logo in its brand colour (the fill attribute). The few that would all but vanish in one theme (see logos.ts)
// use the text colour in that theme instead.
const Logo = ({ name, className }: { name: LogoName, className: string }): React.JSX.Element => (
  <BrandIcon
    icon={logos[name]}
    fill={`#${logos[name].hex}`}
    className={`light:data-[invisible-on=light]:fill-ink dark:data-[invisible-on=dark]:fill-ink ${className}`}
    data-invisible-on={invisibleOn(logos[name].hex)}
  />
)

// The logo's name in a small dark bubble with an arrow, above the logo while it is hovered (group/logo).
// Screen readers read it as the logo's name.
const Tooltip = ({ children }: { children: string }): React.JSX.Element => (
  <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-1 -translate-x-1/2 translate-y-1 rounded-md bg-ink px-2 py-1 text-xs leading-[1.2] whitespace-nowrap text-page opacity-0 transition duration-150 group-hover/logo:translate-y-0 group-hover/logo:opacity-100 after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-5 after:border-transparent after:border-t-ink">
    {children}
  </span>
)

// Cards in rows of 3 on desktop, 2 on tablets and 1 on phones, all the same height (auto-rows), with the languages
// and logos at the bottom. The main logo sits in a bubble on the card's top edge.
const Projects = (): React.JSX.Element => {
  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeader
        id="projects-title"
        icon={<CodeIcon />}
        title="Projects"
        lead="Some of the things I work on, all on GitHub."
      />
      <ul className="mt-15 grid auto-rows-[1fr] gap-x-5 gap-y-13 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const names = project.logos as LogoName[]
          return (
            <li key={project.repository}>
              <a
                className="group relative flex h-full flex-col items-center rounded-[20px] border-2 border-line bg-surface px-5 pt-11 pb-5 text-center transition duration-200 hover:border-brand focus-visible:border-brand"
                href={`https://github.com/${project.repository}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Bubble className="absolute -top-8 left-1/2 size-16 -translate-x-1/2">
                  <Logo name={names[0]} className="w-7.5" />
                </Bubble>
                <ArrowUpRightIcon className="absolute top-3.5 right-3.5 w-4 text-muted group-hover:text-brand group-focus-visible:text-brand" />
                <h3 className="mb-1.5 text-lg">{project.name}</h3>
                <p className="mb-3.5 flex-1 text-muted">{project.description}</p>
                {/* The repository's languages as GitHub reports them. */}
                <ul className="mb-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[0.8125rem] text-muted" aria-label="Languages">
                  {project.languages.map((language) => (
                    <li key={language} className="inline-flex items-center gap-1.5">
                      <span className={`size-2.5 rounded-full ${languageColours[language] ?? 'bg-muted'}`} aria-hidden="true" />
                      {language}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap justify-center gap-2" aria-label="Built with">
                  {names.map((name) => (
                    <li key={name} className="group/logo relative">
                      <Logo name={name} className="w-4.5" />
                      <Tooltip>{logos[name].title}</Tooltip>
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default Projects

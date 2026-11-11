import React from 'react'

import { CodeIcon } from '../icons/Icons'
import { SectionHeader } from '../section-header/SectionHeader'
import { Section } from '../ui/Section'
import { ProjectCard } from './ProjectCard'
import projects from './projects.json'

// Cards in rows of 3 on desktop, 2 on tablets and 1 on phones, all the same height (auto-rows).
export const Projects = (): React.JSX.Element => (
  <Section id="projects" labelledBy="projects-title">
    <SectionHeader
      id="projects-title"
      icon={<CodeIcon />}
      title="Projects"
      lead="Some of the things I work on, all on GitHub."
    />
    <ul className="mt-15 grid auto-rows-[1fr] gap-x-5 gap-y-13 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.repository}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  </Section>
)

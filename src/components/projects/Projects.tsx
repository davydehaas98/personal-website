import React from 'react'
import appStyles from '../../App.module.css'
import { ArrowUpRightIcon, BrandIcon, CodeIcon } from '../icons/Icons'
import SectionHeader from '../section-header/SectionHeader'
import { invisibleOn, logos, type LogoName } from './logos'
import styles from './Projects.module.css'
import projects from './projects.json'

// A logo in its brand colour (see logos.ts for the few that switch to the text colour in one theme).
const Logo = ({ name, className }: { name: LogoName, className: string }): React.JSX.Element => (
  <BrandIcon
    icon={logos[name]}
    fill={`#${logos[name].hex}`}
    className={className}
    data-invisible-on={invisibleOn(logos[name].hex)}
  />
)

const Projects = (): React.JSX.Element => {
  return (
    <section id="projects" className={appStyles.section} aria-labelledby="projects-title">
      <SectionHeader
        id="projects-title"
        icon={<CodeIcon />}
        title="Projects"
        lead="Some of the things I work on, all on GitHub."
      />
      <ul className={styles.grid}>
        {projects.map((project) => {
          const names = project.logos as LogoName[]
          const main = names[0]
          return (
            <li key={project.repository}>
              <a
                className={styles.card}
                href={`https://github.com/${project.repository}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* The main logo in a bubble on the card's top edge. */}
                <span className={styles.bubble} aria-hidden="true">
                  <Logo name={main} className={styles.bubbleLogo} />
                </span>
                <ArrowUpRightIcon className={styles.arrow} />
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                {/* The repository's languages as GitHub reports them, with GitHub's language colours. */}
                <ul className={styles.languages} aria-label="Languages">
                  {project.languages.map((language) => (
                    <li key={language} className={styles.language}>
                      <span className={styles.dot} data-language={language} aria-hidden="true" />
                      {language}
                    </li>
                  ))}
                </ul>
                {/* Every logo, with its name in a tooltip on hover (also the name screen readers read). */}
                <ul className={styles.logos} aria-label="Built with">
                  {names.map((name) => (
                    <li key={name} className={styles.stackItem}>
                      <Logo name={name} className={styles.logo} />
                      <span className={styles.tooltip}>{logos[name].title}</span>
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Projects

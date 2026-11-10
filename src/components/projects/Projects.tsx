import React from 'react'
import appStyles from '../../App.module.css'
import { ArrowUpRightIcon, BrandIcon } from '../icons/Icons'
import { invisibleOn, logos, type LogoName } from './logos'
import styles from './Projects.module.css'
import projects from './projects.json'

const Projects = (): React.JSX.Element => {
  return (
    <section id="projects" className={appStyles.section} aria-labelledby="projects-title">
      <h2 id="projects-title" className={appStyles.title}>Projects</h2>
      <p className={appStyles.lead}>Some of the things I work on, all on GitHub.</p>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.repository}>
            <a
              className={styles.card}
              href={`https://github.com/${project.repository}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={styles.name}>
                {project.name}
                <ArrowUpRightIcon className={styles.arrow} />
              </h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.logos} aria-label="Built with">
                {(project.logos as LogoName[]).map((name) => (
                  <li key={name} title={logos[name].title}>
                    <BrandIcon
                      icon={logos[name]}
                      fill={`#${logos[name].hex}`}
                      className={styles.logo}
                      data-invisible-on={invisibleOn(logos[name].hex)}
                    />
                    <span className={styles.label}>{logos[name].title}</span>
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects

import React from 'react'
import appStyles from '../../App.module.css'
import styles from './Projects.module.css'
import projects from './projects.json'

const Projects = (): React.JSX.Element => {
  return (
    <section id="projects" className={appStyles.section} aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <p>Some of the projects I work on, all on GitHub.</p>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.repository}>
            <a
              className={styles.card}
              href={`https://github.com/${project.repository}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              <span className={styles.language}>{project.language}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects

import React from 'react'
import appStyles from '../../App.module.css'
import ProjectCard from '../project-card/ProjectCard'
import styles from './Projects.module.css'
import projects from './projects.json'

const Projects = (): React.JSX.Element => {
  const content = (
    projects.map((project, index) => (
      <ProjectCard key={index} link={project.link} name={project.name} src={project.src} />
    ))
  )

  return (
    <div>
      <div className={appStyles.container}>
        <div className={appStyles.text}>
          <h1>Projects</h1>
          <p>Some of the projects I worked on.</p>
        </div>
        <div className={styles.projectCardContainer}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Projects

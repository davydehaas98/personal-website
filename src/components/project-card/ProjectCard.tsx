import React from 'react'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  link: string
  name: string
  src?: string
}

const ProjectCard = (props: ProjectCardProps): React.JSX.Element => {
  return (
    <a className={styles.anchor} href={props.link} target="_blank" rel="noopener noreferrer">
      <div className={styles.projectCard}>
        <img className={styles.image} src={props.src ?? './assets/images/placeholder.svg'} alt="" />
        <h1>{props.name}</h1>
      </div>
    </a>
  )
}

export default ProjectCard

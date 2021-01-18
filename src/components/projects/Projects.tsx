import React from 'react'
import { StyledContainer } from '../app/App.styles'
import { withRouter } from 'react-router-dom'
import ProjectCard from '../project-card/ProjectCard'
import { StyledProjectCardContainer } from './Projects.styles'
import projects from './projects.json'

const Projects = (): JSX.Element => {
  const content = (
    projects.map((project, index) => (
      <div key={index}>
        <ProjectCard link={project.link} name={project.name} src={project.src} />
      </div>
    ))
  )

  return (
    <div>
      <StyledContainer>
        <h1>Projects</h1>
        <StyledProjectCardContainer>
          {content}
        </StyledProjectCardContainer>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Projects)

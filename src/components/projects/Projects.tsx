import React from 'react'
import { StyledContainer, StyledText } from '../app/App.styles'
import ProjectCard from '../project-card/ProjectCard'
import { StyledProjectCardContainer } from './Projects.styles'
import projects from './projects.json'

const Projects = (): JSX.Element => {
  const content = (
    projects.map((project, index) => (
      <ProjectCard key={index} link={project.link} name={project.name} src={project.src} />
    ))
  )

  return (
    <div>
      <StyledContainer>
        <StyledText>
          <h1>Projects</h1>
          <p>Some of the projects I worked on.</p>
        </StyledText>
        <StyledProjectCardContainer>
          {content}
        </StyledProjectCardContainer>
      </StyledContainer>
    </div>
  )
}

export default Projects

import React from 'react'
import { StyledContainer } from '../app/App.styles'
import { withRouter } from 'react-router-dom'
import ProjectCard from '../project-card/ProjectCard'
import { StyledProjectCardContainer } from './Projects.styles'

const Projects = (): JSX.Element => {
  return (
    <div>
      <StyledContainer>
        <h1>Projects</h1>
        <StyledProjectCardContainer>
          <ProjectCard name="Project Euler" src="./assets/images/project-euler.png"/>
          <ProjectCard name="NGINX Reverse Proxy" src="./assets/images/nginx.png"/>
          <ProjectCard name="Plex Media Server" src="./assets/images/plex.png"/>
          <ProjectCard name="Screeps" src="./assets/images/screeps.svg" />
          <ProjectCard name="The Valley" />
          <ProjectCard name="Info Support" />
        </StyledProjectCardContainer>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Projects)

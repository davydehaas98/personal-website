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
          <ProjectCard link="https://github.com/davydehaas98/project-euler" name="Project Euler" src="./assets/images/project-euler.png"/>
          <ProjectCard link="https://github.com/davydehaas98/reverse-proxy" name="NGINX Reverse Proxy" src="./assets/images/nginx.png"/>
          <ProjectCard link="https://github.com/davydehaas98/media-server" name="Plex Media Server" src="./assets/images/plex.png"/>
          <ProjectCard link="https://github.com/davydehaas98/screeps-script" name="Screeps" src="./assets/images/screeps.svg" />
          <ProjectCard link="https://www.thevalley.nl" name="The Valley" />
          <ProjectCard link="https://www.infosupport.com" name="Info Support" />
        </StyledProjectCardContainer>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Projects)

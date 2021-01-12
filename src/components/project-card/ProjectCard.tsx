import React from 'react'
import { withRouter } from 'react-router-dom'
import { StyledImage, StyledLink, StyledProjectCard } from './ProjectCard.styles'

const ProjectCard = (props: any): JSX.Element => {
  return (
    <StyledLink href={props.link} target="_blank" rel="noopener noreferrer">
      <StyledProjectCard>
        <StyledImage src={props.src}/>
        <h1>{props.name}</h1>
      </StyledProjectCard>
    </StyledLink>
  )
}

export default withRouter(ProjectCard)

import React from 'react'
import { StyledImage, StyledAnchor, StyledProjectCard } from './ProjectCard.styles'

const ProjectCard = (props: any): JSX.Element => {
  return (
    <StyledAnchor href={props.link} target="_blank" rel="noopener noreferrer">
      <StyledProjectCard>
        <StyledImage src={props.src}/>
        <h1>{props.name}</h1>
      </StyledProjectCard>
    </StyledAnchor>
  )
}

export default ProjectCard

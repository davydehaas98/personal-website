import React from 'react'
import { withRouter } from 'react-router-dom'
import { StyledImage, StyledProjectCard, StyledText } from './ProjectCard.styles'

const ProjectCard = (props: any): JSX.Element => {
  return (
    <div>
      <StyledProjectCard>
        <StyledImage src={props.src}/>
        <StyledText>{props.name}</StyledText>
      </StyledProjectCard>
    </div>
  )
}

export default withRouter(ProjectCard)

import React from 'react'
import { StyledContainer } from './Projects.styles'
import { withRouter } from 'react-router-dom'

const Projects = (): JSX.Element => {
  return (
    <div>
      <StyledContainer>
        <h1>Projects</h1>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Projects)

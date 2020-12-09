import React from 'react'
import { StyledContainer } from '../app/App.styles'
import { withRouter } from 'react-router-dom'

const About = (): JSX.Element => {
  return (
    <div>
      <StyledContainer>
        <h1>About</h1>
      </StyledContainer>
    </div>
  )
}

export default withRouter(About)

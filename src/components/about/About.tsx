import React from 'react'
import { StyledContainer, StyledText } from '../app/App.styles'
import { withRouter } from 'react-router-dom'
import { StyledImage } from './About.styles'

const About = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledText>
        <h1>About</h1>
        <p>
          Enthusiastic software developer with a great interest in DevOps,
          backend architectures and networking infrastructures
        </p>
      </StyledText>
      <StyledImage src="./assets/images/vr.jpg" />
    </StyledContainer>
  )
}

export default withRouter(About)

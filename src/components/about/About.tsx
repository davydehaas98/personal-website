import React from 'react'
import { StyledContainer, StyledText } from '../../App.styles'
import { StyledImage } from './About.styles'

const About = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledText>
        <h1>About</h1>
        <p>
          Enthusiastic software engineer with a great interest in DevOps,
          backend architectures and networking infrastructures.
        </p>
      </StyledText>
      <StyledImage src="./assets/images/vr.jpg" />
    </StyledContainer>
  )
}

export default About

import React from 'react'
import { StyledBackground, StyledText, StyledPhoto, StyledContainer } from './Home.styles'
import { withRouter } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <div>
      <StyledBackground>
        <StyledText>
          <h1>Davy de Haas</h1>
          <h2>Student Software Developer</h2>
        </StyledText>
        <StyledPhoto />
      </StyledBackground>
      <StyledContainer>
        <h1>Welcome to my website.</h1>
        <p>Here you will find information about me and the projects I made</p>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Home)

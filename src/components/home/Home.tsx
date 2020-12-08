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
        <p>This site is still under construction.</p>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Home)

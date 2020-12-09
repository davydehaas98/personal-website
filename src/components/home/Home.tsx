import React from 'react'
import { StyledBanner, StyledText, StyledPhoto, StyledContainer } from './Home.styles'
import { withRouter } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <div>
      <StyledBanner>
        <StyledText>
          <h1>Davy de Haas</h1>
          <h2>Student Software Developer</h2>
        </StyledText>
        <StyledPhoto />
      </StyledBanner>
      <StyledContainer>
        <h1>Welcome!</h1>
        <p>This website is still under construction.</p>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Home)

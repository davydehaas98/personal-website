import React from 'react'
import { StyledBody, StyledContainer } from './Home.styles'
import { withRouter } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <StyledBody>
      <StyledContainer>
        <h1>Davy de Haas</h1>
        <h2>Software Developer</h2>
      </StyledContainer>
    </StyledBody>
  )
}

export default withRouter(Home)

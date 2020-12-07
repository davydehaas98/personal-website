import React from 'react'
import { StyledContainer } from './Home.styles'
import { withRouter } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <div>
      <StyledContainer>
        <h1>Davy de Haas</h1>
        <h2>Software Developer</h2>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Home)

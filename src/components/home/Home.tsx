import React from 'react'
import { StyledImage, StyledDivision } from './Home.styles'
import { withRouter } from 'react-router-dom'
import { StyledContainer, StyledText } from '../app/App.styles'

const Home = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledText>
        <h1>Davy de Haas</h1>
        <p>MS Computer Sciences and Engineering student at Eindhoven University of Technology</p>
      </StyledText>
      <StyledImage src="./assets/images/me.jpg"/>
      <StyledDivision>
        <h1>Welcome!</h1>
        <p>This website is under construction.</p>
        <p>Mobile compatibility will be added soon.</p>
      </StyledDivision>
    </StyledContainer>
  )
}

export default withRouter(Home)

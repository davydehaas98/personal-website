import React from 'react'
import { StyledImage, StyledDivision } from './Home.styles'
import { withRouter } from 'react-router-dom'
import { StyledContainer, StyledText } from '../app/App.styles'

const Home = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledText>
        <h1>Davy de Haas</h1>
        <p>Student Fontys ICT & Software Engineering</p>
      </StyledText>
      <StyledImage src="./assets/images/me.jpg"/>
      <StyledDivision>
        <h1>Welcome!</h1>
        <p>This website is still under construction.</p>
      </StyledDivision>
    </StyledContainer>
  )
}

export default withRouter(Home)

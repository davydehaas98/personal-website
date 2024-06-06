import React from 'react'
import { StyledImage, StyledDivision } from './Home.styles'
import { StyledContainer, StyledText } from '../../App.styles'

const Home = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledText>
        <h1>Davy de Haas</h1>
        <p>Java Software Engineer at iO, Campus Eindhoven.</p>
      </StyledText>
      <StyledImage src="./assets/images/me.jpg" alt="me" />
      <StyledDivision>
        <h1>Welcome!</h1>
        <p>This website is still under construction.</p>
      </StyledDivision>
    </StyledContainer>
  )
}

export default Home

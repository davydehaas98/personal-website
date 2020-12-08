import React from 'react'
import { StyledContainer } from './Footer.styles'
import { withRouter } from 'react-router-dom'

const Footer = (): JSX.Element => {
  return (
    <StyledContainer>
      <p>© 2020 Davy de Haas</p>
    </StyledContainer>
  )
}

export default withRouter(Footer)

import React from 'react'
import { StyledFooterContainer } from './Footer.styles'
import { withRouter } from 'react-router-dom'

const Footer = (): JSX.Element => {
  return (
    <StyledFooterContainer>
      <p>© 2020 Davy de Haas</p>
    </StyledFooterContainer>
  )
}

export default withRouter(Footer)

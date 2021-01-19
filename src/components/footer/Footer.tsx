import React from 'react'
import { StyledFooter } from './Footer.styles'
import { withRouter } from 'react-router-dom'

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <p>© 2021 Davy de Haas</p>
    </StyledFooter>
  )
}

export default withRouter(Footer)

import React from 'react'
import { StyledHeader, StyledNavLink } from './NavigationBar.styles'
import { withRouter } from 'react-router-dom'

const NavigationBar = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledNavLink to="/">Davy de Haas</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </StyledHeader>
  )
}

export default withRouter(NavigationBar)

import React from 'react'
import { StyledNav, StyledNavLink } from './NavigationBar.styles'
import { withRouter } from 'react-router-dom'

const NavigationBar = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Davy de Haas</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </StyledNav>
  )
}

export default withRouter(NavigationBar)

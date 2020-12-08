import React from 'react'
import { StyledAppBar, StyledImage, StyledNavLink } from './NavigationBar.styles'
import { Toolbar } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const NavigationBar = (): JSX.Element => {
  return (
    <StyledAppBar>
      <Toolbar>
        <StyledImage />
        <StyledNavLink to="/">Davy de Haas</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/projects">Projects</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </Toolbar>
    </StyledAppBar>
  )
}

export default withRouter(NavigationBar)

import React from 'react'
import { StyledAppBar, StyledNavLink } from './NavigationBar.styles'
import { IconButton, Toolbar } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const NavigationBar = (): JSX.Element => {
  return (
    <StyledAppBar>
      <Toolbar>
        <IconButton size="medium">DH</IconButton>
        <StyledNavLink to="/">Davy de Haas</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/projects">Projects</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </Toolbar>
    </StyledAppBar>
  )
}

export default withRouter(NavigationBar)

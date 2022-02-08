import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { StyledNav, StyledNavLink } from './NavigationBar.styles'

const NavigationBar = (props: any): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  return (
    <StyledNav {...props} router={{ location, navigate, params }}>
      <StyledNavLink to="/">Davy de Haas</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </StyledNav>
  )
}

export default NavigationBar

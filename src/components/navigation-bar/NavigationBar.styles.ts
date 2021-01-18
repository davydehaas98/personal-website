import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
justify-content: center;
position: sticky;
top: 0;
z-index: 99;
background-color: #000044;
`

export const StyledNavLink = styled(NavLink)`
margin: 0px;
padding: 20px 50px;
text-decoration: none;
color: #ffffff;
font-weight: 500;
:hover {
  background-color: #ffffff;
  color: #000044;
  text-decoration: overline;
}
`

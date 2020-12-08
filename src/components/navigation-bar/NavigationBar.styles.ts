import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledAppBar = styled.div`
display: flex;
flex-direction: row;
align-content: center;
position: sticky;
top: 0;
left: 0;
z-index: 99;
background-color: #000044;
`

export const StyledImage = styled.img.attrs({
  src: './assets/images/me.jpg'
})`
margin: auto auto;
width: 50px;
height: 50px;
border-radius: 25px;
`

export const StyledNavLink = styled(NavLink)`
margin-left: 10px;
margin-right: 10px;
text-decoration: none;
color: #ffffff;
:hover {
    color: #cccccc;
}
`

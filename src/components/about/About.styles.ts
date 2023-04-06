import styled from 'styled-components'

export const StyledImage = styled.img.attrs(props => ({
  src: props.src ?? './assets/images/placeholder.svg',
  alt: props.alt ?? ''
}))`
margin: 50px auto;
width: 500px;
height: 500px;
border-radius: 50%;
`

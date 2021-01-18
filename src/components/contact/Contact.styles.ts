import styled from 'styled-components'

export const StyledImagesContainer = styled.div`
flex-direction: row;
margin-top: 50px;
`

export const StyledAnchor = styled.a`
border-radius: 25px;
`

export const StyledImage = styled.img.attrs(props => ({
  src: props.src ?? './assets/images/placeholder.svg'
}))`
border-radius: 25px;
width: 50px;
height: 50px;
margin: auto 10px;
`

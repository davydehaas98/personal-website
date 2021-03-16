import styled from 'styled-components'

export const StyledImagesContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 20px;
`

export const StyledAnchor = styled.a`
margin: 10px;
height: 50px;
border-radius: 50%;
`

export const StyledImage = styled.img.attrs(props => ({
  src: props.src ?? './assets/images/placeholder.svg'
}))`
width: 50px;
border-radius: 50%;
&:hover {
  filter: opacity(0.5);
}
`

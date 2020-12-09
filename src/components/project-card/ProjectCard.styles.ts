import styled from 'styled-components'

export const StyledProjectCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
padding: 20px;
min-width: 350px;
min-height: 300px;
border-radius: 20px;
background-color: #000044;
color: #FFFFFF;
`

export const StyledText = styled.h1`
text-decoration: none;
`

export const StyledImage = styled.img.attrs(props => ({
  src: props.src ?? './assets/images/placeholder.svg'
}))`
width: 200px;
`

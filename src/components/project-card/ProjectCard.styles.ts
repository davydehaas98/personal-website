import styled from 'styled-components'

export const StyledAnchor = styled.a`
text-decoration: none;
margin: 25px;
border-radius: 25px;
&:hover {
  filter: opacity(0.5);
}
`

export const StyledProjectCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 25px;
min-width: 400px;
min-height: 300px;
border-radius: 25px;
border-style: solid;
border-color: #000044;
border-width: 5px;
color: #000044;
`

export const StyledImage = styled.img.attrs(props => ({
  src: props.src ?? './assets/images/placeholder.svg'
}))`
max-width: 200px;
`

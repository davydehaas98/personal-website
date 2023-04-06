import styled from 'styled-components'

export const StyledBanner = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 100vh;
width: 100%;
// background-image: url(./assets/images/eindhoven.jpg);
// background-color: #ffffff;
// background-position: center;
// background-repeat: no-repeat;
// background-size: cover;
`

export const StyledImage = styled.img.attrs(props => ({
  src: props.src ?? './assets/images/placeholder.svg',
  alt: props.alt ?? ''
}))`
margin: 50px auto;
width: 720px;
height: 720px;
max-width: 500px;
max-height: 500px;
border-radius: 50%;
`

export const StyledDivision = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
height: 100vh;
width: 100%;
background-color: #ffffff;
color: #000000
`

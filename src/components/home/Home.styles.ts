import styled from 'styled-components'

export const StyledBanner = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
height:100vh;
width: 100%;
background-image: url(./assets/images/eindhoven.jpg);
background-color: #ffffff;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const StyledText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
margin: auto auto;
width: 300px;
height: 300px;
border-radius: 150px;
background-color: #ffffff;
color: #000044;
`

export const StyledImage = styled.img.attrs({
  src: './assets/images/me.jpg'
})`
margin: auto auto;
width: 500px;
height: 500px;
border-radius: 250px;
`

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
height: 100vh;
width: 100%;
background-color: #ffffff;
color: #000000
`

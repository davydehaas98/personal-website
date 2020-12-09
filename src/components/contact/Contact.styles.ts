import styled from 'styled-components'

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
height: 100vh;
width: 100vw;
background-color: #FFFFFF;
color: #000044;
`

export const StyledIconsContainer = styled.div`
flex-direction: row;
margin-top: 50px;
`

export const StyledLinkedInIcon = styled.img.attrs({
  src: './assets/images/icons/linkedin.svg'
})`
width: 50px;
height: 50px;
margin: auto 10px;
`

export const StyledGitHubIcon = styled.img.attrs({
  src: './assets/images/icons/github.svg'
})`
width: 50px;
height: 50px;
margin: auto 10px;
`

export const StyledMailIcon = styled.img.attrs({
  src: './assets/images/icons/mail.svg'
})`
width: 50px;
height: 50px;
margin: auto 10px;
`

export const StyledTwitterIcon = styled.img.attrs({
  src: './assets/images/icons/twitter.svg'
})`
width: 50px;
height: 50px;
margin: auto 10px;
`

export const StyledFacebookIcon = styled.img.attrs({
  src: './assets/images/icons/facebook.svg'
})`
width: 50px;
height: 50px;
margin: auto 10px;
`

export const StyledInstagramIcon = styled.img.attrs({
  src: './assets/images/icons/instagram.svg'
})`
width: 50px;
height: 50px;
margin: auto 10px;
`

import styled from 'styled-components'

export const StyledWrapper = styled.div`
max-width: 100%;

/* Small Devices, Tablets */
@media only screen and (max-width: 1000px) {
  background-color: #990000;
}
`

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
overflow: hidden;
align-items: center;
margin: 50px auto;
min-height: 100vh;
width: 100%;
background-color: #ffffff;
color: #000044;
`

export const StyledText = styled.div`
justify-content: center;
text-align: center;
margin: 50px;
color: #000044;
`

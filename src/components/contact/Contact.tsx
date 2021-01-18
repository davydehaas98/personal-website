import React from 'react'
import { StyledContainer } from '../app/App.styles'
import { StyledImagesContainer, StyledImage, StyledAnchor } from './Contact.styles'
import { withRouter } from 'react-router-dom'
import contact from './contact.json'

const Contact = (): JSX.Element => {
  const content = (
    contact.map((contact, index) => (
      <StyledAnchor key={index} title={contact.title} href={contact.href} target="_blank" rel="noopener noreferrer">
        <StyledImage src={contact.src} />
      </StyledAnchor>
    ))
  )
  return (
    <div>
      <StyledContainer>
        <h1>Contact</h1>
        <h2>You can contact me via one of the buttons below!</h2>
        <StyledImagesContainer>
          {content}
        </StyledImagesContainer>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Contact)

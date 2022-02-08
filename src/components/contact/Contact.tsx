import React from 'react'
import { StyledContainer, StyledText } from '../app/App.styles'
import { StyledImagesContainer, StyledImage, StyledAnchor } from './Contact.styles'
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
      <StyledContainer>
        <StyledText>
          <h1>Contact</h1>
          <p>You can contact me via one of the buttons below!</p>
        </StyledText>
        <StyledImagesContainer>
          {content}
        </StyledImagesContainer>
      </StyledContainer>
  )
}

export default Contact

import React from 'react'
import { StyledContainer } from '../app/App.styles'
import { StyledFacebookIcon, StyledGitHubIcon, StyledIconsContainer, StyledInstagramIcon, StyledLinkedInIcon, StyledMailIcon, StyledTwitterIcon } from './Contact.styles'
import { withRouter } from 'react-router-dom'

const Contact = (): JSX.Element => {
  return (
    <div>
      <StyledContainer>
        <h1>Contact</h1>
        <h2>You can contact me via one of the links below!</h2>
        <StyledIconsContainer>
          <a title="Look at my LinkedIn profile" href="https://www.linkedin.com/in/davy-de-haas-aa8429176">
            <StyledLinkedInIcon />
          </a>
          <a title="Look at my GitHub profile" href="https://github.com/davydehaas98">
            <StyledGitHubIcon />
          </a>
          <a title="Send me an email" href="mailto:davy.dehaas98@gmail.com">
            <StyledMailIcon />
          </a>
          <a title="Look at my Twitter profile" href="https://twitter.com/davydehaas98">
            <StyledTwitterIcon />
          </a>
          <a title="Look at my Facebook profile" href="https://www.facebook.com/davy.dehaas98">
            <StyledFacebookIcon />
          </a>
          <a title="Look at my Instagram profile" href="https://www.instagram.com/davy.dehaas">
            <StyledInstagramIcon />
          </a>
        </StyledIconsContainer>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Contact)

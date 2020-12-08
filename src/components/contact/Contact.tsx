import React from 'react'
import { StyledContainer } from './Contact.styles'
import { withRouter } from 'react-router-dom'

const Contact = (): JSX.Element => {
  return (
    <div>
      <StyledContainer>
        <h1>Contact</h1>
      </StyledContainer>
    </div>
  )
}

export default withRouter(Contact)

import React from 'react'
import {
  Container,
  EntryHeading,
  EntryBody,
  StatusWrapper,
} from './styledEntry'

const EntryCard = ({ entryName, status, shortDesc, extDesc }) => {
  return (
    <Container>
      <EntryHeading>
        <p>{entryName}</p>

        <i className='fas fa-expand-alt'></i>
      </EntryHeading>
      <EntryBody>
        <StatusWrapper>
          <p>
            Status: <span className='entry-status'>{status}</span>
          </p>
        </StatusWrapper>
        <p>{shortDesc}</p>
      </EntryBody>
    </Container>
  )
}

export default EntryCard

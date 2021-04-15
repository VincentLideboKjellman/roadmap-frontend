import React, { useState } from 'react'
import {
  Container,
  MinimizeContainer,
  RotatedContent,
  ReleaseHeading,
  VersionParagraph,
  ToggleIconMin,
  ToggleIconExp,
} from './styledRelease'

const ReleaseCard = ({ version, description, children }) => {
  const [toggleCardState, setToggleCardState] = useState(true)

  //Toggle state
  const toggleCard = () => {
    setToggleCardState(toggleCardState === true ? false : true)
  }

  return (
    <>
      {toggleCardState ? (
        // ROTATED CARD
        <MinimizeContainer>
          <RotatedContent>
            <ReleaseHeading>
              <VersionParagraph>{version}</VersionParagraph>
              <p>{description}</p>
              <ToggleIconMin>
                {!toggleCardState ? (
                  <i className='fas fa-minus' onClick={toggleCard}></i>
                ) : (
                  <i className='fas fa-plus' onClick={toggleCard}></i>
                )}
              </ToggleIconMin>
            </ReleaseHeading>
          </RotatedContent>
        </MinimizeContainer>
      ) : (
        // OPEN CARD
        <Container>
          <ReleaseHeading>
            <VersionParagraph>{version}</VersionParagraph>
            <p>{description}</p>

            <ToggleIconExp>
              {toggleCard ? (
                <i className='fas fa-minus' onClick={toggleCard}></i>
              ) : (
                <i className='fas fa-plus' onClick={toggleCard}></i>
              )}
            </ToggleIconExp>
          </ReleaseHeading>

          <div className='release-body'>{children}</div>
        </Container>
      )}
    </>
  )
}

export default ReleaseCard

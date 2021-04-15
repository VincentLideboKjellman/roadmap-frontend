import React from 'react'
import {
  Container,
  ReleaseHeading,
  VersionInput,
  DescriptionInput,
} from './styledRelease'

const EditReleaseCard = ({ version, description, children, onChange }) => {
  const handleChange = (value, field) => {
    onChange(value, field)
  }

  return (
    <Container>
      <ReleaseHeading>
        <VersionInput
          type='text'
          value={version}
          onChange={(e) => {
            handleChange(e.target.value, 'release_name')
          }}
        />
        <DescriptionInput
          type='text'
          value={description}
          onChange={(e) => {
            handleChange(e.target.value, 'release_desc')
          }}
        />
      </ReleaseHeading>

      <div>{children}</div>
    </Container>
  )
}

export default EditReleaseCard

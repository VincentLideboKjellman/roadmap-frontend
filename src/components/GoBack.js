import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled.a`
  color: var(--vgr-text);
  cursor: pointer;
`

const GoBack = () => {
  let history = useHistory()

  const handleGoBack = () => {
    history.goBack()
  }
  return <Link onClick={handleGoBack}>Gå tillbaka</Link>
}

export default GoBack

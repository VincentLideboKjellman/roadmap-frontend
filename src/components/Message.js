import React from 'react'
import styled, { css } from 'styled-components'

const Message = styled.h3`
  padding: 1.25rem;
  margin-bottom: 1rem;

  ${(props) =>
    props.danger &&
    css`
      background-color: #f44336;
      color: #721c24;
    `}

  ${(props) =>
    props.success &&
    css`
      background-color: #4caf50;
      color: #155724;
    `}

  ${(props) =>
    props.warning &&
    css`
      background-color: #ff9800;
      color: #856404;
    `}
`

export default Message

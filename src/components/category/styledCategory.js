import styled from 'styled-components'

export const CategoryContainer = styled.div`
  background-color: var(--vgr-secondary-bg);
  color: var(--vgr-text);
  margin: 1rem 0.5rem;
  border-radius: 0.313rem;
  padding: 0.5rem;
  text-align: left;
`

export const CategoryHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  .fas {
    margin-left: auto;
    color: white;
    cursor: pointer;
  }

  p {
    margin: 0.5rem;
  }
`

export const CategoryBody = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
`

export const CategoryInput = styled.input`
  margin: 0.5rem;
  color: var(--vgr-text);
  font-size: 1rem;
  background-color: var(--vgr-secondary-bg);
  border: none;
`

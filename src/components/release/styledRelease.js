import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--vgr-primary-bg);
  max-height: 90vh;
  overflow: auto;
  padding: 0.5rem;
  border-radius: 0.313rem;
  box-shadow: rgba(0, 7, 17, 0.5) 0px 0px 3px 0px;
  margin-right: 1rem;
  width: 21rem;

  .fas {
    color: white;
    cursor: pointer;
  }
`

export const MinimizeContainer = styled(Container)`
  position: relative;
  font-size: 0.875rem;
  overflow: hidden;
  width: 3.563rem;
  height: 18.75rem;
`

// Rotate
export const RotatedContent = styled.div`
  text-align: right;
  position: relative;
  width: 15.625rem;
  white-space: nowrap;
  transform-origin: left top 0px;
  -webkit-box-pack: center;
  transform: rotate(-90deg) translateX(-100%);
  padding: 0 3.438rem 1.25rem 0;
`

export const ReleaseHeading = styled.div`
  position: relative;
  color: var(--vgr-text);
`

export const ToggleIconMin = styled.div`
  position: absolute;
  left: 120%;
  top: 0;
`
// End Rotate

export const ToggleIconExp = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const VersionParagraph = styled.p`
  color: var(--vgr-text);
  font-size: 1.125rem;
`

export const VersionInput = styled.input`
  color: var(--vgr-text);
  font-size: 1.125rem;
  background-color: var(--vgr-primary-bg);
  border: none;
`

export const DescriptionInput = styled.input`
  color: var(--alt-text);
  font-size: 1rem;
  background-color: var(--vgr-primary-bg);
  border: none;
`

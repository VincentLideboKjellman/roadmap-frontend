import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--vgr-alt-bg);
  border-radius: 0.313rem;
  margin: 1rem 0;

  .fas {
    margin-left: auto;
    color: white;
    cursor: pointer;
  }
`

export const EntryHeading = styled.div`
  background-color: var(--vgr-primary-bg);
  display: flex;
  border-top-left-radius: 0.313rem;
  border-top-right-radius: 0.313rem;
  padding: 0.25rem 0.5rem;
`

export const EntryBody = styled.div`
  padding: 0.5rem;
  text-align: left;
  margin-left: 0.5rem;
`

export const IconWrapper = styled.div`
  display: flex;
  border: 1px solid red;
`

export const StatusWrapper = styled.div`
  margin-bottom: 1rem;
`

export const NameInput = styled.input`
  font-size: 1rem;
  color: var(--vgr-text);
  background-color: var(--vgr-primary-bg);
  border: none;
  width: 70%;
`

export const StatusInput = styled.input`
  color: var(--vgr-text);
  font-size: 1rem;
  background-color: var(--vgr-alt-bg);
  width: 130px;
  border: none;
`

export const ShortDescInput = styled.textarea`
  color: var(--vgr-text);
  font-size: 1rem;
  background-color: var(--vgr-alt-bg);
  border: none;
`

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const Button = styled.button`
  background-color: var(--vgr-btn);
  background-image: linear-gradient(to bottom, #4ab31f 0, #39791f 100%);
  color: var(--vgr-text);
  border-radius: 0.25rem;

  font-size: 0.8rem;
  padding: 0.4rem;
  cursor: pointer;
  margin-left: auto;
  border: none;
`

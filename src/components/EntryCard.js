import React from 'react'
import styled from 'styled-components'

const StyledEntryCard = styled.div`
  .entry-container {
    background-color: var(--vgr-alt-bg);
    border-radius: 5px;
    margin: 16px 0px;
  }

  .entry-header {
    background-color: var(--vgr-primary-bg);
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 4px 8px;
  }

  .entry-body {
    padding: 8px;
    text-align: left;
  }

  .name-input {
    font-size: 16px;
    color: var(--vgr-text);
    background-color: var(--vgr-primary-bg);
    border: none;
  }

  .status-label {
    margin: 8px;
  }

  .status-input {
    color: var(--vgr-text);
    font-size: 16px;
    background-color: var(--vgr-alt-bg);
    width: 130px;
    border: none;
  }

  .short-desc-input {
    margin: 8px;
    color: var(--vgr-text);
    font-size: 16px;
    background-color: var(--vgr-alt-bg);
    border: none;
  }

  .fas.fa-expand-alt {
    margin-left: auto;
  }
`

const EntryCard = ({
  entryId,
  entryName,
  status,
  shortDesc,
  extDesc,
  isInput,
  onChange,
}) => {
  const handleChange = (value, field) => {
    onChange(value, entryId, field)
  }

  return (
    <StyledEntryCard>
      <div className='entry-container'>
        <div className='entry-header'>
          {!isInput ? (
            <p className='entry-title'>{entryName}</p>
          ) : (
            <input
              className='name-input'
              type='text'
              value={entryName}
              onChange={(e) => {
                handleChange(e.target.value, 'entry_name')
              }}
            />
          )}
          <i className='fas fa-expand-alt'></i>
        </div>
        <div className='entry-body'>
          {!isInput ? (
            <div>
              <p>
                Status: <span className='entry-status'>{status}</span>
              </p>
              <p>{shortDesc}</p>
            </div>
          ) : (
            <div>
              <label htmlFor='status' className='status-label'>
                Status:{' '}
                <span>
                  <input
                    className='status-input'
                    type='text'
                    value={status}
                    onChange={(e) => {
                      handleChange(e.target.value, 'status')
                    }}
                  />
                </span>
              </label>
              <textarea
                rows='5'
                cols='20'
                className='short-desc-input'
                type='text'
                value={shortDesc}
                onChange={(e) => {
                  handleChange(e.target.value, 'short_desc')
                }}
              />
            </div>
          )}
        </div>
      </div>
    </StyledEntryCard>
  )
}

export default EntryCard

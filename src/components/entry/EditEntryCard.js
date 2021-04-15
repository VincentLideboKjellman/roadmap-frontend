import React, { useState } from 'react'
import {
  Container,
  EntryHeading,
  EntryBody,
  IconWrapper,
  StatusWrapper,
  NameInput,
  StatusInput,
  ShortDescInput,
  ButtonPosition,
  Button,
} from './styledEntry'

const EditEntryCard = ({
  categoryId,
  entryId,
  entryName,
  status,
  shortDesc,
  extDesc,
  onChange,
  onDelete,
  isNew,
}) => {
  const [newEntry, setNewEntry] = useState({
    entry_name: '',
    status: '',
    short_desc: '',
    extended_desc: '',
  })

  const handleChange = (value, field) => {
    onChange(value, entryId, field)
  }

  const handleAddChange = (value, field) => {
    let added = () => {
      switch (field) {
        case 'entry_name':
          return { ...newEntry, entry_name: value }
        case 'status':
          return { ...newEntry, status: value }
        case 'short_desc':
          return { ...newEntry, short_desc: value, extended_desc: value }
        case 'extended_desc':
          return { ...newEntry, extended_desc: value }
        default:
          return { ...newEntry }
      }
    }
    setNewEntry(added)
  }

  const handleAdd = () => {
    onChange(newEntry, categoryId)
    setNewEntry({
      entry_name: '',
      status: '',
      short_desc: '',
      extended_desc: '',
    })
  }

  const handleDelete = () => {
    onDelete(categoryId, entryId)
  }

  return (
    <>
      {isNew ? (
        <>
          <Container>
            <EntryHeading>
              <NameInput
                type='text'
                value={newEntry.entry_name}
                placeholder={'Skriv ny post titel här'}
                onChange={(e) => {
                  handleAddChange(e.target.value, 'entry_name')
                }}
              />
            </EntryHeading>

            <EntryBody>
              <StatusWrapper>
                <label htmlFor='status'>
                  Status:{' '}
                  <span>
                    <StatusInput
                      type='text'
                      value={newEntry.status}
                      placeholder={'Skriv ny post status här'}
                      onChange={(e) => {
                        handleAddChange(e.target.value, 'status')
                      }}
                    />
                  </span>
                </label>
              </StatusWrapper>
              <ShortDescInput
                rows='5'
                cols='20'
                type='text'
                value={newEntry.short_desc}
                placeholder={'Skriv ny post beskrivning här'}
                onChange={(e) => {
                  handleAddChange(e.target.value, 'short_desc')
                }}
              />
            </EntryBody>
          </Container>
          <ButtonPosition>
            <Button onClick={handleAdd}>Lägg till</Button>
          </ButtonPosition>
        </>
      ) : (
        <Container>
          <EntryHeading>
            <NameInput
              type='text'
              value={entryName}
              onChange={(e) => {
                handleChange(e.target.value, 'entry_name')
              }}
            />

            <i className='fas fa-trash' onClick={handleDelete}></i>
            <i className='fas fa-expand-alt'></i>
          </EntryHeading>
          <EntryBody>
            <StatusWrapper>
              <label htmlFor='status'>
                Status:{' '}
                <span>
                  <StatusInput
                    type='text'
                    value={status}
                    onChange={(e) => {
                      handleChange(e.target.value, 'status')
                    }}
                  />
                </span>
              </label>
            </StatusWrapper>
            <ShortDescInput
              rows='5'
              cols='20'
              type='text'
              value={shortDesc}
              onChange={(e) => {
                handleChange(e.target.value, 'short_desc')
              }}
            />
          </EntryBody>
        </Container>
      )}
    </>
  )
}

export default EditEntryCard

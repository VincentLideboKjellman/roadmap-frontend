import React, { useState } from 'react'
import {
  CategoryContainer,
  CategoryHeader,
  CategoryBody,
  CategoryInput,
} from './styledCategory'
import styled from 'styled-components'

const Button = styled.button`
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

const EditCategoryCard = ({
  categoryId,
  categoryName,
  onChange,
  onDelete,
  isNew,
  children,
}) => {
  const [newCategory, setNewCategory] = useState('')

  const [toggle, setToggle] = useState(false)

  const toggleFunction = () => {
    setToggle(toggle === true ? false : true)
  }

  const handleChange = (value, field) => {
    onChange(value, categoryId, field)
  }

  const handleAddChange = (value) => {
    setNewCategory(value)
  }

  const handleAdd = () => {
    onChange(newCategory, categoryId)
    setNewCategory('')
  }

  const handleDelete = () => {
    console.log(categoryId)
    onDelete(categoryId)
  }

  return (
    <CategoryContainer>
      {isNew ? (
        <CategoryHeader>
          <CategoryInput
            type='text'
            value={newCategory}
            placeholder={'Skriv ny kategori här'}
            onChange={(e) => {
              handleAddChange(e.target.value)
            }}
          />

          <Button onClick={handleAdd}>Lägg till</Button>
        </CategoryHeader>
      ) : (
        <>
          <CategoryHeader>
            <CategoryInput
              type='text'
              value={categoryName}
              onChange={(e) => {
                handleChange(e.target.value)
              }}
            />

            <i className='fas fa-trash' onClick={handleDelete}></i>

            {toggle ? (
              <i className='fas fa-minus' onClick={toggleFunction}></i>
            ) : (
              <i className='fas fa-plus' onClick={toggleFunction}></i>
            )}
          </CategoryHeader>
          {toggle ? <CategoryBody>{children}</CategoryBody> : null}
        </>
      )}
    </CategoryContainer>
  )
}

export default EditCategoryCard

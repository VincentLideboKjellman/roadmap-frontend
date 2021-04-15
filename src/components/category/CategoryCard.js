import React, { useState } from 'react'
import {
  CategoryContainer,
  CategoryHeader,
  CategoryBody,
} from './styledCategory'

const CategoryCard = ({ categoryName, children }) => {
  const [toggle, setToggle] = useState(false)

  const toggleFunction = () => {
    setToggle(toggle === true ? false : true)
  }

  return (
    <CategoryContainer>
      <CategoryHeader>
        <p>{categoryName}</p>

        {toggle ? (
          <i className='fas fa-minus' onClick={toggleFunction}></i>
        ) : (
          <i className='fas fa-plus' onClick={toggleFunction}></i>
        )}
      </CategoryHeader>

      {toggle ? <CategoryBody>{children}</CategoryBody> : null}
    </CategoryContainer>
  )
}

export default CategoryCard

import React, { useState } from 'react'
import styled from 'styled-components'

const StyledModal = styled.div`
  button {
    color: var(--vgr-text);
    border-radius: 4px;
    font-size: 0.8rem;
    padding: 0.4rem 1.5rem;
    line-height: 150%;
    cursor: pointer;
    margin: 0 8px;
    border: none;
  }

  .container {
    padding: 16px;
    text-align: center;
  }

  .modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 200px;
    z-index: 10;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fefefe;
    color: black;
    /* margin: 5% auto 15% auto; */
    padding: 16px 0;
    border: 1px solid #888;
    width: 100%;
    height: 100%;
  }

  .clear {
    color: black;
  }

  .danger {
    background-color: var(--vgr-danger-btn);
  }
`

const Modal = ({ id, title, variant, content, onConfirm }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.value === 'confirm') {
      onConfirm(id)
    }
    setIsOpen(!isOpen)
  }

  return (
    <StyledModal>
      <button className={variant} onClick={handleClick}>
        {title}
      </button>
      {isOpen && (
        <div className='modal'>
          <form className='modal-content'>
            <div className='container'>
              <p>{content}</p>
            </div>
            <div>
              <button className='clear' onClick={handleClick}>
                Ångra
              </button>
              <button className='danger' value='confirm' onClick={handleClick}>
                Bekräfta
              </button>
            </div>
          </form>
        </div>
      )}
    </StyledModal>
  )
}

export default Modal

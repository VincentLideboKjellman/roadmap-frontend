import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/vgr-logotyp-neg.png'
import projectIcon from '../assets/images/vgr-trekantig-logotyp.png'

const StyledNavbar = styled.div`
  .nav-container {
    background-color: var(--vgr-secondary-bg);
    position: fixed;
    top: 3rem;
    left: 0px;
    width: 5rem;
    height: 100%;
    transition: transform 300ms ease-in-out 0s;
    transform: translate3d(0px, 0px, 0px);
    z-index: 10;
    padding: 8px;
  }

  .project-icon {
    width: 100%;
    height: 70px;
    background-color: var(--vgr-primary-bg);
    color: white;
    padding: 4px;
    border: 1px solid #384453;
    border-radius: 8px;
    cursor: pointer;
  }
  .project-image {
    width: 100%;
  }

  a {
    color: var(--vgr-text);
    text-decoration: none;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className='nav-container'>
        <div className='project-icon'>
          <img
            className='project-image'
            src={projectIcon}
            alt='vgr project icon'
          />
          <Link to='/'>Project</Link>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar

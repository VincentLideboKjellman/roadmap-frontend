import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/vgr-logotyp-neg.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 0 1rem;
`

const Group = styled.div`
  display: flex;
  align-items: center;
`

const GroupItem = styled.div`
  margin-right: 1rem;
`

const Logo = styled.img`
  height: 3rem;
`

const Title = styled.h2`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 300;
  color: var(--vgr-text);
  font-size: 1.125rem;
`

const NavItem = styled.div`
  color: var(--vgr-text);
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  width: 4rem;
  padding: 0.2rem;
  margin-right: 1rem;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--vgr-text);
  }
`

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <Group>
        <GroupItem>
          <Logo src={logo} alt='VGR Logo' />
        </GroupItem>
        <GroupItem>
          <Title>Roadmap</Title>
        </GroupItem>
      </Group>
      {userInfo && (
        <Group>
          <NavItem>
            <Link to='/admin/releases'>Releases</Link>
          </NavItem>
          {userInfo && userInfo.isAdmin ? (
            <NavItem>
              <Link to='/admin/users'>Users</Link>
            </NavItem>
          ) : null}

          <NavItem>
            <p onClick={logoutHandler}>Logga ut</p>
          </NavItem>
        </Group>
      )}
    </Container>
  )
}

export default Header

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Message from '../components/Message'
import LoaderComponent from '../components/LoaderComponent'
import Modal from '../components/Modal'
import { listUsers, deleteUser } from '../actions/userActions'
import { USER_REGISTER_RESET } from '../constants/userConstants'

const Container = styled.div`
  width: 92vw;
`

const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--vgr-text);
`

const Form = styled.form`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  background-color: var(--vgr-primary-bg);
`

const FormItem = styled.div`
  margin-right: 0.25rem;
`

const Label = styled.label`
  margin: 0 0.5rem;
  color: var(--vgr-text);
`

const Button = styled.button`
  color: var(--vgr-text);
  border-radius: 0.25;
  font-size: 0.8rem;
  padding: 0.4rem 1.5rem;
  line-height: 150%;
  cursor: pointer;
  margin: 0 0.5rem;
  border: none;

  ${(props) =>
    props.continue &&
    css`
      background-color: var(--vgr-btn);
      background-image: linear-gradient(to bottom, #4ab31f 0, #39791f 100%);
    `}

  ${(props) =>
    props.danger &&
    css`
      background-color: #f44336;
    `}
`

const Table = styled.table`
  width: 20%;
  margin-left: 0.5rem;
  color: var(--vgr-text);
  width: 100%;

  tr:nth-child(odd) {
    background-color: var(--vgr-primary-bg);
  }

  tr:nth-child(even) {
    background-color: var(--vgr-secondary-bg);
  }
`

const ListUsersScreen = ({ history }) => {
  const [newFullName, setNewFullName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userRegister = useSelector((state) => state.userRegister)
  const {
    loading: loadingRegister,
    error: errorRegister,
    success: successRegister,
  } = userRegister

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (!userInfo && userInfo.isAdmin) {
      history.push('/login')
    } else {
      if (successRegister) {
        dispatch({ type: USER_REGISTER_RESET })
        setNewFullName('')
        setNewEmail('')
        setNewPassword('')
      } else {
        dispatch(listUsers())
        console.log(users)
      }
    }

    // if (userInfo && userInfo.isAdmin) {
    //   dispatch(listUsers())
    // } else {
    //   history.push('/login')
    // }
  }, [dispatch, history, successDelete, userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
    }
  }

  const temp = () => {
    console.log('temp')
  }

  return (
    <Container>
      {/* {loadingCreate && <LoaderComponent />}
      {errorCreate && <Message danger children={errorCreate} />}

      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <Message danger children={error} />
      ) : ( */}
      {/* <Col> */}
      <Form>
        {/* <Row> */}
        <FormItem>
          <Label htmlFor=''>Full name:</Label>
          <input
            type='text'
            placeholder='Enter full name'
            value={'fullName'}
            // onChange={(e) => setReleaseName(e.target.value)}
            onChange={(e) => temp}
          ></input>
        </FormItem>

        <FormItem>
          <Label htmlFor=''>Email:</Label>
          <input
            type='text'
            placeholder='Enter email'
            value={'email'}
            // onChange={(e) => setReleaseDesc(e.target.value)}
            onChange={(e) => temp}
          ></input>
        </FormItem>

        <FormItem>
          <Label htmlFor=''>Password:</Label>
          <input
            type='text'
            placeholder='Enter Password'
            value={'password'}
            // onChange={(e) => setReleaseDesc(e.target.value)}
            onChange={(e) => temp}
          ></input>
        </FormItem>

        <FormItem>
          <Label htmlFor=''>Confirm Password:</Label>
          <input
            type='text'
            placeholder='Enter Password again'
            value={'confirmed password'}
            // onChange={(e) => setReleaseDesc(e.target.value)}
            onChange={(e) => temp}
          ></input>
        </FormItem>

        <Button continue type='submit'>
          Create
        </Button>
        {/* </Row> */}
      </Form>
      {/* <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                {user.isAdmin ? (
                  <i className='fas fa-check' style={{ color: 'green' }}></i>
                ) : (
                  <i className='fas fa-times' style={{ color: 'red' }}></i>
                )}
              </td>

              <td>
                <Button continue>Redigera</Button>

                <Button danger onClick={() => deleteHandler(user._id)}>
                  Ta bort
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </Container>
  )
}

export default ListUsersScreen

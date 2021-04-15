import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  listReleases,
  createRelease,
  deleteRelease,
} from '../actions/releaseActions'
import styled from 'styled-components'
import Message from '../components/Message'
import LoaderComponent from '../components/LoaderComponent'
import Modal from '../components/Modal'
import { RELEASE_CREATE_RESET } from '../constants/releaseConstants'

const StyledAdmin = styled.div`
  .position {
    width: 92vw;
  }

  .col-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--vgr-text);
  }

  .row-container {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .create {
    margin-bottom: 16px;
    background-color: var(--vgr-primary-bg);
  }

  .list-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .list-items {
    width: 100%;
  }

  tr:nth-child(odd) {
    background-color: var(--vgr-primary-bg);
  }
  tr:nth-child(even) {
    background-color: var(--vgr-secondary-bg);
  }

  td {
    width: 20%;
    margin-left: 8px;
    display: flex;
    justify-content: space-between;
  }

  td:nth-child(5) {
    justify-content: flex-end;
  }

  .label {
    margin: 0 8px;
  }

  .btn {
    color: var(--vgr-text);
    border-radius: 4px;
    font-size: 0.8rem;
    padding: 0.4rem 1.5rem;
    line-height: 150%;
    cursor: pointer;
    margin: 0 8px;
    border: none;
  }

  .primary-btn {
    background-color: var(--vgr-btn);
    background-image: linear-gradient(to bottom, #4ab31f 0, #39791f 100%);
  }

  .danger-btn {
    background-color: var(--vgr-danger-btn);
  }
`

const AdminScreen = ({ history }) => {
  const [releaseName, setReleaseName] = useState('')
  const [releaseDesc, setReleaseDesc] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const releaseList = useSelector((state) => state.releaseList)
  const { loading, error, releases } = releaseList

  const releaseCreate = useSelector((state) => state.releaseCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = releaseCreate

  const releaseDelete = useSelector((state) => state.releaseDelete)
  const { success: successDelete } = releaseDelete

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (successCreate) {
        dispatch({ type: RELEASE_CREATE_RESET })
        setReleaseName('')
        setReleaseDesc('')
      } else {
        dispatch(listReleases())
      }
    }
  }, [dispatch, userInfo, history, successCreate])

  const submitCreateHandler = (e) => {
    e.preventDefault()
    dispatch(
      createRelease({
        release_name: releaseName,
        release_desc: releaseDesc,
      })
    )
  }

  const deleteHandler = (id) => {
    dispatch(deleteRelease(id))
  }

  return (
    <StyledAdmin>
      <div className='position'>
        {loadingCreate && <LoaderComponent />}
        {errorCreate && <Message danger children={errorCreate} />}

        {loading ? (
          <LoaderComponent />
        ) : error ? (
          <Message danger children={error} />
        ) : (
          <div>Admin</div>
        )}
      </div>
    </StyledAdmin>
  )
}

export default AdminScreen

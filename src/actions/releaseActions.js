import axios from 'axios'
import {
  RELEASE_LIST_REQUEST,
  RELEASE_LIST_SUCCESS,
  RELEASE_LIST_FAIL,
  RELEASE_DETAILS_REQUEST,
  RELEASE_DETAILS_SUCCESS,
  RELEASE_DETAILS_FAIL,
  RELEASE_DELETE_REQUEST,
  RELEASE_DELETE_SUCCESS,
  RELEASE_DELETE_FAIL,
  RELEASE_CREATE_REQUEST,
  RELEASE_CREATE_SUCCESS,
  RELEASE_CREATE_FAIL,
  RELEASE_UPDATE_REQUEST,
  RELEASE_UPDATE_SUCCESS,
  RELEASE_UPDATE_FAIL,
} from '../constants/releaseConstants'
import { logout } from './userActions'

export const listReleases = () => async (dispatch) => {
  try {
    dispatch({ type: RELEASE_LIST_REQUEST })

    const config = {
      baseURL: 'http://localhost:5000',
    }

    const { data } = await axios.get('/api/releases', config)

    dispatch({
      type: RELEASE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RELEASE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listReleaseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: RELEASE_DETAILS_REQUEST })

    const config = {
      baseURL: 'http://localhost:5000',
    }

    const { data } = await axios.get(`/api/releases/${id}`, config)

    dispatch({
      type: RELEASE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RELEASE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteRelease = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RELEASE_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      baseURL: 'http://localhost:5000',
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/releases/${id}`, config)

    dispatch({
      type: RELEASE_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: RELEASE_DELETE_FAIL,
      payload: message,
    })
  }
}

export const createRelease = (release) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RELEASE_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      baseURL: 'http://localhost:5000',
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(`/api/releases`, release, config)

    dispatch({
      type: RELEASE_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: RELEASE_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateRelease = (release) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RELEASE_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      baseURL: 'http://localhost:5000',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/releases/${release._id}`,
      release,
      config
    )

    dispatch({
      type: RELEASE_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: RELEASE_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: RELEASE_UPDATE_FAIL,
      payload: message,
    })
  }
}

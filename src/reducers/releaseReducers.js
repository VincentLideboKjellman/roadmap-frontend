import {
  RELEASE_LIST_REQUEST,
  RELEASE_LIST_SUCCESS,
  RELEASE_LIST_FAIL,
  RELEASE_DELETE_REQUEST,
  RELEASE_DELETE_SUCCESS,
  RELEASE_DELETE_FAIL,
  RELEASE_CREATE_REQUEST,
  RELEASE_CREATE_SUCCESS,
  RELEASE_CREATE_FAIL,
  RELEASE_CREATE_RESET,
  RELEASE_UPDATE_REQUEST,
  RELEASE_UPDATE_SUCCESS,
  RELEASE_UPDATE_FAIL,
  RELEASE_UPDATE_RESET,
  RELEASE_DETAILS_REQUEST,
  RELEASE_DETAILS_SUCCESS,
  RELEASE_DETAILS_FAIL,
} from '../constants/releaseConstants'

export const releaseListReducer = (state = { releases: [] }, action) => {
  switch (action.type) {
    case RELEASE_LIST_REQUEST:
      return { loading: true, releases: [] }
    case RELEASE_LIST_SUCCESS:
      return { loading: false, releases: action.payload }
    case RELEASE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const releaseDetailsReducer = (state = { release: {} }, action) => {
  switch (action.type) {
    case RELEASE_DETAILS_REQUEST:
      return { loading: true, ...state }
    case RELEASE_DETAILS_SUCCESS:
      return { loading: false, release: action.payload }
    case RELEASE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const releaseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case RELEASE_DELETE_REQUEST:
      return { loading: true }
    case RELEASE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case RELEASE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const releaseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RELEASE_CREATE_REQUEST:
      return { loading: true }
    case RELEASE_CREATE_SUCCESS:
      return { loading: false, success: true, release: action.payload }
    case RELEASE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case RELEASE_CREATE_RESET:
      return { release: {} }
    default:
      return state
  }
}

export const releaseUpdateReducer = (state = { release: {} }, action) => {
  switch (action.type) {
    case RELEASE_UPDATE_REQUEST:
      return { loading: true }
    case RELEASE_UPDATE_SUCCESS:
      return { loading: false, success: true, release: action.payload }
    case RELEASE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case RELEASE_UPDATE_RESET:
      return { release: {} }
    default:
      return state
  }
}

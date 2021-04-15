import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  releaseListReducer,
  releaseDetailsReducer,
  releaseDeleteReducer,
  releaseCreateReducer,
  releaseUpdateReducer,
} from './reducers/releaseReducers'
import {
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userDeleteReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  releaseList: releaseListReducer,
  releaseDetails: releaseDetailsReducer,
  releaseDelete: releaseDeleteReducer,
  releaseCreate: releaseCreateReducer,
  releaseUpdate: releaseUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

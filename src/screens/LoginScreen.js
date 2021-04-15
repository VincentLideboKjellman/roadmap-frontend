import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import styled from 'styled-components'
import Message from '../components/Message'
import LoaderComponent from '../components/LoaderComponent'

const StyledLoginCard = styled.div`
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px 0 30px 0;
  }

  input,
  .btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none; /* remove underline from anchors */
  }

  input:hover,
  .btn:hover {
    opacity: 1;
  }

  input[type='submit'] {
    background-color: #13aa55;
    color: white;
    cursor: pointer;
    background-image: linear-gradient(to bottom, #4ab31f 0, #39791f 100%);
  }

  input[type='submit']:hover {
    background-color: #13aa54;
  }
  h1 {
    text-align:center;
  }
  p {
    text-align: center;
  }

  .col {
    align-self: center;
    float: left;
    width: 50%;
    margin: auto;
    padding: 0 50px;
    margin-top: 6px;
  }
  .row{
    display:flex;
  }
  .row:after {
    content: '';
    display: table;
    clear: both;
  }

  .vl {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border: 2px solid #ddd;
    height: 175px;
  }

  .vl-innertext {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 8px 10px;
  }

  .hide-md-lg {
    display: none;
  }

  .bottom-container {
    text-align: center;
    background-color: #666;
    border-radius: 0px 0px 4px 4px;
  }

  @media screen and (max-width: 650px) {
    .col {
      width: 100%;
      margin-top: 0;
    }

    .vl {
      display: none;
    }

    .hide-md-lg {
      display: block;
      text-align: center;
    }
  }
`

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <StyledLoginCard>
      <div className='container'>
        {error && <Message variant='danger' children={error} />}
        {loading && <LoaderComponent />}
        <form onSubmit={submitHandler} className='form-signin'>
          <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
          <div className='row'>
            <div className='col'>
              <input
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
                required
              />
              <input
                type='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
                required
              />
              <input type='submit' value='Login' />
            </div>
          </div>
        </form>
      </div>
    </StyledLoginCard>
  )
}

export default LoginScreen

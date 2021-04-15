import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LoginScreen from './screens/LoginScreen'
import AdminScreen from './screens/AdminScreen'
import ListReleasesScreen from './screens/ListReleasesScreen'
import ListUsersScreen from './screens/ListUsersScreen'
import EditReleaseScreen from './screens/EditReleaseScreen'
import ReleaseScreen from './screens/ReleaseScreen'

const Main = styled.main`
  position: absolute;
  top: 3rem;
  left: 5rem;
  margin: 1rem;
`

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Main>
        <Route path='/login' component={LoginScreen} />
        {/* <Route path='/admin' component={AdminScreen} /> */}
        <Route path='/admin/releases' component={ListReleasesScreen} exact />
        <Route path='/admin/users' component={ListUsersScreen} />
        <Route path='/admin/releases/:id' component={EditReleaseScreen} exact />
        <Route path='/' component={ReleaseScreen} exact />
      </Main>
    </Router>
  )
}

export default App

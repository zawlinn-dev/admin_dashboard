import React from 'react'
// import Typography from '@mui/material/Typography'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import HomeComp from './assets/pages/home/HomeComp'
import UsersComp from './assets/pages/users/UsersComp'
import SingleComp from './assets/pages/single/SingleComp'
import NewComp from './assets/pages/new/NewComp'
import NotFoundComp from './assets/pages/404/NotFoundComp'

const App = () => {
  return (
    <>
      {/* <Typography variant="h6" color="primary"> Hello React Admin Dashboard Project </Typography */}

      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomeComp />} />
            <Route path='users'>
              <Route index element={<UsersComp />} />
              <Route path=':userId' element={<SingleComp />} />
              <Route path='new' element={<NewComp />} />
            </Route>
            <Route path='*' element={<NotFoundComp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

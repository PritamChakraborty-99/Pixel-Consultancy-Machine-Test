import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from '../Pages/login/LoginForm'
import SignUpForm from '../Pages/SignUp/SignUpForm'
import SearchPage from '../Pages/AfterLoginSearchPage/SearchPage'

const Routing = () => {

  return (
      <BrowserRouter>
          <Routes>
            <Route path="" element={<SignUpForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path = "/search" element={<SearchPage/>} />
          </Routes> 
      </BrowserRouter>
  )
}

export default Routing
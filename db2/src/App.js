import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import AllMovies from './pages/AllMovies'
import OneMovie from './pages/OneMovie'
import Form from "./pages/Form"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route part="/" element={ <SharedLayout /> }>
          <Route index element={ <Home /> } />
          <Route path="/movies" element={ <AllMovies /> } />
          <Route path="/movies/:movieId" element={ <OneMovie /> } />
          <Route path="/form" element={ <Form /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
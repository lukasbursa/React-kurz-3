import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Movies from './pages/Movies'
import Serials from './pages/Serials'
import Error404 from './pages/Error404'
import SharedLayout from "./pages/SharedLayout"
import OneMovie from './components/OneMovie'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout /> } >
          <Route index element={ <Home /> } />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/movies/:movieId" element={ <OneMovie /> } />
          <Route path="/serials" element={ <Serials /> } />
          <Route path="*" element={ <Error404 /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/homepage/Home'
import MovieList from './components/movielist/MovieList'
import Movie from './pages/movie/Movie'
import ErrorHandler from './pages/error/Error'

function App() {

  return (
    <>
      
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/:type' element={<MovieList/>} />
            <Route path='/movie/:id' element={<Movie/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

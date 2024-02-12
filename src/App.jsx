import React from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar'
import MovieList from './components/MovieList/MovieList'
import Fire from "./assets/fire.png"
import Party from "./assets/partying-face.png"
import Star from "./assets/glowing-star.png"

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Toprated" emoji={Star} />
      <MovieList type="New/Upcoming" title="New/Upcoming" emoji={Party} />
    </div>
  )
}

export default App
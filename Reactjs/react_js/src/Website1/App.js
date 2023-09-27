import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Services from './Services'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Services' Component={Services} />
          <Route path='/About' Component={About} />
          <Route path='/Contact' Component={Contact} />
          <Route path='*' Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

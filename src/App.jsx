
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import "../src/Components/Navbar.scss"
import '../src/Pages/Pages.css'
import React from 'react'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/cart' element = {<Cart />} />
    </Routes>
    </>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router'
import Hero from './Components/Hero'
import Hero1 from './Components/hero1'
import Hero2 from './Components/hero2'
import HomeSlider from './Components/homeSlider'
import Share from './Components/share'
import Footer from './Components/footer'
import HomePage from './Components/HomePage'
import Layout from './Components/Layout'
import Contect from './Components/Contect'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<h1>About Page</h1>} />
            <Route path='contact' element={<Contect/>} />
            <Route path='blog' element={<h1>Blog Page</h1>} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

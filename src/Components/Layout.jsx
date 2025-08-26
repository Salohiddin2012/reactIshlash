import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './footer'

export default function Layout() {
  return (
    <div>
      <Header/>
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
}

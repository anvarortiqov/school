import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Staff from './pages/Staff'
import Blogs from './pages/Blogs'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {


  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/staff' element={<Staff/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />     
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App

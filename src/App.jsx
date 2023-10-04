import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Layout from './components/Layout'
import Footer from './components/Footer'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Route>
        <Route path='*' element={<h2>Page not found   </h2>} />

    </Routes>
  </BrowserRouter>
}

export default App
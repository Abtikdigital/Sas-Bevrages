import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Sections/Navbar'
import Product from './Pages/Product'
import Team from './Pages/Team'
import Contact from './Pages/Contact'
import ScrollToUp from './utils/ScrollToUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <ScrollToUp/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Sections/Navbar'
import Product from './Pages/Product'
import Team from './Pages/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/' element={<Team/>}/>
        <Route path='/' element={<Product/>}/>
        <Route path='/' element={<Contact/>}/>



      </Routes>
    </BrowserRouter>
  )
}

export default App

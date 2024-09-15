import React from 'react'
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contatc from './Components/Contatc'
import Service from './Components/Service'
import PageNotFound from './Components/PageNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
<Router>
  
  <Routes>
    <Route path='/' element={<Header/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact/:name' element={<Contatc/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
    </Route>

    </Routes>
    <Footer/>
</Router>
    </>
  )
}

export default App
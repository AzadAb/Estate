import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonals from './Components/Testimonals'
import Contact from './Components/Contact'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonals />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

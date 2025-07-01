import React from 'react'
import NavBar from './components/NavBar'
import Process from './components/Process'
import Hero from './components/Hero'
import Menu from './components/Menu'
import GetApp from './components/GetApp'
import Testimonial from './components/Testimonial'
import Newsletter from './components/NewsLettter'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Process />
      <Menu />
      <GetApp />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
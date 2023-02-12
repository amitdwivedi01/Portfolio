import React from 'react'
import { About, Header, Footer, Skills, Testimonals, Work } from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonals />
      <Footer />
    </div>
  )
}

export default App
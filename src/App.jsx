import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Login from './components/Login'
import FAQ from './components/Faq'
import Reviews from './components/Reviews'
import Cards from './components/Cards'
import Testimonial from './components/Testimonial'
import Questions from './components/Questions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#24b477] min-h-screen flex flex-col justify-between'>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Reviews/>
      <Testimonial/>
      <FAQ/>
      <Login/>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default App

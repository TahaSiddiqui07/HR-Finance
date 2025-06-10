import React from 'react'

const Navbar = () => {
  return (
    <div className='  w-full mb:py-8 md:flex  bg-transparent text-white flex justify-between items-center p-4 h-16'>
      <div className="logo font-bold text-2xl">HR Finance</div>
      <ul className='flex justify-between gap-4'>
        <li className=' font-medium items-center hover:text-emerald-300  '>Why HR Finance</li>
        <li className=' font-medium items-center hover:text-emerald-300 '>Testimonials</li>
        <li className=' font-medium items-center hover:text-emerald-300 '>FAQ</li>
        <li className=' font-medium items-center hover:text-emerald-300 '>Contact Us</li>
        <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-1 text-center me-0 mb-4">Login</button>
        <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-0 text-center me-2 mb-4">SignUp</button>
        <div  className="button">moon
          
        </div>
      </ul>


    </div>
  )
}

export default Navbar

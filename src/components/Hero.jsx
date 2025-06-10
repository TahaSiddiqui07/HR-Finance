import React from 'react'

const Hero = () => {
    return (
        <>
            <div className=' text-white flex flex-col justify-center items-center h-[45vh]'>
                <div className='font-bold text-3xl'>HR Finance </div>
                <p>We provide smart, secure, and tailored financial solutions to help you grow</p>

                <div>

                    <button  type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>

                </div>

            </div>
            <div className="bg-white h-1 opacity-20"></div>


            
        </>
    )
}

export default Hero


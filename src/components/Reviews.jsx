import React from 'react'

const Reviews = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
                <h1 className='text-2xl my-1 font-bold text-center'>What Experts Says</h1>
                <p>Gaining Markets</p>
                    
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-green-600 border-b border-green-700 md:rounded-es-lg md:border-b-0 md:border-e">
                    <blockquote class="max-w-2xl mx-auto mb-4">
                        <h3 class="text-lg font-semibold">Mindblowing workflow</h3>
                        <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center">
                        <div class="flex items-center justify-center w-9 h-9 rounded-full bg-white text-green-700 font-bold">J</div>
                        <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Jese Leos</div>
                            <div class="text-sm text-white/70">Software Engineer at Facebook</div>
                        </div>
                    </figcaption>
                </figure>
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-green-600 border-b border-green-700 md:rounded-es-lg md:border-b-0 md:border-e">
                    <blockquote class="max-w-2xl mx-auto mb-4">
                        <h3 class="text-lg font-semibold">Mindblowing workflow</h3>
                        <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center">
                        <div class="flex items-center justify-center w-9 h-9 rounded-full bg-white text-green-700 font-bold">J</div>
                        <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Jese Leos</div>
                            <div class="text-sm text-white/70">Software Engineer at Facebook</div>
                        </div>
                    </figcaption>
                </figure>
                </div>
                    
                    <div className="bg-white h-1 opacity-20"></div>
    </>
  )
}

export default Reviews

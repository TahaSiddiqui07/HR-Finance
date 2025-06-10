import React from 'react'

const Testimonial = () => {
    return (
        <>

            <div className=" justify-center text-center">
                <h1 className='font-bold text-2xl text-white'>Our Testimonials</h1>
                <p className='text-lg text-white'>gaining recognition from leading market analysts and researchers.</p>
            </div>

            <div class="grid mb-8 border border-green-700 rounded-lg shadow-xs md:mb-12 md:grid-cols-2 bg-green-600 text-white">
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-green-600 border-b border-green-700 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                    <blockquote class="max-w-2xl mx-auto mb-4">
                        <h3 class="text-lg font-semibold">Very easy this was to integrate</h3>
                        <p class="my-4">If you care for your time, I hands down would go with this."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center">
                        <div class="flex items-center justify-center w-9 h-9 rounded-full bg-white text-green-700 font-bold">B</div>
                        <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Bonnie Green</div>
                            <div class="text-sm text-white/70">Developer at Open AI</div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-green-600 border-b border-green-700 md:rounded-se-lg">
                    <blockquote class="max-w-2xl mx-auto mb-4">
                        <h3 class="text-lg font-semibold">Solid foundation for any project</h3>
                        <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center">
                        <div class="flex items-center justify-center w-9 h-9 rounded-full bg-white text-green-700 font-bold">R</div>
                        <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Roberta Casas</div>
                            <div class="text-sm text-white/70">Lead designer at Dropbox</div>
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
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-green-600 border-green-700 rounded-b-lg md:rounded-se-lg">
                    <blockquote class="max-w-2xl mx-auto mb-4">
                        <h3 class="text-lg font-semibold">Efficient Collaborating</h3>
                        <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center">
                        <div class="flex items-center justify-center w-9 h-9 rounded-full bg-white text-green-700 font-bold">J</div>
                        <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Joseph McFall</div>
                            <div class="text-sm text-white/70">CTO at Google</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="bg-white h-1 opacity-20"></div>
        </>
    )
}

export default Testimonial

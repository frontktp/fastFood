import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/75 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods</span> Delivered</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://i.namu.wiki/i/1EDvyVH0IZjtAA_d3N0fOgcQ0W-41UIPYYplbmBWG5bMEvC96171vKeMCLYa328tN5O9hqIb8JFqsRVetDHntw.webp" alt="deliciousburger" />
      </div>

    </div>
  )
}

export default Hero
import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#cdea68] rounded-t-[30px] text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tight leading-[3.5vw] '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='w-full
       border-t-[2px] border-[#a3b26b] pt-5 mt-16 mb-5 flex'>
        <div className='w-1/2'>
          <h1 className='text-6xl tracking-tight '>Our Approach:</h1>
          <button className='px-8 mt-6 py-4 bg-zinc-900 text-white rounded-full flex items-center gap-5 uppercase'>Read More
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[30vw] rounded-2xl overflow-hidden'>
          <img className=' h-full w-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
       </div>
    </div>
  )
}

export default About
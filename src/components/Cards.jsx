import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center gap-5 px-12' >
      <div className='cardcontainer w-1/2 h-[60vh]'>
        <div className='card relative w-full h-full  bg-[#004d43] rounded-2xl flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute border border-[#cdea68] text-[#d3f752] rounded-full px-2 py-1 left-10 bottom-10 font-bold'> &copy;2019-2022 </button>
        </div>
      </div>

      <div className='cardcontainer w-1/2 h-[60vh] flex gap-5 '>
      <div className='card relative w-1/2 h-full  bg-[#2a3332] rounded-2xl flex items-center justify-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute border   rounded-full px-3 py-1 left-10 bottom-10  '>RATING 5.0 ON CLUTCH </button>
      </div>
      <div className='card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute border  rounded-full px-3 py-1 left-10 bottom-10 f '> BUSINESS BOOTCAMP ALUMINI </button>
      </div>
      </div>
    </div>
  )
}

export default Cards
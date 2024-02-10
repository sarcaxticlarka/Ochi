import { motion } from 'framer-motion'
import React from 'react'
 

function Marquee() {
   
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1"  className='w-full rounded-t-[20px]  py-24 bg-[#004d43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex font-extrabold gap-5  whitespace-nowrap overflow-hidden uppercase'>
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear",duration:8}}
          className='text-[17vw] leading-none font-["Neue_Montreal"] pr-5'>WE are Ochi</motion.h1> 
          <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear",duration:8}}
          className='text-[17vw] leading-none font-["Neue_Montreal"]'>WE are Ochi</motion.h1>  
         
      </div>
    </div>
  )
}

export default Marquee
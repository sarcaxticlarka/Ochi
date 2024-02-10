import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className='w-full py-20'>
      <div className='w-full px-16 text-black border-b-2 pb-12 border-zinc-300'>
        <h1 className='text-[4vw] tracking-tight font-["Neue_Montreal"] '>Featured Projects</h1>
      </div>
      <div>
        <div className="cards w-full px-16 py-24 flex  gap-10 ">


          <div onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} className='cardcontainer w-1/2 h-[75vh] relative  '>
            <h1 className='absolute flex z-99 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#d4fa4a] text-[7vw] font-extrabold font-["Neue_Montreal"] leading-none tracking-tighter  overflow-hidden z-10 '>
              {"FYDE".split('').map((item, index) =>
                <motion.span key={index} initial={{ y: "100%" }} animate={hoveredIndex === 0 ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }} className='inline-block '>
                  {item}
                </motion.span>
              )}
            </h1>
            <div className='px-3 items-center gap-2 pb-2 text-black flex'>
              <div className='h-3 w-3 bg-slate-900 rounded-full justify-center items-center'></div>
              <h5>FYDE</h5>
            </div>
            <div className=' card w-full h-full overflow-hidden rounded-xl'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
              
            </div>
          </div>

          <div onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(null)} className='cardcontainer w-1/2 h-[75vh] relative  '>
            <h1 className='absolute flex z-99 right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#d4fa4a] text-[7vw] font-extrabold font-["Neue_Montreal"] leading-none tracking-tighter  overflow-hidden '>
              {"VISE".split('').map((item, index) =>
                <motion.span key={index} initial={{ y: "100%" }} animate={hoveredIndex === 1 ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }} className='inline-block '>
                  {item}
                </motion.span>
              )}
            </h1>
            <div className='px-3 items-center gap-2 pb-2 text-black flex'>
              <div className='h-3 w-3 bg-slate-900 rounded-full justify-center items-center'></div>
              <h5>VISE</h5>
            </div>

            <div className=' card w-full h-full overflow-hidden rounded-xl'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
             
          </div>

          


        </div>

        <div className="cards w-full px-16 py-2 flex  gap-10 ">


          <div onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} className='cardcontainer w-1/2 h-[75vh] relative  '>
            <h1 className='absolute flex z-99 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#d4fa4a] text-[7vw] font-extrabold font-["Neue_Montreal"] leading-none tracking-tighter  overflow-hidden z-10 '>
              {"TRAWA".split('').map((item, index) =>
                <motion.span key={index} initial={{ y: "100%" }} animate={hoveredIndex === 0 ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }} className='inline-block '>
                  {item}
                </motion.span>
              )}
            </h1>
            <div className='px-3 items-center gap-2 pb-2 text-black flex'>
              <div className='h-3 w-3 bg-slate-900 rounded-full justify-center items-center'></div>
              <h5>TRAWA</h5>
            </div>
            <div className=' card w-full h-full overflow-hidden rounded-xl'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
              
            </div>
          </div>

          <div onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(null)} className='cardcontainer w-1/2 h-[75vh] relative  '>
            <h1 className='absolute flex z-99 right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#d4fa4a] text-[7vw] font-extrabold font-["Neue_Montreal"] leading-none tracking-tighter  overflow-hidden '>
              {"PREMIUM BLEND".split('').map((item, index) =>
                <motion.span key={index} initial={{ y: "100%" }} animate={hoveredIndex === 1 ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }} className='inline-block '>
                  {item}
                </motion.span>
              )}
            </h1>
            <div className='px-3 items-center gap-2 pb-2 text-black flex'>
              <div className='h-3 w-3 bg-slate-900 rounded-full justify-center items-center'></div>
              <h5>PREMIUM BLEND</h5>
            </div>

            <div className=' card w-full h-full overflow-hidden rounded-xl'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            </div>
             
          </div>

          


        </div>
         
      </div>
    </div>
  );
}

export default Featured;


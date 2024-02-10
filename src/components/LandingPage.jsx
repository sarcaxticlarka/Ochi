import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";

function LandingPage() {
    
    return (
        <div data-scroll data-scroll-section  data-scroll-speed="-0.3" className='w-full h-screen bg-[#F1F1F1] text-black pt-1 '>
            <div className="textstructre mt-48 px-16">
                {["We create", "Eye opening", "Presentations"].map((item, index) => (
                    <div className="masker">
                        <div className='w-fit items-center  flex overflow-hidden'>
                            {index === 1 && (
                                <motion.div initial={{width:0}} animate={{width: "7vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1 }} className=' mr-[1vw] w-[7vw] h-[4.7vw] overflow-hidden bg-red-500 relative top-1 rounded-md'>
                                    <img className='h-full w-full object-cover ' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                </motion.div>)}
                            <h1 key={index} className=' uppercase leading-[6.9vw] tracking-tighter text-[8vw] font-["Neue_Montreal"] font-extrabold flex flex-col '>{item}</h1>
                        </div>

                    </div>
                ))}

            </div>
            <div className='border-t-[2px] border-zinc-700 mt-28 flex justify-between items-center py-5 px-16'>
                {["For public and private companies", "from the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-5  py-2 border-[1px] border-zinc-500 rounded-full font-light '>Start the project</div>
                    <div className='w-9 h-9  flex items-center border-black justify-center border rounded-full'>
                        <span className='rotate-[45deg]'><IoIosArrowRoundUp /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
import React, { useEffect, useState } from 'react';

function Ready() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI)
            setRotate(angle - 180)
        })
    })

    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.5" className='w-full h-screen bg-[#d4ff54dc]'>
            <div className='relative flex justify-center items-center h-full'>
                <div className='flex justify-center items-center h-full'>
                    <h1 className="text-black text-center text-[11vw] leading-[11vw] tracking-tighter font-['Neue_Montreal'] font-black">
                        READY <br />
                        TO START <br />
                        THE PROJECTS?
                    </h1>
                </div>
                {/* Updated positioning for eyes-ready div */}
                <div data-scroll data-scroll-section data-scroll-speed="-0.5" className='eyes-ready absolute inset-0 flex items-center justify-center'>
                    <div className='flex gap-10'>
                        <div className='flex items-center justify-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full '>
                            <div className='relative w-2/3 h-2/3 bg-zinc-800 rounded-full '>
                                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg) ` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                    <div className='w-7 h-7 bg-zinc-100 rounded-full '></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full '>
                            <div className='relative w-2/3 h-2/3 bg-zinc-800 rounded-full '>
                                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg) ` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                    <div className='w-7 h-7 bg-zinc-100 rounded-full '></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Ready;

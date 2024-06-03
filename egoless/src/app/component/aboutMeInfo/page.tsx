'use client'
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"



const AboutMeInfo = ()=>{

  const targetRef = useRef<HTMLDivElement>(null);


  

  return(
    <div className="w-[1770px] h-3/4" ref={targetRef}>
      <motion.div className="text-neutral-300  mx-auto grid grid-cols-2 h-full p-5">
      <div>
        <motion.div 
        style={{opacity:0, x:"-100px"}}
        whileInView={{opacity:1, x:"0px"}}
        viewport={{
          margin:"-100px",
          once:true,
        }}
        transition={{duration:1}}
        className=" top-0 left-0 text-[1rem] md:text-[4rem] font-black ">About <span className="text-lime-400">Me</span></motion.div>
      </div>
      <motion.div className=" flex flex-col items-end place-self-center text-left lg:relative">
        <motion.div 
        style={{opacity:0, y:"100px"}}
        whileInView={{opacity:1, y:"0px"}}
        viewport={{
          margin:"-100px",
          once:true,
        }}
        transition={{duration:1}}
        
        className="py-2 px-4 text-[3rem] font-bold relative -z-[10]"><span className="text-lime-400">Jason </span>Jeong</motion.div>
        <div className="bg-neutral-800 w-[100%] h-3/4 top-[100px] z-10 hidden lg:absolute"></div>
        <motion.div
        style={{opacity:0, x:"-100px"}}
        whileInView={{opacity:1, x:"0px"}}
        viewport={{
          margin:"-100px",
          once:true,
        }}
        transition={{duration:1}}
        
        className=" py-2 px-4 z-10 text-[1rem] font-bold"><span>Hello</span> I'm just a <span className="text-lime-400">programmer</span> who likes eating <span className="text-lime-400">Kimchi</span></motion.div>
        <motion.div
        style={{opacity:0, x:"-100px"}}
        whileInView={{opacity:1, x:"0px"}}
        viewport={{
          margin:"-100px",
          once:true,
        }}
        transition={{duration:1}}
        className=" py-2 px-4  z-10 text-white text-[1rem] font-light">
          <span className="text-lime-400">Tools</span> NextJS TypeScript TailwindCSS Framer Motion Sanity Supabase
        </motion.div>
        
        
      </motion.div>
    </motion.div>
    </div>
  )
}

export default AboutMeInfo
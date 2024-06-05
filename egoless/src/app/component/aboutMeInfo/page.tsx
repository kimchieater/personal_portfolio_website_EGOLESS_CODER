'use client'
import { motion, useScroll } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"




const AboutMeInfo = ()=>{

  const targetRef = useRef<HTMLDivElement>(null);


  

  return(
    <div ref={targetRef}>
      <motion.div className="h-screen text-neutral-300 mx-auto grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3  p-5">
      <div>
        <motion.div 
        style={{opacity:0, x:"-100px"}}
        whileInView={{opacity:1, x:"0px"}}
        viewport={{
          margin:"-100px",
          once:true,
        }}
        transition={{duration:1}}
        className=" top-0 left-0 text-[2rem] md:text-[4rem] font-black flex justify-center lg:justify-start ">About<span className="text-lime-400">Me</span></motion.div>
      </div>



      <motion.div 
      style={{borderRadius:"20% 80% 36% 64% / 59% 29% 71% 41% "}}
      animate={{borderRadius:"64% 36% 47% 53% / 46% 10% 90% 54% "}}
      transition={{repeat:Infinity, duration:2, repeatType:"reverse"}}
      className=" md:col-start-2 md:col-end-2 md:row-start-2 md:row-end-2 bg-neutral-600 flex items-center justify-center">
        <motion.div 
        style={{opacity:0, y:"100px"}}
        whileInView={{opacity:1, y:"0px"}}
        viewport={{
          margin:"-100px",
          once:true,
        }}
        transition={{duration:1}}
        className="py-2 px-4 lg:text-[3rem] font-bold">
          <p className="flex gap-1"><span className="text-lime-300">Jason</span>Jeong</p>
          <p className="text-[1rem]">Software Engineer</p>
          </motion.div>
        <Image src="/about.png" width="200" height="200" alt="" className=""></Image>
      </motion.div>




      <motion.div className="flex flex-col items-end place-self-center text-left md:row-start-3 md:col-start-3 justify-start lg:relative">

        <motion.div
        style={{opacity:0, x:"-100px"}}
        whileInView={{opacity:1, x:"0px"}}
        viewport={{
          margin:"-100px",
          once:true,
        }}
        transition={{duration:1}}
        
        className=" py-2 px-4 z-10 text-[1rem] font-bold"><span>Hello, </span>Just a <span className="text-lime-400">programmer</span> who likes eating <span className="text-lime-400">Kimchi</span></motion.div>
        <motion.div
        style={{opacity:0, x:"-100px"}}
        whileInView={{opacity:1, x:"0px"}}
        viewport={{
          margin:"-100px",
          once:true,
        }}
        transition={{duration:1}}
        className=" py-2 px-4  z-10 text-white text-[1rem] font-light">
          <span className="text-lime-400">Tools</span> NextJS/TypeScript/TailwindCSS/Framer Motion/Sanity/Supabase
        </motion.div>
        <div></div>        
      </motion.div>
    </motion.div>
    </div>
  )
}

export default AboutMeInfo
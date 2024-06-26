'use client'

import { motion, useScroll } from "framer-motion"
import Image from "next/image"
import { useRef } from "react";



const MyWorkComponent = () =>{

  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
      target: targetRef,
      offset: ["start 50%", '100% start'],
});



  return (
        <div className=" flex flex-col  gap-5 items-center justify-center h-[90%] max-h-[90%]">

          <div className="flex-1 flex flex-col gap-5">
            <motion.div className="flex-1"
            initial={{opacity:0, x:"-100px"}}
            whileInView={{opacity:1, x:"0px"}}
            transition={{duration:1}}
            viewport={{
              margin:"-100px",
              once:true
            }}
            >
              <h2 className="text-[1rem] md:text-[2rem] font-extrabold z-50 flex-1">0<span className="text-lime-300">1</span>*</h2>
              <h1 className="text-[1.5rem] md:text-[3rem] text-bold">Code Chronicles</h1>
              <p className="font-light text-[.8rem] md:text-[1.6rem]">Next.js TailwindCSS TypeScript Sanity</p>
              <p className="text-lime-300">Coding Journal Website</p>
            </motion.div>
          <motion.div className="flex-1 flex items-center"
            initial={{opacity:0, y:"100px"}}
            whileInView={{opacity:1, y:"0px"}}
            transition={{duration:1}}
            viewport={{
              margin:"-100px",
              once:true
            }}
          >
            
            <p className="text-[.6rem] xs:text-[1rem]">
              Coding Chronicles is a journal created with Next.js, TailwindCSS, TypeScript, and Sanity. It features a crafted UI design and database connectivity. Leveraging Sanity for data fetching and TypeScript for reliability, this project showcases a journey, blending technical skill with design for an engaging user experience.
            </p>
          
          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-end w-[100%] h-[100%]">
          <a href="https://code-chronicles-git-main-kimchieaters-projects.vercel.app/" target="_blank"><Image src="/project1.jpg" alt="codechronicle" width="800" height="50" className="object-fill rounded-lg"></Image></a>
        </div>
      
    </div>
  )
}

export default MyWorkComponent
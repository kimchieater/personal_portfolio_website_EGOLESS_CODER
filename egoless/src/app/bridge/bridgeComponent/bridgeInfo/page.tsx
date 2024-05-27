'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


const BridgeInfo = () => {
  const scopeRef= useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
      target: scopeRef,
      offset: ["start 50%", '100% start'],
});

    return (
        <div className="relative ">
        <motion.div ref={scopeRef} className="text-left absolute top-[100px] left-[50%] translate-x-[-50%] h-[350px] text-neutral-300 font-black flex flex-col sm:gap-[5rem] text-[1rem]  xl:text-[1.7rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1rem]" >
          
            <motion.p 
            initial={{opacity:0, x:"-100px"}}
            whileInView={{opacity:1, x:"0px"}}
            transition={{duration:1.2}}
            viewport={{
              margin:"-300px",
              once:true
            }}
            ><span className="text-lime-300">Developing</span> UX/UI</motion.p>
            <motion.p
            initial={{opacity:0, x:"-100px"}} 
            whileInView={{opacity:1, x:"0px"}}
            transition={{duration:1.2}}
            viewport={{
              margin:"-300px",
              once:true
            }}
            > with <span className="text-lime-300">Creative/Interactive</span> Ideas</motion.p>
            <motion.p
            initial={{opacity:0, x:"-100px"}} 
            whileInView={{opacity:1, x:"0px"}}
            transition={{duration:1.2}}
            viewport={{
              margin:"-300px",
              once:true
            }}
            >Making <span className="text-lime-300">Dynamic</span> websites</motion.p>
            <motion.p 
            initial={{opacity:0, x:"-100px"}} 
            whileInView={{opacity:1, x:"0px"}}
            transition={{duration:1.2}}
            viewport={{
              margin:"-300px",
              once:true
            }}
            > Strive on, <span className="text-lime-300">untiringly.</span></motion.p>
        </motion.div>
        </div>
    )
}

export default BridgeInfo
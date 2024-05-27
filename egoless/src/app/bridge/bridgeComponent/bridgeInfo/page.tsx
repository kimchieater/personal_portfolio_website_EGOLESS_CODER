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

        <motion.div ref={scopeRef} className="text-left absolute bottom-[300px] left-[50%] translate-x-[-50%] h-[500px] text-neutral-300 text-[2.5rem] font-black flex flex-col sm:gap-5">
          
            <motion.p 
            initial={{opacity:0, x:"-100px"}}
            whileInView={{opacity:1, x:"-50px"}}
            transition={{duration:2}}
            viewport={{
              margin:"-300px",
              once:true
            }}
            ><span className="text-lime-300">Developing</span> UX/UI</motion.p>
            <motion.p
            initial={{opacity:0, x:"-50px"}} 
            whileInView={{opacity:1, x:"0px"}}
            transition={{duration:2}}
            viewport={{
              margin:"-300px",
              once:true
            }}
            > with <span className="text-lime-300">Creative/Interactive</span> Ideas</motion.p>
            <motion.p
            initial={{opacity:0, x:"50px"}} 
            whileInView={{opacity:1, x:"100px"}}
            transition={{duration:2}}
            viewport={{
              margin:"-300px",
              once:true
            }}
            >Making <span className="text-lime-300">Dynamic</span> websites</motion.p>
            <motion.p 
            initial={{opacity:0, x:"100px"}} 
            whileInView={{opacity:1, x:"150px"}}
            transition={{duration:2}}
            viewport={{
              margin:"-300px",
              once:true
            }}
            > Strive on, <span className="text-lime-300">untiringly.</span></motion.p>
        </motion.div>
    )
}

export default BridgeInfo
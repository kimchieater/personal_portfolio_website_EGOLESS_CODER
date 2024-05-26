'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";




const InMy = () =>{
  
  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target:targetRef,

  })

  const x = useTransform(scrollYProgress, [0, 1], ["130%", "-200%"])

  return(
      <motion.div style={{x}} className="sticky py-10 top-0 flex items-center overflow-hidden gap-5">
        <div className="w-[50%] h-[90vh] bg-white"></div>
        <div className="w-[50%] h-[90vh] bg-white"></div>
        <div className="w-[50%] h-[90vh] bg-white"></div>
        <div className="w-[50%] h-[90vh] bg-white"></div>
        <div className="w-[50%] h-[90vh] bg-white"></div>
        <div className="w-[50%] h-[90vh] bg-white"></div>
        
        
        
      </motion.div>
  )
}

export default InMy;
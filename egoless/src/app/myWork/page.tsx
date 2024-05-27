'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



const MyWork = () =>{

  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:["start end", "start start"]
    });

    const background = useTransform(scrollYProgress, [0, 1], ["#404040", "#a1a1aa"])

  
  return(
    <motion.div id="myWork" className="h-[200vh] relative  " ref={targetRef} style={{background}}>

    </motion.div>
  )
}
export default MyWork;
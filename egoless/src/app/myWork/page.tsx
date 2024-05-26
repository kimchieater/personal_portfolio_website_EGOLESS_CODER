'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const MyWork = () =>{

  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:['start end', '80% end']
    });

    const background = useTransform(scrollYProgress, [0, 1], ["rgb(220 38 38)", "#000"])
  
  return(
    <motion.div id="myWork" className="h-screen w-full bg-red-600" ref={targetRef} style={{background}}>
      <div className="pt-[200px] overflow-x-scroll pr-[1000px] h-[100%]">
        <h1 className="pr-[10000px]">Project Title</h1>
      </div>
    </motion.div>
  )
}
export default MyWork;
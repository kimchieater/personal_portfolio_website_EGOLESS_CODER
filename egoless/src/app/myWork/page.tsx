'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import InMy from "../component/inMy/page";


const MyWork = () =>{

  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:["start end", "10% end"]
    });

    const background = useTransform(scrollYProgress, [0, 1], ["rgb(220 38 38)", "#000"])

  
  return(
    <motion.div id="myWork" className="h-[400vh] w-full bg-red-600 relative" ref={targetRef} style={{background}}>
      <InMy></InMy>
    </motion.div>
  )
}
export default MyWork;
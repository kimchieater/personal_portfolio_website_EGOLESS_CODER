'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cards from "../cards/page";




const InMy = () =>{
  
  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target:targetRef,

  })

  const x = useTransform(scrollYProgress, [0, 1], ["135%", "-200%"])

  return(
      <motion.div style={{x}} className="sticky py-10 top-0 flex overflow-hidden gap-5 w-[4000px]">
        <Cards></Cards>
      </motion.div>
  )
}

export default InMy;
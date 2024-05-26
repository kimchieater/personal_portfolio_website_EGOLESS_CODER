'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const MyWork = () =>{

  const targetRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:['start start', 'end center']
    });

    
  
  return(
    <div id="myWork" className="h-screen w-full bg-red-600 border-[20px] border-lime-300 border-solid">
      <div className="pt-[200px] overflow-x-scroll pr-[1000px] h-[100%]">
        <h1 className="pr-[10000px]">Project Title</h1>
      </div>
    </div>
  )
}
export default MyWork;
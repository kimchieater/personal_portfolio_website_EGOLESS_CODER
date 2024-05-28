'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import MyWorkComponent from "./myWorkComponent/page";


const MyWork = () =>{

  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:["start 80%", "start start"]
    });



    const background = useTransform(scrollYProgress, [0, 1], ["#262626", "#737373"])

  return(
    <motion.div id="myWork" className=" relative bg-neutral-500 z-[10] rounded-xl pt-20 p-20 text-neutral-200" ref={targetRef} style={{background}}>
      <motion.div>
      <MyWorkComponent></MyWorkComponent>
      </motion.div>
    </motion.div>
  )
}
export default MyWork;
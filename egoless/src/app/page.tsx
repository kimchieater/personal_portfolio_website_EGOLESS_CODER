
'use client';

import Link from "next/link";
import Hero from "./component/hero/page";
import MyWork from "./myWork/page";
import AboutMe from "./aboutMe/page";
import ContactMe from "./contactMe/page";
import Bridge from "./bridge/page";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";




export default function Home() {

  
  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
      target: targetRef,
      offset: ["start 50%", '100% start'],
});

  return (




    <main ref={targetRef}>
      <Hero/>
      <Bridge/>
      <div className="bg-natural-400">
      <motion.div 
      initial={{y:"400px"}}
      animate={{y:"0"}}
      >
      <MyWork />
      </motion.div>
      </div>
      <AboutMe/>
      <ContactMe/>
      
    </main>
    
  );
}

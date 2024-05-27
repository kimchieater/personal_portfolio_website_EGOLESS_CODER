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
        <motion.div ref={scopeRef} className="text-left absolute bottom-[200px] left-[50%] translate-x-[-50%]  h-[400px] text-lime-300 2xl:text-[3rem] font-black">
          
            <p className="border">Developing UX/UI</p>
            <p className="translate-x-[10%] border"> with Creative/Interactive Ideas</p>
            <p className="translate-x-[20%] border">Making Dynamic websites</p>
            <p className="translate-x-[30%] border"> Strive on, untiringly.</p>
        </motion.div>
    )
}

export default BridgeInfo
'use client'

import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";



const Bridge = () => {

    const { scrollY } = useScroll()
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: "all",
    })

    return (
        <div className="h-screen mt-[100px]" ref={ref}>
            <motion.div className="h-[100px] w-[100px] bg-black mt-1000 relative left-[50%]">
            </motion.div>
            

            <div className="relative top-0 left-0 bg-black h-[100px] w-1/3"></div>
            <div className="relative top-0 left-0 bg-black h-[100px] w-2/3"></div>
            <div className="relative top-0 left-0 bg-black h-[100px] w-3/3"></div>
            
        </div>
    )
}

export default Bridge
'use client'

import { motion,  useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";



const Bridge = () => {
    const targetRef = useRef<HTMLElement>(null);


    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["50% 50%", '100% start'],
    });

    const translateX = useTransform(scrollYProgress, [0, 1], ["0px", "200%"])
    const negativeTranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "-200%"])
    const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "-400%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"])


    return (
    <section ref={targetRef} className="h-screen relative mt-[400px]">
        <motion.div style={{translateY: translateY, opacity, zIndex:"-20"}} className="fixed bottom-[-600px] left-[20%] ">
        <Image src="/hero3bg.png" alt="lol" width="1000" height="1000" 
        ></Image></motion.div>
        <motion.div className="absolute bottom-0 left-[-200px]" style={{translateX, opacity}}>
        <Image src="/flowerjpeg1.png" alt="lol" width="400" height="1000"></Image></motion.div>
        <motion.div className="absolute bottom-0 right-[-100px]" style={{translateX:negativeTranslateX, opacity}}>
        <Image src="/flowerjpeg2.png" alt="lol" width="400" height="1000"></Image></motion.div>
        <motion.div className="absolute bottom-0 right-[-300px]" style={{translateX:negativeTranslateX, opacity}}>
        <Image src="/flowerjpeg3.png" alt="lol" width="400" height="1000" ></Image></motion.div>
        <motion.div className="absolute bottom-[-200px] left-[-400px]" style={{translateX, opacity, zIndex:"-20"}}>
        <Image src="/flowerjpeg4.png" alt="lol" width="400" height="1000" ></Image>
        </motion.div>
    </section>
    )
}

export default Bridge
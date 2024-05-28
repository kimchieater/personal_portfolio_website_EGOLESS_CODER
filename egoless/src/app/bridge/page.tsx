'use client'

import { motion,  useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import BridgeInfo from "./bridgeComponent/bridgeInfo/page";



const Bridge = () => {
    const targetRef = useRef<HTMLElement>(null);


    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["20% 50%", '100% start'],
    });

    const translateX = useTransform(scrollYProgress, [0, 1], ["0px", "200%"])
    const negativeTranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "-200%"])
    const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "-400%"])
    const opacity = useTransform(scrollYProgress, [0, .8], [1, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"])


    return (
    <section ref={targetRef} className="h-[120vh] z-[0] relative top-40 shadow-2xl shadow-black/20">
        <motion.div className="absolute bottom-20 left-[-200px]" style={{translateX, opacity}}>
        <Image src="/flowerjpeg1.png" alt="left-pic" width="400" height="1000"></Image></motion.div>
        <motion.div className="absolute bottom-20 right-[-100px]" style={{translateX:negativeTranslateX, opacity}}>
        <Image src="/flowerjpeg2.png" alt="lol" width="400" height="1000"></Image></motion.div>
        <motion.div className="absolute bottom-20 right-[-300px]" style={{translateX:negativeTranslateX, opacity}}>
        <Image src="/flowerjpeg3.png" alt="lol" width="400" height="1000" ></Image></motion.div>
        <motion.div className="absolute bottom-20  left-[-400px]" style={{translateX, opacity, zIndex:"-20"}}>
        <Image src="/flowerjpeg4.png" alt="left-pic-1" width="400" height="1000" ></Image>
        </motion.div>
        <BridgeInfo></BridgeInfo>
    </section>
    )
}

export default Bridge
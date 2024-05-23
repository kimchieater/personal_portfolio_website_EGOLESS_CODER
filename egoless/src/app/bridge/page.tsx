'use client'

import { motion,  useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



const Bridge = () => {
    const targetRef = useRef<HTMLElement>(null);


    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start 67%", 'end 40%'],
    });
    const translateX = useTransform(scrollYProgress, [0, 1], ["0px", "400%"])
    const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "-400%"])
    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"])


    return (
    <section ref={targetRef} className="h-screen">


    </section>
    )
}

export default Bridge
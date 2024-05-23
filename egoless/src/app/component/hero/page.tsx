'use client'
import { motion, useScroll, useTransform  } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';



const Hero = () => {

    //Setting framer 
    const targetRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:['start start', 'end center']
        
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const translateX = useTransform(scrollYProgress, [0, 1], ["0px", "100%"])
    const negativeTranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "-400%"])
    // interface 

    interface MousePosition {
    x: number;
    y: number;
    }

    interface ImagePosition {
    left: number;
    top: number;
    }

    
    //state

    //for mouse coordinates
    let [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
    let [images, setImages] = useState<JSX.Element[]>([]);
    //image numbers 
    let [imageNumber, setImageNumber] = useState<number>(1);
    const [lastImagePos, setLastImagePos] = useState<ImagePosition>({ left: -100, top: -100 });
    let [imagePos, setImagePos] = useState<ImagePosition>({ left:-100, top: -100});



    //functions


    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>):void => {
        //set Mouse coordinates
        const newMousePos = { x: event.clientX + window.scrollX, y: event.clientY + window.scrollY};
        setMouse(newMousePos);  
        setImagePos({left: event.clientX, top: event.clientY});

        const distance = Math.sqrt(
            Math.pow(newMousePos.x - lastImagePos.left, 2) +
            Math.pow(newMousePos.y - lastImagePos.top, 2)
        );

        if (distance > 100) {
            setLastImagePos({ left: newMousePos.x, top: newMousePos.y });
            spawnImage(newMousePos.x, newMousePos.y);
        }
    };

    const spawnImage = (x:number, y:number): void => {
        const imageKey = imageNumber;
        
        const newImage = (
            <motion.div initial={{opacity:1, scale:2}}
            animate={{opacity:0, scale:.1}}
            transition={{duration:.5}}
            key={imageKey} style={{
                top: `${y}px`,
                left: `${x}px`,
                position: "absolute",
                maxWidth: "200px",
                opacity: "1",
                transform: "translate(-50%, -50%)",
                zIndex:-10,
            }}>
                <Image src={`/image-${imageNumber}.avif`} alt={`image ${imageNumber}`} width={500} height={100} className={"object-cover"} />
            </motion.div>
        );
        setImages(prevImages => {
            if (prevImages.length >= 12) {
                return [newImage];
            } else {
                return [...prevImages, newImage];
            }
        });
        

        setImageNumber((prevNumber: number) => (prevNumber === 12 ? 1 : prevNumber + 1));
    };
    

    return (
        <motion.div className="h-screen text-neutral-950"  ref={targetRef} 
        >
            <div className="w-screen h-screen"  onMouseMove={handleMouseMove} >
                <motion.div className="flex justify-center gap-5" style={{opacity}}>
                    {images}
                </motion.div>            
            </div>
            
            <motion.h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] sm:text-[3rem] lg:text-[4rem] font-black z-1 bg-lime-300 px-2 py-1" style={{opacity}}
            >
                ADMWWWMDA
            </motion.h1>
            <motion.div className="w-[700px] h-[700px] object-fill absolute bottom-[-300px] right-[-200px]" style={{translateX}}>
            <Image src="/hero1.png" width="700" height="50" alt="" className="w-[auto] h-[auto] object-fill " ></Image>
            </motion.div>
            <motion.div  className="w-[700px] h-[700px] object-fill absolute bottom-0 left-[-400px]  scale-x-[-1] scale-y-[-1] z-[-20]" style={{translateX:negativeTranslateX, rotate:"180deg"}} >
            <Image src="/hero2.png" width="700" height="50" alt="" className="w-[auto] h-[auto] object-fill" ></Image>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
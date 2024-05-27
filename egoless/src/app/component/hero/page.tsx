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
    const negativeTranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "-100%"])
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
            Math.pow(newMousePos.y - lastImagePos.top, 2 )
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
                position: "fixed",
                maxWidth: "200px",
                opacity: "1",
                transform: "translate(-50%, -50%)",
                zIndex:1,
            }}>
                <Image src={`/image-${imageNumber}.avif`} alt={`image ${imageNumber}`} width={500} height={100} className={"object-cover"}  />
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
        <motion.div className="h-screen text-neutral-950 relative "  ref={targetRef}>
            <div className="w-screen h-screen relative"  onMouseMove={handleMouseMove} >
                <motion.div className="flex justify-center gap-5" style={{opacity}}>
                    {images}
                </motion.div>            
            </div>
            
            <motion.div className=" font-black z-10  px-2 text-neutral-300 py-1 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  xl:text-[3rem] lg:text-[2rem] md:text-[2rem] sm:text-[1.5rem] text-[1.2rem]" style={{opacity}}
            >
                <h1>Mathew <span className='text-lime-300'>Jason</span> Jeong</h1>
                <p className="text-[.8rem]  xl:text-[1.7rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1rem]">Web Developer, Nerd, <span className='text-lime-300'>Kimchi Eater</span></p>
            </motion.div>
            
            <motion.div className="w-[700px] h-[700px] object-fill fixed bottom-[-300px] right-[-200px] z-[-20]" style={{translateX}} >
            <Image src="/hero1.png" width="700" height="50" alt="right picture" className=" z-[-20] w-[600px] h-[auto] object-fill " ></Image>
            </motion.div>
            <motion.div  className="w-[700px] h-[700px] object-fill fixed bottom-0 left-[-400px]  scale-x-[-1] scale-y-[-1] z-[-20]" style={{translateX:negativeTranslateX, rotate:"180deg"}} >
            <Image src="/hero2.png" width="700" height="50" alt="left picture" className="w-[400px] h-[auto] object-fill z-[-20]" ></Image>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

const Hero = () => {

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
        const newMousePos = { x: event.clientX, y: event.clientY };
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
        setTimeout(() => {
            const imageElement = document.getElementById(`image-${imageKey}`);
            if (imageElement) {
                imageElement.style.opacity = '0';
                imageElement.style.transform = 'translate(-50%, -50%) scale(0.2)';
            }
        }, 500);

        setImageNumber((prevNumber: number) => (prevNumber === 12 ? 1 : prevNumber + 1));
    };
    

    return (
        <div className="h-screen bg-red-600 text-neutral-950">
            <div className="w-screen h-screen"  onMouseMove={handleMouseMove}>
                <div className="flex justify-center gap-5">
                    <p>x : {mouse.x}</p>
                    <p>y : {mouse.y}</p>
                    {images}
                </div>            
            </div>
            
            <h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-[4rem] font-black z-1 bg-lime-300 px-2 py-1">
                EGOLESS CODING
            </h1>
        </div>
    );
};

export default Hero;
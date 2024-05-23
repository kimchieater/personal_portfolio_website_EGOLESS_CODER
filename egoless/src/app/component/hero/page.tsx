'use client'


import { get } from 'http';
import Image from 'next/image'
import { useEffect, useState } from 'react';

const Hero = () => {

    //state

    //for mouse coordinates
    let [mouse, setMouse] = useState({ x: 0, y: 0 });

    //image numbers 
    let [imageNumber, setImageNumber] = useState(1);

    let [picturePos, setPicturePos] = useState({ left:0, top: 0});

    //timer before animation fadeOut happens
    let [timer, setTimer] = useState(0);

    //animation switch
    let [fadeOut, setFadeOut] = useState(false);

    
    //functions


    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //set Mouse cooringates
        setMouse({ x: event.clientX, y: event.clientY });  

        setPicturePos({left: event.clientX, top: event.clientY});
    };

    const getImage = (): JSX.Element => {
        return (
        <div  style={
            {
                top: `${mouse.y}px`,
                left: `${mouse.x}px`,   
                position: "absolute", 
                maxWidth: "200px",
                opacity: "1",
                translate: "-50% -50%"
            }
        }>
        <Image src={`/image-${imageNumber}.avif`} alt={`image ${imageNumber}`} width={500} height={100} className={"object-cover"} />
        </div>
        ) 
    };
    
    //side effects

            useEffect(()=>{
        
    
    },);

    
    
    
    return (
        <div className="h-screen bg-red-600 text-neutral-950">
            <div className="w-screen h-screen"  onMouseMove={handleMouseMove}>
                <div className="flex justify-center gap-5">
                    <p>x : {mouse.x}</p>
                    <p>y : {mouse.y}</p>
                    {
                        getImage()
                    }
                </div>
                {/* <Image src='/image-1.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-2.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-3.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-4.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-5.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-6.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-7.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-8.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-9.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-10.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-11.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" />
                <Image src='/image-12.avif' alt="image1" width="500" height="100" className="max-w-[200px] absolute top-0 left-0 opacity-0" /> */}
            
            </div>
            
            <h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-[4rem] font-black z-1">
                EGOLESS CODING
            </h1>
        </div>
    );
};

export default Hero;
'use client'


import Image from 'next/image'
import { useEffect, useState } from 'react';

const Hero = () => {




    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMouse({ x: event.clientX, y: event.clientY });
    };
    
    useEffect(()=>{
        
    
    }, [mouse]);
    return (
        <div className="h-screen bg-red-600 text-neutral-950">
            <div className="w-screen h-screen"  onMouseMove={handleMouseMove}>
                <p>{mouse.x}</p>
                <p>{mouse.y}</p>
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
'use client'

import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';



const ContactMe = () => {




  return (
    <div id="contactMe" className="h-screen bg-neutral-500 text-white flex justify-center items-center">
      <ContactTable></ContactTable>
    </div>
  )
}

export default ContactMe;


const ContactTable = ()=>{

  const targetRef = useRef<HTMLDivElement>(null);


  return(
    <motion.div ref={targetRef} 
    initial={{opacity:0, x:"-100px"}}
    whileInView={{opacity:1, x:"0px"}}
    transition={{duration:1}}
    viewport={{
      margin:"-100px",
      once:true
    }}
    
    
    className=" h-[80%] w-[80%] flex flex-col justify-center items-center gap-5">

      
    <div className="flex flex-col items-center justify-center p-5">
    <h1 className="text-[2rem] md:text-[4rem]">Lets have a Chat!</h1>
    <p>ask me anything, ANYTHING!</p>
    </div>
    <div className="flex flex-col mx-auto justify-center items-center gap-10  w-[50%]">

      <div className="flex flex-col items-center justify-center md:flex-row gap-5 w-[400px]">
        <label className="flex flex-auto flex-col items-stretch">
          First Name
          <input type="text" className="flex-1 text-neutral-200 rounded-lg py-2 px-3 bg-neutral-400"></input>
        </label>
        <label className="flex flex-col flex-auto items-stretch">
          Last Name
          <input type="text" className="flex-1 text-neutral-200 rounded-lg py-2 px-3 bg-neutral-400"></input>
        </label>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row gap-5 w-[400px]">
        <label className="flex flex-col items-start">
          Email
          <input type="email" className=" flex-1 text-neutral-200 rounded-lg py-2 px-3 bg-neutral-400"></input>
        </label>
        <label className="flex flex-col items-start">
          Phone Number 
          <input type="text" className="text-neutral-200 rounded-lg bg-neutral-400 py-2 px-3"></input>
        </label>
      </div>

      
        <label className="flex flex-col w-[420px]  text-center">Message
          <textarea className=" text-neutral-200 rounded-lg bg-neutral-400 py-2 px-3"></textarea>
        </label>
      

      <button className="mt-10 bg-lime-300 w-[100px] py-2 px-3 rounded-lg cursor-pointer  text-neutral-700 font-black mx-auto">Submit</button>

    </div>
      
    </motion.div>
  )
}
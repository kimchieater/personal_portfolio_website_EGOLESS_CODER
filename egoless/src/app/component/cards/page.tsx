'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"




const Cards = () =>{
  const [cardId, setCardId] = useState([0,1,2])
  const [clickedCard, setClickedCard] = useState(null)
  
  function handleClick(index:any){
    setClickedCard(index === clickedCard ? null : index)

  }

  return(
    <div className="flex gap-5">
      {
        cardId.map((a,i)=>{
          return(
            <motion.div key={i} className="p-10 h-[70vh] w-[200px] mt-20 bg-neutral-700 cursor-pointer rounded-md shadow-neutral-800 shadow-lg"
            initial={{ overflow:"hidden", width:"200px"}}
            animate={{overflow: clickedCard === i ? "visible" : "hidden", width: clickedCard === i ? "1000px" : "200px"}}
            transition={{ duration: 1 }}
            onClick={() => handleClick(i)}>
              {
                clickedCard === i ? (
                  <div className="">
                    <div className="h-[40%] w-[40%]">
                    <Image src="/image-1.avif" width="500" height="10"  alt="text" className="w-[100%] h-[100%] object-cover" ></Image>
                    </div>
                    <h1>Title {i}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quasi esse placeat earum in mollitia maiores numquam veritatis, voluptatibus optio. Doloribus, libero porro totam deserunt sed dolore ea ipsum quo aperiam repudiandae eveniet error vitae reprehenderit magnam ratione nihil ut voluptatum. Vero soluta vitae, itaque corrupti neque alias ad esse.</p>
                  </div>
                ) : (
                  <div className="h-[90%] w-[90%] object-fill ">
                    <Image src="/image-1.avif" width="500" height="10"  alt="text" className="w-[100%] h-[100%] object-cover" ></Image>
                  </div>
                )
              }
            
            </motion.div>
          )
        })
      }
    </div>
  )
}

export default Cards
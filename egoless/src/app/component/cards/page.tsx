'use client'

import { motion } from "framer-motion"
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
            <motion.div key={i} className="h-[70vh] w-[200px] mt-20 bg-white cursor-pointer"
            initial={{paddingRight: "0px"}}
            animate={{paddingRight: clickedCard === i ? "1000px": "0px"  }}
            transition={{ duration: 2 }}
            onClick={() => handleClick(i)}>
            </motion.div>
          )
        })
      }
    </div>
  )
}

export default Cards
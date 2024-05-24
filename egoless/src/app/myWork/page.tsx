import { motion, useScroll, useTransform } from "framer-motion";



const MyWork = () =>{
  return(
    <div id="myWork" className="h-screen w-full bg-neutral-600">
      <div className="pt-[200px] overflow-x-scroll pr-[1000px] h-[100%]">
        <h1 className="pr-[10000px]">Project Title</h1>
      </div>
    </div>
  )
}
export default MyWork;
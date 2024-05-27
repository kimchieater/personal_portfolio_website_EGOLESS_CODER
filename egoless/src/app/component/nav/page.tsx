import Link from "next/link"



const Nav = () => {
  return(
    <div className="relative">
      <div className="fixed flex flex-col gap-3 cursor-pointer  z-[100] mx-auto left-[50%] translate-x-[-50%] md:hidden py-5">
        <div className="w-[50px] h-[10px] bg-neutral-200 rounded-sm"></div>
        <div className="w-[50px] h-[10px] bg-neutral-200 rounded-sm"></div>
        <div className="w-[50px] h-[10px] bg-neutral-200 rounded-sm"></div>
      </div>
    <div className="fixed hidden justify-between z-10 font-light gap-10 w-[100%] px-10 py-5 md:flex text-neutral-200">
      {/* hamburger drop down */}
      
      <Link href='/'  className="lg:text-[2rem] sm:text-[1rem] hover:underline transition-all duration-75 " id="/">HOME</Link>
      <Link href='#myWork'  className="lg:text-[2rem] sm:text-[1rem] ">MY WORK</Link>
      <Link href='#aboutMe'  className="lg:text-[2rem] sm:text-[1rem] ">ABOUT ME</Link>
      <Link href='#contactMe' className="lg:text-[2rem] sm:text-[1rem]">CONTACT</Link>
    </div>
    </div>
  )
  
}

export default Nav
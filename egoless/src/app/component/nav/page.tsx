import Link from "next/link"



const Nav = () => {
  return(
    <div className="fixed flex justify-between z-10  font-light gap-10 w-[100%] px-10 py-5">
      <Link href='/'  className="lg:text-[2rem] sm:text-[1rem]" id="/">HOME</Link>
      <Link href='#myWork'  className="lg:text-[2rem] sm:text-[1rem]">MY WORK</Link>
      <Link href='#aboutMe'  className="lg:text-[2rem] sm:text-[1rem]">ABOUT ME</Link>
      <Link href='#contactMe' className="lg:text-[2rem] sm:text-[1rem]">CONTACT</Link>
    </div>
  )
  
}

export default Nav
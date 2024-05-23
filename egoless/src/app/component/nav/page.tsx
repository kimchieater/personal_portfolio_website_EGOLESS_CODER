import Link from "next/link"



const Nav = () => {
  return(
    <div className="fixed flex justify-between z-10 font-light gap-10 w-[100%] px-10 pt-5">
      <Link href='/'  className="text-[2rem]" id="/">HOME</Link>
      <Link href='#myWork'  className="text-[2rem]">MY WORK</Link>
      <Link href='#aboutMe'  className="text-[2rem]">ABOUT ME</Link>
      <Link href='#contactMe' className="text-[2rem]">CONTACT</Link>
    </div>
  )
  
}

export default Nav
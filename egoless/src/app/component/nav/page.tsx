import Link from "next/link"



const Nav = () => {
  return(
    <div className="fixed flex justify-between w-screen z-10 font-normal">
      <Link href='/' className="text-[2rem]">HOME</Link>
      <Link href='/myWork' className="text-[2rem]">MY WORK</Link>
      <Link href='/aboutMe' className="text-[2rem]">ABOUT ME</Link>
      <Link href='/contact' className="text-[2rem]">CONTACT</Link>
    </div>
  )
  
}

export default Nav
import Link from "next/link";
import Hero from "./component/hero/page";
import MyWork from "./myWork/page";
import AboutMe from "./aboutMe/page";
import ContactMe from "./contactMe/page";
import Bridge from "./bridge/page";





export default function Home() {
  return (
    
    <main className="text-neutral-100">
      <Hero/>
      <Bridge/>
      <MyWork/>
      <AboutMe/>
      <ContactMe/>

    </main>
    
  );
}

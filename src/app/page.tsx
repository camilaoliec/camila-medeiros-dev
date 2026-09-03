
import About from "@/components/About";
import Cta from "@/components/Cta";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Services from "@/components/Services";


export default function home(){
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Method />
      <About />
      <Cta />
    </div>
  )
}
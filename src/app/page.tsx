
import About from "@/components/About";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
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
      <Contact />
      <Footer />
    </div>
  )
}
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

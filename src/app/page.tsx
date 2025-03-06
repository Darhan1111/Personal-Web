import Image from "next/image";
import NavBar from "@/homeview/Navbar";
import Introduction from "@/homeview/Introduction";
import About from "@/homeview/About";
import Skills from "@/homeview/Skills";
import Portofolio from "@/homeview/Portofolio";
import Experience from "@/homeview/Experience";
import Contact from "@/homeview/Contact";
import Testimonials from "@/homeview/Testimonials";

export default function Home() {
  return (
    <div className="card-container">
      <NavBar />
      <Introduction />
      <About />
      <Skills />
      <Portofolio />
      <Testimonials />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}

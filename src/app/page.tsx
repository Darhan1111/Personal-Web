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
  const experiences = [
    {
      title: "Junior Full-Stack Developer",
      company: "ABC Technologies",
      timeline: "2025 - Present",
      responsibilities: [
        "Develop and maintain web applications using Next js",
        "Collaborate with cross-functional teams to define project goals",
        "Optimize performance and scalability of applications",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      timeline: "2025 - Present",
      responsibilities: [
        "Designed and developed responsive websites for various clients",
        "Managed project timelines and delivered quality code",
        "Implemented custom features based on client requirements",
      ],
    },
  ];
  return (
    <div className="card-container">
      <NavBar />
      <Introduction />
      <About />
      <Skills />
      <Portofolio />
      <Testimonials />
      <Experience experiences={experiences} />
      <Contact />
    </div>
  );
}

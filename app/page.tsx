import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Skills from "@/components/sections/skills"
import Education from "@/components/sections/education"
import Awards from "@/components/sections/awards"
import Contact from "@/components/sections/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Awards />
      <Contact />
    </main>
  )
}

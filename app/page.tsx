import Hero from "./components/Hero"
import { Navbar } from "./components/NavBar"
import About from "./components/about"
import Education from "./components/education"
import Projects from "./components/projects"
export default function Home() {
  return (
    <main>
 
<Hero/>

<section id="about">
      <About/>
 </section>
 <section id="projects">
      <Projects/>
 </section>
 <section id="education">
      <Education/>
 </section>
    </main>
  )
}

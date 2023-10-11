import Hero from "./components/Hero"
import { Navbar } from "./components/NavBar"
import About from "./components/about"
import Projects from "./components/projects"
export default function Home() {
  return (
    <main>
 <Navbar/>
<Hero/>
<section id="about">
      <About/>
 </section>
 <section id="projects">
      <Projects/>
 </section>
 
   
    </main>
  )
}

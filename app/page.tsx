import Footer from "./components/footer"
import Hero from "./components/hero"
import Experience from "./components/experience"
import Education from "./components/education"
import Projects from "./components/projects"
import Contact from "./components/contact"
export default function Home() {
  return (
    <main>
 
<Hero/>

<section id="experience">
      <Experience/>
 </section>
 <section id="projects">
      <Projects/>
 </section>
 <section id="education">
      <Education/>
 </section>
 <section id="contact">
      <Contact/>
 </section>
 <Footer/>
    </main>
  )
}

import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Experience from "./components/experience"
import Education from "./components/education"
import Projects from "./components/projects"
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
 <Footer/>
    </main>
  )
}

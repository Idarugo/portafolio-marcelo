import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Infrastructure } from "@/components/portfolio/infrastructure"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Infrastructure />
      <Contact />
      <Footer />
    </main>
  )
}

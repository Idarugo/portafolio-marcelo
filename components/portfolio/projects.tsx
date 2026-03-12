"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "Sistema de Gestión Académica",
    description:
      "Sistema interno completo para gestión de alumnos, docentes, calificaciones y documentación institucional. Incluye portal de alumnos y apoderados, biblioteca digital y generación de certificados.",
    technologies: ["Vue 3", "Node.js", "MySQL", "Tailwind CSS", "JWT"],
    featured: true,
  },
  {
    title: "Sitio Web Institucional",
    description:
      "Desarrollo completo del sitio web del establecimiento educacional con galería, noticias, documentos públicos, calendario de eventos y formularios de contacto.",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Node.js"],
    featured: true,
  },
  {
    title: "Proyecto NeoFuturo",
    description:
      "Aplicación web empresarial con panel administrativo, sistema de roles y permisos, generación de PDFs, dark mode y múltiples integraciones de servicios externos.",
    technologies: ["Vue 3", "TypeScript", "Pinia", "Express", "MySQL"],
    featured: true,
  },
  {
    title: "Sistema de Fonoaudiología",
    description:
      "Sistema web para gestión de pacientes de fonoaudiología con historial clínico, citas y seguimiento de tratamientos.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    featured: false,
  },
  {
    title: "Sistema para Veterinaria",
    description:
      "Plataforma completa con sistema de reservas, gestión de vacunas, horarios, blog, ecommerce y panel administrativo.",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    featured: false,
  },
  {
    title: "Panel de Control NAS",
    description:
      "Implementación de servidor NAS con OpenMediaVault para almacenamiento centralizado, backup automatizado y gestión de usuarios.",
    technologies: ["OpenMediaVault", "Linux", "Samba", "RAID"],
    featured: false,
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-24 bg-card/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// 03. Proyectos"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Trabajos Destacados
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-secondary/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <p className="text-primary font-mono text-sm mb-2">Proyecto Destacado</p>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 md:flex-col">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Ver código"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3
          className={`text-xl font-semibold text-foreground mb-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Otros Proyectos
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-secondary/30 border border-border rounded-lg p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Ver código"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

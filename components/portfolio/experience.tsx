"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Encargado de Soporte Informático | Desarrollador Full Stack",
    company: "Liceo Técnico Municipal Juan Hoppe Gantz",
    period: "Actual",
    description: [
      "Soporte técnico a docentes y administrativos del establecimiento",
      "Desarrollo completo del sitio web institucional",
      "Desarrollo del sistema interno de gestión académica",
      "Implementación de servidor NAS con OpenMediaVault",
      "Configuración de usuarios y carpetas compartidas",
      "Mantenimiento de red del establecimiento",
      "Desarrollo de panel administrativo, biblioteca digital y portal de alumnos",
      "Sistema de permisos y roles, galería, noticias, documentos y certificados",
      "Instalación de equipos, switches, access points y cableado",
    ],
    technologies: ["Vue 3", "Node.js", "MySQL", "OpenMediaVault", "Linux"],
  },
  {
    title: "Ingeniero Informático",
    company: "Supermercados Cugat",
    period: "Anterior",
    description: [
      "Desarrollo y mantenimiento de sistemas internos",
      "Automatización de procesos empresariales",
      "Soporte técnico a usuarios",
      "Configuración y optimización de red",
      "Desarrollo de soluciones tecnológicas personalizadas",
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "Redes", "Windows"],
  },
  {
    title: "Desarrollador Full Stack | Arquitecto de Sistemas",
    company: "Proyecto NeoFuturo",
    period: "Proyecto",
    description: [
      "Desarrollo con Vue 3, TypeScript, Pinia, Tailwind CSS",
      "Backend con Node.js, Express y MySQL",
      "Panel administrativo completo con roles y permisos",
      "Autenticación JWT y APIs REST",
      "UI moderna con dark mode y generación de PDFs",
      "Integración de servicios externos",
    ],
    technologies: ["Vue 3", "TypeScript", "Pinia", "Tailwind", "Node.js", "Express", "MySQL", "JWT"],
  },
]

export function Experience() {
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

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// 02. Experiencia"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Trayectoria Profesional
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                } pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-3 h-3 bg-primary rounded-full border-4 border-background left-0 md:left-1/2 md:-translate-x-1.5`}
                />

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-mono">{exp.period}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                  
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{exp.company}</span>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.slice(0, 4).map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={`text-primary mt-1.5 ${index % 2 === 0 ? "md:order-last" : ""}`}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

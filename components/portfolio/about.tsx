"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Server, Network, Wrench } from "lucide-react"

const stats = [
  { label: "Experiencia en IT", value: "4+" },
  { label: "Proyectos desarrollados", value: "20+" },
  { label: "Tecnologías trabajadas", value: "15+" },
  { label: "Sistemas implementados", value: "10+" },
]

const expertise = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description: "Aplicaciones web completas con Vue, React, Node.js y bases de datos relacionales.",
  },
  {
    icon: Server,
    title: "Administración de Servidores",
    description: "Configuración y mantenimiento de servidores NAS, Linux y Windows Server.",
  },
  {
    icon: Network,
    title: "Redes e Infraestructura",
    description: "Diseño e implementación de redes, switches, access points y cableado estructurado.",
  },
  {
    icon: Wrench,
    title: "Soporte TI",
    description: "Mantenimiento de equipos, instalación de sistemas operativos y resolución de problemas.",
  },
]

export function About() {
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
      id="sobre-mi"
      ref={sectionRef}
      className="py-24 bg-card/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// 01. Sobre Mí"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Conoce mi perfil
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Soy <span className="text-foreground font-medium">Ingeniero Informático</span> en Chile, 
              con experiencia en desarrollo full stack, soporte TI, redes, servidores y sistemas empresariales. 
              Mi enfoque está en crear soluciones tecnológicas robustas que impulsen la eficiencia operativa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              He trabajado en instituciones educativas y empresas del sector retail, desarrollando 
              desde sitios web institucionales hasta sistemas de gestión académica completos. 
              Mi experiencia abarca tanto el desarrollo de software como la administración de 
              infraestructura tecnológica.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-secondary/50 rounded-lg p-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className={`bg-secondary/30 border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-foreground font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

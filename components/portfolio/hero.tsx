"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            {"// Bienvenido a mi portafolio"}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Ingeniero Informático
            <span className="block text-primary mt-2">Full Stack Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            Desarrollo de software, administración de servidores, redes e infraestructura tecnológica.
            Transformando ideas en soluciones digitales robustas y escalables.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Contáctame
            </Link>
            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Ver Proyectos
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contacto@ejemplo.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href="#sobre-mi"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono mb-2">scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}

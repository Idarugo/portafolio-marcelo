"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react"

type FormState = {
  name: string
  email: string
  message: string
}

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
}

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState<FormState>(initialFormState)
  const [showNotice, setShowNotice] = useState(false)
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

    const currentSection = sectionRef.current

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
      observer.disconnect()
    }
  }, [])

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: e.target.value,
      }))
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setShowNotice(true)

    setTimeout(() => {
      setShowNotice(false)
    }, 5000)
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// 06. Contacto"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 text-pretty">
            Estoy disponible para proyectos freelance, colaboraciones o posiciones a tiempo
            completo. No dudes en contactarme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Email</h3>
                  <a
                    href="mailto:marcelohidalgop14@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    marcelohidalgop14@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Teléfono</h3>
                  <a
                    href="tel:+56934247194"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +56 9 3424 7194
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">Chile</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <h3 className="text-foreground font-medium mb-4">Sígueme en</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Idarugo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcelo-hidalgo-pinto-4848541b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {showNotice && (
                <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-300">
                  ⚠️ El formulario aún no está conectado a una base de datos ni a un servicio de
                  envío. Por ahora, contáctame directamente por correo o LinkedIn.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange("name")}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange("email")}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={handleChange("message")}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Send size={18} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
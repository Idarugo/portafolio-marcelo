"use client"

import { useEffect, useRef, useState } from "react"
import {
  Server,
  Network,
  HardDrive,
  Wifi,
  Shield,
  Monitor,
  Cable,
  Database,
} from "lucide-react"

const infrastructureItems = [
  {
    icon: Server,
    title: "Servidores NAS",
    description: "Implementación y administración de servidores NAS con OpenMediaVault para almacenamiento centralizado y backup.",
    items: ["OpenMediaVault", "RAID Configuration", "Samba/NFS", "Backup Automatizado"],
  },
  {
    icon: Network,
    title: "Redes Empresariales",
    description: "Diseño e implementación de redes locales, configuración de switches y optimización de infraestructura de red.",
    items: ["Switches Gestionables", "VLANs", "QoS", "Monitoreo de Red"],
  },
  {
    icon: Wifi,
    title: "Access Points",
    description: "Instalación y configuración de puntos de acceso inalámbricos para cobertura completa en establecimientos.",
    items: ["WiFi Empresarial", "Captive Portal", "Segmentación", "Cobertura"],
  },
  {
    icon: Cable,
    title: "Cableado Estructurado",
    description: "Diseño e instalación de cableado estructurado CAT5e/CAT6 siguiendo estándares profesionales.",
    items: ["CAT6", "Patch Panels", "Rack Organizing", "Certificación"],
  },
  {
    icon: Shield,
    title: "Seguridad CCTV",
    description: "Instalación de sistemas de videovigilancia con grabación centralizada y acceso remoto.",
    items: ["Cámaras IP", "NVR/DVR", "Acceso Remoto", "Almacenamiento"],
  },
  {
    icon: Monitor,
    title: "Soporte TI",
    description: "Mantenimiento preventivo y correctivo de equipos, instalación de sistemas operativos y drivers.",
    items: ["Windows/Linux", "BIOS/UEFI", "Upgrade HDD→SSD", "Drivers"],
  },
  {
    icon: HardDrive,
    title: "Almacenamiento",
    description: "Gestión de sistemas de almacenamiento, backup y recuperación de datos empresariales.",
    items: ["RAID Arrays", "Backup Cloud", "Recuperación", "UPS"],
  },
  {
    icon: Database,
    title: "Servidores",
    description: "Administración de servidores Linux y Windows Server para servicios empresariales.",
    items: ["Linux Server", "Windows Server", "Active Directory", "DNS/DHCP"],
  },
]

export function Infrastructure() {
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
      id="infraestructura"
      ref={sectionRef}
      className="py-24 bg-card/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// 05. Infraestructura"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Redes, Servidores & IT
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 text-pretty">
            Más allá del desarrollo de software, tengo amplia experiencia en infraestructura tecnológica,
            desde la implementación de redes hasta la administración de servidores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infrastructureItems.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-secondary/30 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 75}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {item.description}
              </p>

              <ul className="space-y-1">
                {item.items.map((subItem) => (
                  <li key={subItem} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

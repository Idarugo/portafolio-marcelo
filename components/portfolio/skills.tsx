"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", level: 95 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "PHP", level: 80 },
      { name: "API REST", level: 95 },
      { name: "MySQL", level: 90 },
      { name: "JWT Auth", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Docker", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
      { name: "npm/pnpm", level: 90 },
    ],
  },
]

export function Skills() {
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
      id="habilidades"
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// 04. Habilidades"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Stack Tecnológico
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card border border-border rounded-xl p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + categoryIndex * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-500 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: `${300 + categoryIndex * 100 + skillIndex * 50}ms` }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${400 + categoryIndex * 100 + skillIndex * 50}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Icons Grid */}
        <div
          className={`mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground mb-8 text-center">
            Tecnologías que domino
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Vue.js",
              "React",
              "TypeScript",
              "Node.js",
              "Express",
              "MySQL",
              "Tailwind CSS",
              "PHP",
              "Git",
              "Linux",
              "Pinia",
              "JWT",
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${600 + index * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

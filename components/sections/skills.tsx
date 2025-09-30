"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Icosahedron } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Sparkles } from "lucide-react"
import type * as THREE from "three"

function AnimatedIcosahedrons() {
  const ico1Ref = useRef<THREE.Mesh>(null)
  const ico2Ref = useRef<THREE.Mesh>(null)
  const ico3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (ico1Ref.current) {
      ico1Ref.current.rotation.x = time * 0.4
      ico1Ref.current.rotation.y = time * 0.6
      ico1Ref.current.position.x = Math.sin(time) * 1.5
    }

    if (ico2Ref.current) {
      ico2Ref.current.rotation.x = time * 0.5
      ico2Ref.current.rotation.z = time * 0.4
      ico2Ref.current.position.y = Math.cos(time) * 1.5
    }

    if (ico3Ref.current) {
      ico3Ref.current.rotation.y = time * 0.7
      ico3Ref.current.rotation.z = time * 0.3
      ico3Ref.current.position.z = Math.sin(time * 0.5) * 1
    }
  })

  return (
    <>
      <Icosahedron ref={ico1Ref} args={[0.8, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f97316" metalness={0.9} roughness={0.1} wireframe />
      </Icosahedron>
      <Icosahedron ref={ico2Ref} args={[0.6, 0]} position={[2, 1, -1]}>
        <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
      </Icosahedron>
      <Icosahedron ref={ico3Ref} args={[0.5, 0]} position={[-2, -1, 1]}>
        <meshStandardMaterial color="#fb923c" metalness={0.9} roughness={0.1} />
      </Icosahedron>
    </>
  )
}

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects"],
    color: "from-pink-500 to-rose-500",
    iconColor: "text-pink-600",
  },
  {
    title: "Web Development",
    icon: Code,
    skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    color: "from-blue-500 to-indigo-500",
    iconColor: "text-blue-600",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "Database Design", "Query Optimization"],
    color: "from-cyan-500 to-teal-500",
    iconColor: "text-cyan-600",
  },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined" || !sectionRef.current) return

    let ctx: any

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
          const skillsTitle = sectionRef.current?.querySelector(".skills-title")
          const skillsCards = sectionRef.current?.querySelectorAll(".skills-card")
          const competencyItems = sectionRef.current?.querySelectorAll(".competency-item")
          const threeCanvas = sectionRef.current?.querySelector(".three-canvas")

          if (skillsTitle) {
            gsap.from(skillsTitle, {
              scrollTrigger: {
                trigger: skillsTitle,
                start: "top 80%",
              },
              opacity: 0,
              y: 50,
              scale: 0.8,
              duration: 1,
              ease: "power3.out",
            })
          }

          if (skillsCards && skillsCards.length > 0) {
            gsap.from(skillsCards, {
              scrollTrigger: {
                trigger: skillsCards[0],
                start: "top 80%",
              },
              opacity: 0,
              scale: 0.9,
              rotationX: 15,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
            })
          }

          if (competencyItems && competencyItems.length > 0) {
            gsap.from(competencyItems, {
              scrollTrigger: {
                trigger: competencyItems[0],
                start: "top 80%",
              },
              opacity: 0,
              x: -30,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            })
          }

          if (threeCanvas) {
            gsap.from(threeCanvas, {
              scrollTrigger: {
                trigger: threeCanvas,
                start: "top 80%",
              },
              opacity: 0,
              scale: 0.5,
              duration: 1.5,
              ease: "elastic.out(1, 0.5)",
            })
          }
        }, sectionRef)
      })
    })

    return () => {
      if (ctx) ctx.revert()
    }
  }, [mounted])

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {mounted && (
        <div className="three-canvas absolute top-1/2 left-10 w-[500px] h-[500px] opacity-25 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.8} color="#f97316" />
            <AnimatedIcosahedrons />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
          </Canvas>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/30 to-amber-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-400/30 to-yellow-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="skills-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg">Tools and technologies I work with</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="skills-card border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 card-hover bg-white/70 backdrop-blur-md shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="text-sm px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-gray-800 border border-orange-300 hover:scale-105 transition-transform shadow-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-orange-300 bg-white/70 backdrop-blur-md shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-center text-gray-800">Core Competencies</h3>
                <Sparkles className="h-6 w-6 text-orange-600" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="competency-item flex items-start gap-3 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors shadow-md">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">UI/UX Design</p>
                    <p className="text-sm text-gray-600">User research, wireframing, prototyping, and user testing</p>
                  </div>
                </div>
                <div className="competency-item flex items-start gap-3 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors shadow-md">
                  <div className="w-3 h-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Motion Graphics</p>
                    <p className="text-sm text-gray-600">Animation, video editing, and visual effects</p>
                  </div>
                </div>
                <div className="competency-item flex items-start gap-3 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors shadow-md">
                  <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Visual Storytelling</p>
                    <p className="text-sm text-gray-600">Brand identity, creative direction, and design systems</p>
                  </div>
                </div>
                <div className="competency-item flex items-start gap-3 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors shadow-md">
                  <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Leadership</p>
                    <p className="text-sm text-gray-600">Team management, event organization, and mentorship</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

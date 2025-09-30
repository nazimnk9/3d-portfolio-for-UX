"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Box, Torus } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import type * as THREE from "three"

function AnimatedScene() {
  const torusRef = useRef<THREE.Mesh>(null)
  const box1Ref = useRef<THREE.Mesh>(null)
  const box2Ref = useRef<THREE.Mesh>(null)
  const box3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.5
      torusRef.current.rotation.y = time * 0.3
    }

    if (box1Ref.current) {
      box1Ref.current.position.y = Math.sin(time) * 0.5
      box1Ref.current.rotation.y = time
    }

    if (box2Ref.current) {
      box2Ref.current.position.y = Math.sin(time + 2) * 0.5
      box2Ref.current.rotation.x = time
    }

    if (box3Ref.current) {
      box3Ref.current.position.y = Math.sin(time + 4) * 0.5
      box3Ref.current.rotation.z = time
    }
  })

  return (
    <>
      <Torus ref={torusRef} args={[1.5, 0.4, 16, 100]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </Torus>
      <Box ref={box1Ref} args={[0.5, 0.5, 0.5]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.3} />
      </Box>
      <Box ref={box2Ref} args={[0.5, 0.5, 0.5]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" metalness={0.6} roughness={0.3} />
      </Box>
      <Box ref={box3Ref} args={[0.5, 0.5, 0.5]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#ec4899" metalness={0.6} roughness={0.3} />
      </Box>
    </>
  )
}

const experiences = [
  {
    title: "UI/UX Designer",
    company: "CHARM Ltd. (Creatif)",
    location: "Gulshan 2, Dhaka",
    period: "Aug 2024 – Present",
    description:
      "Designing intuitive web and mobile interfaces at Creatif for CHARM Ltd. & Daiki Axis Bangladesh, while enhancing brand identity and storytelling. Projects span across Japan, India, Indonesia, Sri Lanka, and Bangladesh.",
    tags: ["UI/UX Design", "Web Design", "Mobile Design", "Brand Identity"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "President",
    company: "UITS Computer Club",
    location: "University of Information Technology & Sciences",
    period: "Feb 2024 – Present",
    description:
      "Leading the UITS Computer Club, managing teams, organizing events, and driving creative initiatives. Fostering a community of tech enthusiasts and promoting innovation in technology and design.",
    tags: ["Leadership", "Event Management", "Team Building", "Community"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Motion and Graphics Designer",
    company: "JAANO247",
    location: "Dhaka, Bangladesh",
    period: "Nov 2019 – Feb 2020",
    description:
      "Created engaging motion graphics and visual content for digital platforms. Developed animations and graphics that enhanced user engagement and brand storytelling.",
    tags: ["Motion Graphics", "Animation", "Visual Design", "After Effects"],
    color: "from-orange-500 to-red-500",
  },
]

export default function Experience() {
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
          const experienceTitle = sectionRef.current?.querySelector(".experience-title")
          const experienceCards = sectionRef.current?.querySelectorAll(".experience-card")
          const threeCanvas = sectionRef.current?.querySelector(".three-canvas")

          if (experienceTitle) {
            gsap.from(experienceTitle, {
              scrollTrigger: {
                trigger: experienceTitle,
                start: "top 80%",
              },
              opacity: 0,
              y: 50,
              scale: 0.8,
              duration: 1,
              ease: "power3.out",
            })
          }

          if (experienceCards && experienceCards.length > 0) {
            gsap.from(experienceCards, {
              scrollTrigger: {
                trigger: experienceCards[0],
                start: "top 80%",
              },
              opacity: 0,
              x: -50,
              rotationY: -15,
              duration: 1,
              stagger: 0.2,
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
              rotation: 180,
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
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {mounted && (
        <div className="three-canvas absolute top-1/2 right-10 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
            <AnimatedScene />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="experience-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white">
          Professional Experience
        </h2>
        <p className="text-center text-blue-200 mb-16 max-w-2xl mx-auto text-lg">
          My journey through design and leadership roles
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="experience-card border-2 border-white/20 hover:border-white/40 transition-all duration-300 card-hover bg-white/10 backdrop-blur-md shadow-2xl"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${exp.color} rounded-xl shadow-lg`}>
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2 text-white">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-blue-300 mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-blue-200">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 shadow-md"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

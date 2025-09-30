"use client"

import { useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Torus, Octahedron } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"
import type * as THREE from "three"

function AnimatedTrophyScene() {
  const torusRef = useRef<THREE.Mesh>(null)
  const octaRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3
      torusRef.current.rotation.y = time * 0.5
      torusRef.current.position.y = Math.sin(time * 2) * 0.2
    }

    if (octaRef.current) {
      octaRef.current.rotation.x = time * 0.4
      octaRef.current.rotation.y = time * 0.6
      octaRef.current.position.y = Math.cos(time * 2) * 0.2
    }
  })

  return (
    <>
      <Torus ref={torusRef} args={[1.2, 0.3, 16, 100]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
      </Torus>
      <Octahedron ref={octaRef} args={[1, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
      </Octahedron>
    </>
  )
}

const awards = [
  {
    title: "Volunteer Recognition Award",
    event: "NASA Space Apps Challenge – Bangladesh",
    date: "21 Nov 2024",
    organization: "BASIS Student's Forum",
    description:
      "Recognized for outstanding volunteer contributions with networking opportunities with BASIS industry professionals",
  },
  {
    title: "President Award",
    event: "Falgun Utshab 2024",
    date: "20 Feb 2024",
    organization: "Department of Computer Science Engineering, University of Information Technology & Sciences (UITS)",
    description: "Awarded for exceptional leadership as President of UITS Computer Club",
  },
  {
    title: "Best Executive",
    event: "Summer Fest 2023",
    date: "11 Jun 2023",
    organization: "Department of Computer Science Engineering, University of Information Technology & Sciences (UITS)",
    description: "Recognized as the best executive for outstanding contributions to the event",
  },
  {
    title: "Runner-up",
    event: "Science Project – Earthquake Reminder Device",
    date: "25 Feb 2018",
    organization: "Adamjee Cantonment College National Carnival",
    description: "Secured second place for innovative earthquake reminder device project",
  },
]

export default function Awards() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger)

          const ctx = gsap.context(() => {
            gsap.from(".awards-title", {
              scrollTrigger: {
                trigger: ".awards-title",
                start: "top 80%",
              },
              opacity: 0,
              y: 50,
              scale: 0.8,
              duration: 1,
              ease: "power3.out",
            })

            gsap.from(".awards-card", {
              scrollTrigger: {
                trigger: ".awards-card",
                start: "top 80%",
              },
              opacity: 0,
              y: 50,
              rotationX: 15,
              duration: 1,
              stagger: 0.15,
              ease: "power3.out",
            })

            gsap.from(".three-canvas", {
              scrollTrigger: {
                trigger: ".three-canvas",
                start: "top 80%",
              },
              opacity: 0,
              scale: 0.5,
              rotation: 180,
              duration: 1.5,
              ease: "elastic.out(1, 0.5)",
            })
          }, sectionRef)

          return () => ctx.revert()
        })
      })
    }
  }, [])

  return (
    <section id="awards" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="three-canvas absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#fbbf24" />
          <AnimatedTrophyScene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="awards-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
          Awards & Recognition
        </h2>
        <p className="text-center text-white/80 mb-16 max-w-2xl mx-auto text-lg drop-shadow-md">
          Honors and achievements throughout my journey
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="awards-card border-2 border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-white">{award.title}</CardTitle>
                    <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                      {award.event}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Calendar className="h-4 w-4" />
                      <span>{award.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-amber-100 mb-2">{award.organization}</p>
                <p className="text-white/70 leading-relaxed">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

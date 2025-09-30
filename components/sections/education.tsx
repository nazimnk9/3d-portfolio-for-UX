"use client"

import { useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Cone, Cylinder } from "@react-three/drei"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import type * as THREE from "three"

function AnimatedGraduationScene() {
  const coneRef = useRef<THREE.Mesh>(null)
  const cylinderRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (coneRef.current) {
      coneRef.current.rotation.y = time * 0.5
      coneRef.current.position.y = Math.sin(time) * 0.3
    }

    if (cylinderRef.current) {
      cylinderRef.current.rotation.y = time * 0.5
    }
  })

  return (
    <>
      <Cone ref={coneRef} args={[1.5, 0.2, 4]} position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </Cone>
      <Cylinder ref={cylinderRef} args={[0.8, 0.8, 1.5, 32]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#14b8a6" metalness={0.6} roughness={0.4} />
      </Cylinder>
    </>
  )
}

const education = [
  {
    degree: "Bachelor of Science (B.Sc.)",
    institution: "University of Information Technology & Sciences",
    location: "Dhaka, Bangladesh",
    period: "Feb 2021 – Feb 2025",
    gpa: "CGPA: 3.38",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shaheed Ramiz Uddin Cantonment College",
    location: "Dhaka, Bangladesh",
    period: "Jul 2017 – Apr 2019",
    gpa: "GPA: 4.68",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Govt. Kalachandpur School & College",
    location: "Dhaka, Bangladesh",
    period: "Jan 2015 – Feb 2017",
    gpa: "GPA: 5.00",
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger)

          const ctx = gsap.context(() => {
            gsap.from(".education-title", {
              scrollTrigger: {
                trigger: ".education-title",
                start: "top 80%",
              },
              opacity: 0,
              y: 50,
              scale: 0.8,
              duration: 1,
              ease: "power3.out",
            })

            gsap.from(".education-card", {
              scrollTrigger: {
                trigger: ".education-card",
                start: "top 80%",
              },
              opacity: 0,
              x: 50,
              rotationY: 15,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
            })

            gsap.from(".three-canvas", {
              scrollTrigger: {
                trigger: ".three-canvas",
                start: "top 80%",
              },
              opacity: 0,
              scale: 0.5,
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
    <section id="education" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="three-canvas absolute top-1/2 right-20 w-[500px] h-[500px] opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#10b981" />
          <AnimatedGraduationScene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="education-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
          Education
        </h2>
        <p className="text-center text-white/80 mb-16 max-w-2xl mx-auto text-lg drop-shadow-md">
          My academic background and achievements
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="education-card border-2 border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-1 text-white">{edu.degree}</CardTitle>
                      <p className="text-lg font-semibold text-emerald-100">{edu.institution}</p>
                      <p className="text-sm text-white/70">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                    <p className="text-lg font-bold text-yellow-300">{edu.gpa}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

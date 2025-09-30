"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Phone, Mail, Globe } from "lucide-react"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial color="#ec4899" attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
    </Sphere>
  )
}

export default function About() {
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
          const aboutTitle = sectionRef.current?.querySelector(".about-title")
          const aboutCards = sectionRef.current?.querySelectorAll(".about-card")
          const countryBadges = sectionRef.current?.querySelectorAll(".country-badge")
          const threeCanvas = sectionRef.current?.querySelector(".three-canvas")

          if (aboutTitle) {
            gsap.from(aboutTitle, {
              scrollTrigger: {
                trigger: aboutTitle,
                start: "top 80%",
              },
              opacity: 0,
              y: 50,
              scale: 0.8,
              duration: 1,
              ease: "power3.out",
            })
          }

          if (aboutCards && aboutCards.length > 0) {
            gsap.from(aboutCards, {
              scrollTrigger: {
                trigger: aboutCards[0],
                start: "top 80%",
              },
              opacity: 0,
              y: 50,
              rotationY: 15,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
            })
          }

          if (countryBadges && countryBadges.length > 0) {
            gsap.from(countryBadges, {
              scrollTrigger: {
                trigger: countryBadges[0],
                start: "top 80%",
              },
              opacity: 0,
              scale: 0,
              rotation: 360,
              duration: 0.5,
              stagger: 0.1,
              ease: "back.out(1.7)",
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {mounted && (
        <div className="three-canvas absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f472b6" />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-400/30 to-pink-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-fuchsia-400/30 to-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-rose-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="about-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg">
          Get to know more about my background and expertise
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="about-card border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 card-hover bg-white/70 backdrop-blur-md shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Profile</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                A passionate UI/UX Designer with hands-on experience in web and mobile interface design, motion
                graphics, and visual storytelling. Currently working at Creatif, a sister concern of CHARM Ltd. & Daiki
                Axis Bangladesh, contributing to projects across Bangladesh, Japan, India, Indonesia, and Sri Lanka.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Strong leadership skills developed as President of UITS Computer Club, with experience managing teams,
                events, and creative initiatives. Dedicated to delivering user-centric and impactful digital experiences
                that blend design, technology, and innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="about-card border-2 border-fuchsia-200 hover:border-fuchsia-400 transition-all duration-300 card-hover bg-white/70 backdrop-blur-md shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-rose-50 transition-colors">
                  <Mail className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a
                      href="mailto:spsshimul323@gmail.com"
                      className="text-gray-600 hover:text-rose-600 transition-colors"
                    >
                      spsshimul323@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-fuchsia-50 transition-colors">
                  <Phone className="h-5 w-5 text-fuchsia-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <a href="tel:+8801926609003" className="text-gray-600 hover:text-fuchsia-600 transition-colors">
                      +880 1926 609003
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                  <MapPin className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Location</p>
                    <p className="text-gray-600">
                      Kuril Kaji Bari Mosque Road
                      <br />
                      Bissharoad, Dhaka - 1229
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                  <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Date of Birth</p>
                    <p className="text-gray-600">January 29, 2000</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold mb-6 text-gray-800">International Experience</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge
              variant="secondary"
              className="country-badge text-base px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white border-0 hover:scale-110 transition-transform shadow-lg"
            >
              🇧🇩 Bangladesh
            </Badge>
            <Badge
              variant="secondary"
              className="country-badge text-base px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white border-0 hover:scale-110 transition-transform shadow-lg"
            >
              🇯🇵 Japan
            </Badge>
            <Badge
              variant="secondary"
              className="country-badge text-base px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 hover:scale-110 transition-transform shadow-lg"
            >
              🇮🇳 India
            </Badge>
            <Badge
              variant="secondary"
              className="country-badge text-base px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white border-0 hover:scale-110 transition-transform shadow-lg"
            >
              🇮🇩 Indonesia
            </Badge>
            <Badge
              variant="secondary"
              className="country-badge text-base px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0 hover:scale-110 transition-transform shadow-lg"
            >
              🇱🇰 Sri Lanka
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

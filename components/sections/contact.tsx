"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react"
import type * as THREE from "three"

function AnimatedContactSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.3
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.4
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
  )
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger)

          const ctx = gsap.context(() => {
            gsap.from(".contact-title", {
              scrollTrigger: {
                trigger: ".contact-title",
                start: "top 80%",
              },
              opacity: 0,
              y: 50,
              scale: 0.8,
              duration: 1,
              ease: "power3.out",
            })

            gsap.from(".contact-card", {
              scrollTrigger: {
                trigger: ".contact-card",
                start: "top 80%",
              },
              opacity: 0,
              scale: 0.95,
              rotationY: 10,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="three-canvas absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
          <AnimatedContactSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-700 to-purple-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="contact-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
          Get In Touch
        </h2>
        <p className="text-center text-white/80 mb-16 max-w-2xl mx-auto text-lg drop-shadow-md">
          Let's collaborate on your next project
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="contact-card border-2 border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-white">Email</p>
                  <a href="mailto:spsshimul323@gmail.com" className="text-white/70 hover:text-white transition-colors">
                    spsshimul323@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-white">Phone</p>
                  <a href="tel:+8801926609003" className="text-white/70 hover:text-white transition-colors">
                    +880 1926 609003
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-white">Location</p>
                  <p className="text-white/70">
                    Kuril Kaji Bari Mosque Road
                    <br />
                    Bissharoad, Dhaka - 1229
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-lg">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-white">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/shimul-parvez-sarkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    linkedin.com/in/shimul-parvez-sarkar
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/70 mb-4">Also find me on:</p>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-white/30 text-white hover:bg-white/20 bg-transparent"
                  >
                    <a href="https://www.behance.net/shimul-parvez-sarkar" target="_blank" rel="noopener noreferrer">
                      Behance
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-white/30 text-white hover:bg-white/20 bg-transparent"
                  >
                    <a
                      href="https://www.linkedin.com/in/shimul-parvez-sarkar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="contact-card border-2 border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-white text-indigo-600 hover:bg-white/90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70">© 2025 Shimul Parvez. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

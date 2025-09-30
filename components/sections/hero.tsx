"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Linkedin, Github, Sparkles } from "lucide-react"
import Scene3D from "@/components/3d/scene"

export default function Hero() {
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
          const heroTitle = sectionRef.current?.querySelector(".hero-title")
          const heroSubtitle = sectionRef.current?.querySelector(".hero-subtitle")
          const heroDescription = sectionRef.current?.querySelector(".hero-description")
          const heroButtons = sectionRef.current?.querySelector(".hero-buttons")
          const heroSocial = sectionRef.current?.querySelectorAll(".hero-social")
          const hero3d = sectionRef.current?.querySelector(".hero-3d")
          const floatingBadge = sectionRef.current?.querySelector(".floating-badge")

          if (heroTitle) {
            gsap.from(heroTitle, {
              opacity: 0,
              x: -50,
              duration: 1.2,
              delay: 0.5,
              ease: "power3.out",
            })
          }

          if (heroSubtitle) {
            gsap.from(heroSubtitle, {
              opacity: 0,
              x: -30,
              duration: 1,
              delay: 0.9,
              ease: "power3.out",
            })
          }

          if (heroDescription) {
            gsap.from(heroDescription, {
              opacity: 0,
              x: -30,
              duration: 1,
              delay: 1.2,
              ease: "power3.out",
            })
          }

          if (heroButtons) {
            gsap.from(heroButtons, {
              opacity: 0,
              x: -30,
              duration: 1,
              delay: 1.5,
              ease: "power3.out",
            })
          }

          if (heroSocial && heroSocial.length > 0) {
            gsap.from(heroSocial, {
              opacity: 0,
              scale: 0,
              duration: 0.8,
              delay: 1.8,
              stagger: 0.1,
              ease: "back.out(1.7)",
            })
          }

          if (hero3d) {
            gsap.from(hero3d, {
              opacity: 0,
              x: 50,
              duration: 1.5,
              delay: 0.8,
              ease: "power3.out",
            })
          }

          if (floatingBadge) {
            gsap.to(floatingBadge, {
              y: -20,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
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
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="floating-badge inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">Available for Freelance Projects</span>
            </div>

            <div className="space-y-4">
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
                <span className="text-white drop-shadow-2xl">Shimul Parvez</span>
              </h1>

              <h2 className="hero-subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 drop-shadow-lg">
                UI/UX Designer & Creative Innovator
              </h2>
            </div>

            <p className="hero-description text-base sm:text-lg text-white/80 leading-relaxed text-pretty drop-shadow-md max-w-xl">
              Crafting intuitive and beautiful digital experiences with expertise in web & mobile design, motion
              graphics, and visual storytelling. Currently designing for international projects across Japan, India,
              Indonesia, Sri Lanka, and Bangladesh.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <a href="#experience">View My Work</a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="hero-social h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white hover:text-blue-600 text-white transition-all duration-300 hover:scale-110"
              >
                <a href="mailto:spsshimul323@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="hero-social h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white hover:text-blue-600 text-white transition-all duration-300 hover:scale-110"
              >
                <a href="https://www.linkedin.com/in/shimul-parvez-sarkar/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="hero-social h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white hover:text-blue-600 text-white transition-all duration-300 hover:scale-110"
              >
                <a href="https://www.behance.net/shimul-parvez-sarkar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="hero-3d relative h-[500px] lg:h-[600px] w-full">
            <Scene3D />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/70">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  )
}

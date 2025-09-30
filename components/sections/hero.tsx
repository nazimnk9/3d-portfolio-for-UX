"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Linkedin, Github, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">Available for Freelance Projects</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance"
              >
                <span className="text-white drop-shadow-2xl">Shimul Parvez</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 drop-shadow-lg"
              >
                UI/UX Designer & Creative Innovator
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-base sm:text-lg text-white/80 leading-relaxed text-pretty drop-shadow-md max-w-xl"
            >
              Crafting intuitive and beautiful digital experiences with expertise in web & mobile design, motion
              graphics, and visual storytelling. Currently designing for international projects across Japan, India,
              Indonesia, Sri Lanka, and Bangladesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
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
            </motion.div>

            <div className="flex items-center gap-4">
              {[
                { href: "mailto:spsshimul323@gmail.com", icon: Mail, delay: 1.8 },
                { href: "https://www.linkedin.com/in/shimul-parvez-sarkar/", icon: Linkedin, delay: 1.9 },
                { href: "https://www.behance.net/shimul-parvez-sarkar", icon: Github, delay: 2.0 },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: social.delay, type: "spring", stiffness: 200 }}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    asChild
                    className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white hover:text-blue-600 text-white transition-all duration-300 hover:scale-110"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shimul-rc8gdnAQcvJGlgfTcwhJCeeUdaXLfb.jpg"
                alt="Shimul Parvez"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/70">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 text-white/70" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

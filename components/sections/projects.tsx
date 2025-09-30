"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with intuitive UI/UX design for seamless shopping experience",
    tags: ["UI/UX", "Figma", "Responsive Design"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application with focus on accessibility",
    tags: ["Mobile Design", "Prototyping", "User Testing"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Brand Identity System",
    description: "Complete brand identity design including logo, color palette, and design guidelines",
    tags: ["Branding", "Illustrator", "Visual Design"],
    color: "from-orange-500 to-red-500",
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg"
        >
          Some of my recent design work
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <Card className="border-2 border-white/20 hover:border-white/40 transition-all duration-300 card-hover bg-white/10 backdrop-blur-md shadow-2xl h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <ExternalLink className="h-5 w-5 text-white/70 hover:text-white transition-colors flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

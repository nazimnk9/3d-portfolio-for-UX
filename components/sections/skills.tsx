"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/30 to-amber-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-400/30 to-yellow-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg"
        >
          Tools and technologies I work with
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 * index }}
              >
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 card-hover bg-white/70 backdrop-blur-md shadow-xl h-full">
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
              </motion.div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Card className="border-2 border-orange-300 bg-white/70 backdrop-blur-md shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Sparkles className="h-6 w-6 text-orange-600" />
                  <h3 className="text-2xl font-bold text-center text-gray-800">Core Competencies</h3>
                  <Sparkles className="h-6 w-6 text-orange-600" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "UI/UX Design",
                      desc: "User research, wireframing, prototyping, and user testing",
                      color: "from-blue-500 to-purple-500",
                      delay: 0.7,
                    },
                    {
                      title: "Motion Graphics",
                      desc: "Animation, video editing, and visual effects",
                      color: "from-pink-500 to-rose-500",
                      delay: 0.8,
                    },
                    {
                      title: "Visual Storytelling",
                      desc: "Brand identity, creative direction, and design systems",
                      color: "from-cyan-500 to-teal-500",
                      delay: 0.9,
                    },
                    {
                      title: "Leadership",
                      desc: "Team management, event organization, and mentorship",
                      color: "from-orange-500 to-red-500",
                      delay: 1.0,
                    },
                  ].map((competency, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: competency.delay }}
                      className="flex items-start gap-3 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors shadow-md"
                    >
                      <div
                        className={`w-3 h-3 bg-gradient-to-br ${competency.color} rounded-full mt-2 flex-shrink-0`}
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{competency.title}</p>
                        <p className="text-sm text-gray-600">{competency.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

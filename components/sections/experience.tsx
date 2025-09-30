"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-blue-200 mb-16 max-w-2xl mx-auto text-lg"
        >
          My journey through design and leadership roles
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <Card className="border-2 border-white/20 hover:border-white/40 transition-all duration-300 card-hover bg-white/10 backdrop-blur-md shadow-2xl">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

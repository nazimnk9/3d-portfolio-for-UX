"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="education" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-white/80 mb-16 max-w-2xl mx-auto text-lg drop-shadow-md"
        >
          My academic background and achievements
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02]">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

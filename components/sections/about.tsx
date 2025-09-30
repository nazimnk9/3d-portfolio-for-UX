"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Phone, Mail, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-400/30 to-pink-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-fuchsia-400/30 to-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-rose-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg"
        >
          Get to know more about my background and expertise
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Card className="border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 card-hover bg-white/70 backdrop-blur-md shadow-xl h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Profile</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A passionate UI/UX Designer with hands-on experience in web and mobile interface design, motion
                  graphics, and visual storytelling. Currently working at Creatif, a sister concern of CHARM Ltd. &
                  Daiki Axis Bangladesh, contributing to projects across Bangladesh, Japan, India, Indonesia, and Sri
                  Lanka.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Strong leadership skills developed as President of UITS Computer Club, with experience managing teams,
                  events, and creative initiatives. Dedicated to delivering user-centric and impactful digital
                  experiences that blend design, technology, and innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Card className="border-2 border-fuchsia-200 hover:border-fuchsia-400 transition-all duration-300 card-hover bg-white/70 backdrop-blur-md shadow-xl h-full">
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
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl font-bold mb-6 text-gray-800"
          >
            International Experience
          </motion.h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { flag: "🇧🇩", name: "Bangladesh", color: "from-green-500 to-green-600", delay: 0.7 },
              { flag: "🇯🇵", name: "Japan", color: "from-red-500 to-red-600", delay: 0.8 },
              { flag: "🇮🇳", name: "India", color: "from-orange-500 to-orange-600", delay: 0.9 },
              { flag: "🇮🇩", name: "Indonesia", color: "from-red-600 to-red-700", delay: 1.0 },
              { flag: "🇱🇰", name: "Sri Lanka", color: "from-yellow-500 to-yellow-600", delay: 1.1 },
            ].map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: country.delay, type: "spring", stiffness: 200 }}
              >
                <Badge
                  variant="secondary"
                  className={`text-base px-6 py-3 bg-gradient-to-r ${country.color} text-white border-0 hover:scale-110 transition-transform shadow-lg`}
                >
                   {country.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

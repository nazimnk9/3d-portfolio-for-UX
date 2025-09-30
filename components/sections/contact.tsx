"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-700 to-purple-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-white/80 mb-16 max-w-2xl mx-auto text-lg drop-shadow-md"
        >
          Let's collaborate on your next project
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 h-full">
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
                    <a
                      href="mailto:spsshimul323@gmail.com"
                      className="text-white/70 hover:text-white transition-colors"
                    >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 h-full">
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70">© 2025 Shimul Parvez. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

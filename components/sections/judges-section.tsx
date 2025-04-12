"use client"

import { motion } from "framer-motion"
import { Linkedin, Phone } from "lucide-react"
import Image from 'next/image'

const judges = [
  {
    name: "Sri Ram",
    role: "Information Technology",
    image: "source/sriram.jpg",
    linkedin: "https://www.linkedin.com/in/sriram291/",
    phone: "7904331103"
  },
  {
    name: "Naveen Kumar",
    role: "Information Technology",
    image: "source/navin.jpg",
    linkedin: "https://www.linkedin.com/in/naveenkumarb715/",
    phone: "9965019566"
  },
  {
    name: "Krishna",
    role: "Computer Science and Business Systems",
    image: "source/krishna.jpg",
    linkedin: "https://www.linkedin.com/in/krishnalo1806/",
    phone: "8667815090"
  },
  {
    name: "Nirmal",
    role: "Computer Science and Business Systems",
    image: "source/nirmal.JPG",
    linkedin: "https://www.linkedin.com/in/nirmalkumar005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    phone: "9489525505"
  }
]

export function JudgesSection() {
  return (
    <section id="judges" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Organizers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              className="glass-card p-6 text-center rounded-xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="rounded-full object-cover w-full h-full border-2 border-blue-300"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-blue-100 mb-1">{judge.name}</h3>
              <p className="text-sm sm:text-base text-blue-200 mb-4">{judge.role}</p>

              <div className="flex flex-col items-center gap-2">
                {judge.phone && (
                  <a
                    href={`tel:${judge.phone}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {judge.phone}
                  </a>
                )}
                <a
                  href={judge.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JudgesSection

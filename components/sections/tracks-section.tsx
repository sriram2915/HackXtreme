"use client"

import { motion } from "framer-motion"
import { Cpu, Shield, Coins, LineChart, Smartphone } from "lucide-react"

const tracks = [
  {
    icon: Cpu,
    title: "Digital Citizen Services",
    description: "Leverage artificial intelligence to revolutionize financial services",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Coins,
    title: "Smart Payments and Management",
    description: "Create innovative payment solutions for the digital age",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: LineChart,
    title: "Safety & Disaster Management",
    description: "Develop advanced trading and investment platforms",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Smartphone,
    title: "Urban Mobility",
    description: "Design the future of mobile-first banking experiences",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Shield,
    title: "Open choice related to Smart Cities",
    description: "Build secure and transparent financial solutions",
    color: "from-purple-500 to-pink-500"
  }
]

export function TracksSection() {
  return (
    <section id="tracks" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Challenge Tracks
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              className="glass-card p-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-gradient-to-r ${track.color}`}>
                <track.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-100 mb-4">{track.title}</h3>
              <p className="text-blue-200">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TracksSection;
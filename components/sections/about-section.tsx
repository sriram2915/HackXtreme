"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About HackXtreme
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg lg:text-xl text-blue-200 leading-relaxed">
              HackXtreme is more than just a hackathon – it's a platform for innovation in technology.
              Organized by the Department of Information Technology and the Department of Computer Science and Business Systems, this 24-hours event brings together developers, designers and create impactful solutions.
              The challenge is to solve real-world problems in the Future, To make a Better Tomorrow.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-200 leading-relaxed">
              Join us for an intense journey of coding, creativity, and collaboration.
              Whether you're passionate about developing cutting-edge technology, designing user-friendly interfaces, or creating business models for the future, HackXtreme is your chance to make a real impact.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card w-full aspect-video rounded-xl overflow-hidden"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="source/about.png"
              alt="Hackathon participants collaborating"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;

"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About HackXtreme
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-blue-200">
            HackXtreme is more than just a hackathon – it's a platform for innovation in financial technology.
            Organized by the Department of Information Technology and the Department of Computer Science and Business Systems, this 24-hours event brings together developers, designers and create impactful solutions.
            The challenge is to solve real-world problems in the Fintech space, from improving digital banking systems to enhancing payment solutions and promoting financial inclusion.
            </p>
            <p className="text-xl text-blue-200">
            Join us for an intense journey of coding, creativity, and collaboration.
            Whether you're passionate about developing cutting-edge technology, designing user-friendly interfaces, or creating business models for the future of financial services, HackXtreme is your chance to make a real impact.             </p>
          </motion.div>
          <motion.div 
            className="glass-card aspect-video rounded-xl overflow-hidden"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="source/about.jpg"
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
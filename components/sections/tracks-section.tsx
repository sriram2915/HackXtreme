"use client"

import { motion } from "framer-motion"
import Image from 'next/image'

const tracks = [
  {
    image: "/source/sys.jpg", // Ensure image is in /public/images/
    // title: "Digital Citizen Services",
    description: "Isysway Technologies is a training institute in Thanjavur offering courses in programming, web design, and IT skills. Established in 2007, it focuses on tech and career development.",
    color: "from-blue-500 to-purple-500"
  },
]

export function TracksSection() {
  return (
    <section id="tracks" className="py-30 px-4 md:px-6">
      <div className="container mx-auto text-center ">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sponser
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {tracks.map((track, index) => (
            <motion.div
              // key={track.title}
              className="glass-card p-8 mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y:0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
                <Image 
                  src={track.image}
                  alt="image"
                  width={146} // Increased size
                  height={106}
                  className="mx-auto rounded mb-4 object-cover w-full h-full border-2 border-blue-300 "
                />
              
              {/* <h3 className="text-2xl font-bold text-blue-100 mb-4">{track.title}</h3> */}
              <p className="text-blue-200">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TracksSection;

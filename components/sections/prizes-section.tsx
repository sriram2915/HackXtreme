"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Gift } from "lucide-react"

const prizes = [
  {
    icon: Trophy,
    place: "1st Place",
    prize: "₹25,000",
    benefits: ["Cash Prize", "Giant check"]
  },
  {
    icon: Award,
    place: "2nd Place",
    prize: "₹15,000",
    benefits: ["Cash Prize", "Giant check"]
  },
  {
    icon: Gift,
    place: "3rd Place",
    prize: "₹10,000",
    benefits: ["Cash Prize", "Giant check"]
  }
]

export function PrizesSection() {
  return (
    <section id="prizes" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Prizes & Rewards
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              className="glass-card p-8 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <prize.icon className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-blue-100 mb-4">{prize.place}</h3>
              <p className="text-3xl font-bold text-blue-100 mb-6 neon-glow">{prize.prize}</p>
              <ul className="space-y-3">
                {prize.benefits.map((benefit, benefitIndex) => (
                  <motion.li
                    key={benefit}
                    className="text-blue-200"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrizesSection;
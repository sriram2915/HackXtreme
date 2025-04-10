"use client"
import * as React from "react"
import { motion } from "framer-motion"

export default function FAQ() {
  const faqs = [
    {
      category: "General",
      question: "What is HackXtreme'25?",
      answer:
        "HackXtreme'25 is an innovative hackathon event that brings together creative minds and tech enthusiasts to tackle real-world challenges."
    },
    {
      category: "Registration",
      question: "Who can participate in HackXtreme'25?",
      answer:
        "Anyone with a passion for technology and innovation is welcome to participate – from students and professionals to hobbyists."
    },
    {
      category: "Logistics",
      question: "What are the dates for HackXtreme'25?",
      answer:
        "HackXtreme'25 is scheduled to take place from 28th Apr to 29th Apr. Check our official website for the latest schedule updates."
    },
    {
      category: "Logistics",
      question: "Where do I get regular updates for the event?",
      answer:
        "Follow our social media channels and subscribe to our newsletter to receive timely updates and announcements about HackXtreme'25."
    }
  ]

  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}  
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card p-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div>
                  <p className="text-sm text-gray-400">{faq.category}</p>
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                </div>
                <span className="ml-4 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <motion.div 
                  className="mt-4 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

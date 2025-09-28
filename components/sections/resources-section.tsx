"use client"

import { motion } from "framer-motion"
import { FileText, Book, Video, Download, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"

const resources = [
  {
    icon: Download,
    title: "Submission Template",
    description: "Template for Submitting Project Proposal",
    link: "/files/submission.pdf" // RulePDF
  },
  {
    icon: FileText,
    title: "Rule Book",
    description: "Complete guidelines and judging criteria",
    link: "/files/rule.pdf" // RulePDF
  },
  {
    icon: Book,
    title: "Brochure",
    description: "Event details and Invitation to the event",
    link: "/files/brochure.pdf" // BrochurePDF
  },
  
  {
    icon: Timer,
    title: "Timeline",
    description: "Code templates to kickstart your project",
    link: "/files/timeLine.pdf" // TimelinePDF
  }
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Resources
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="glass-card p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <resource.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-blue-100 mb-2">{resource.title}</h3>
              <p className="text-blue-200 mb-4">{resource.description}</p>
              <Button asChild variant="outline" className="w-full">
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection;
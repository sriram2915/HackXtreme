"use client"

import { Navbar } from "@/components/navbar"
import { CountdownTimer } from "@/components/countdown-timer"
import { ParticlesBackground } from "@/components/particles-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeProvider } from "next-themes";
import { ArrowRight, Award, Calendar, Users, Zap } from "lucide-react"

// Importing all the sections
import About from "@/components/sections/about-section"
import Schedule from "@/components/sections/schedule-section"
import Tracks from "@/components/sections/tracks-section" 
import Prizes from "@/components/sections/prizes-section"
import Judges from "@/components/sections/judges-section"
import Resources from "@/components/sections/resources-section"
import FAQ from "@/components/sections/faq-section"
import Contact from "@/components/sections/contact-section"


export default function Home() {
  return (
   
    <main className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <Navbar />


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto text-center space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold neon-glow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            HackXtreme'25
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us in revolutionizing the future of financial technology
          </motion.p>
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CountdownTimer />
          </motion.div>
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="neon-button text-lg" size="lg" asChild>
              <Link href="https://forms.google.com/register" target="_blank">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* <Button size="lg" variant="outline" className="glass-card text-lg">
              Learn More
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "₹30,000 in Prizes",
                description: "Win big with cash prizes"
              },
              {
                icon: Users,
                title: "25+ Teams",
                description: "Connect with fellow innovators"
              },
              {
                icon: Calendar,
                title: "24 Hours",
                description: "One day of intense innovation"
              },
              {
                icon: Zap,
                title: "Theme",
                description: "Tech for a Better Tomorrow"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card p-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-blue-500/20">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-100">{feature.title}</h3>
                  <p className="text-blue-200">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Sections from the Navbar */}
      <section id="about"><About /></section>
      <section id="schedule"><Schedule /></section>
      {/* <section id="tracks"><Tracks /></section> */}
      <section id="prizes"><Prizes /></section>
      <section id="judges"><Judges /></section>
      <section id="resources"><Resources /></section>
      <section id="faq"><FAQ /></section>
      <section id="contact"><Contact /></section> 
    </main>
   
  )
}

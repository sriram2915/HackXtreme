"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const schedule = [
  {
    day: "Day 1",
    date: "Apr 28, 2025",
    events: [
      { time: "08:30 AM", title: "Registration", description: "Welcome & keynote" },
      { time: "10:00 AM", title: "Opening Ceremony", description: "Network & team up" },
      { time: "11:30 AM", title: "Hacking Begins", description: "Kick off innovation" },
      { time: "01:00 PM", title: "Lunch", description: "" },
      { time: "05:00 PM", title: "Coffee Break", description: "" },
      { time: "07:00 PM", title: "Dinner", description: "" }
    ]
  },
  {
    day: "Day 2",
    date: "Apr 29, 2025",
    events: [
      { time: "07:30 AM", title: "Breakfast", description: "" },
      { time: "11:30 AM", title: "Final Presentations", description: "Submit solution & Showcase ideas" },
      { time: "01:00 PM", title: "Lunch", description: "" },
      { time: "02:00 PM", title: "Award Ceremony", description: "Celebrate winners" }
    ]
  }
]

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 neon-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Event Schedule
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              className="glass-card p-6 sm:p-8 rounded-xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start sm:items-center gap-4 mb-6">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-100">{day.day}</h3>
                  <p className="text-sm sm:text-base text-blue-200">{day.date}</p>
                </div>
              </div>

              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.time}
                    className="flex gap-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: eventIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 flex items-center">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                      <span className="ml-2 text-sm sm:text-base text-blue-200">{event.time}</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-blue-100">{event.title}</h4>
                      <p className="text-sm sm:text-base text-blue-200">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection

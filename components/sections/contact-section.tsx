"use client"

import * as React from "react"

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Our College</h3>
              <p className="mt-1 text-lg">K. Ramakrishnan College of Engineering</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Address</h3>
              <p className="mt-1 text-lg">Samayapuram, Trichy, Tamil Nadu, India</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Email</h3>
              <p className="mt-1 text-lg">cyberknightshack@gmail.com</p>
            </div>
          </div>
          {/* Embedded Google Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.087585454736!2d78.7381613!3d10.9290962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf7316aaaaaab:0xb794422e551a89ad!2sK.%20Ramakrishnan%20College%20of%20Engineering%20(KRCE)!5e0!3m2!1sen!2sin!4v1690952039672!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="K. Ramakrishnan College of Engineering, Samayapuram Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

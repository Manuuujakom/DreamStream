import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  User,
  Building
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - JAKOM',
  description: 'Get in touch with JAKOM for professional graphics design, data analysis, accounting, virtual assistance, and kids hub services. Let\'s discuss your project needs.',
  keywords: 'contact JAKOM, get quote, business services, project consultation, customer support',
}

export default function ContactUsPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Nairobi, Kenya",
      description: "Serving clients locally and internationally"
    },
    {
      icon: Mail,
      title: "Email",
      content: "emmanuelomondiobare@gmail.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+254 794 255 000",
      description: "Available Monday to Friday, 9 AM - 6 PM EAT"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9 AM - 6 PM EAT",
      description: "Weekend consultations by appointment"
    }
  ]

  const services = [
    { name: "Graphics & Design", description: "Logo design, branding, web design, print materials" },
    { name: "Data Analysis", description: "Business intelligence, statistical analysis, reporting" },
    { name: "Accounting & Bookkeeping", description: "Financial management, tax preparation, payroll" },
    { name: "Virtual Assistance", description: "Administrative support, customer service, scheduling" },
    { name: "Kids Hub", description: "Coding classes, digital art, problem-solving programs" }
  ]

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F8F8F8] font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0A1128] via-[#1a2332] to-[#0A1128] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(201,176,114,0.05)] to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8F8F8] leading-tight mb-6">
                Let's <span className="text-[#C9B072]">Talk</span> Business
              </h1>
              <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8">
                Ready to elevate your business? Get in touch with us today to discuss how our comprehensive solutions can empower your success and drive meaningful growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="mailto:emmanuelomondiobare@gmail.com" className="px-8 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                  <Mail className="mr-2" size={20} />
                  Send Email
                </a>
                <a href="tel:+254794255000" className="px-8 py-4 border-2 border-[#C9B072] text-[#C9B072] font-semibold text-lg rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
                  <Phone className="mr-2" size={20} />
                  Call Us
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Contact us"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              We're here to help! Reach out to us through any of the following channels and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#C9B072] text-[#0A1128] rounded-full">
                    <info.icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0A1128] mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-[#4CAF50] mb-2">{info.content}</p>
                <p className="text-[#666666] text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Our Services
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your business needs and drive growth across all areas of your operation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1a2332] rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold text-[#F8F8F8] mb-3">{service.name}</h3>
                <p className="text-[#CCD2E3] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Have a specific project in mind? Fill out the form below and we'll get back to you with a personalized consultation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-[#0A1128] font-semibold mb-2">
                    <User className="mr-2" size={20} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9B072] focus:border-transparent outline-none transition duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="flex items-center text-[#0A1128] font-semibold mb-2">
                    <Mail className="mr-2" size={20} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9B072] focus:border-transparent outline-none transition duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="flex items-center text-[#0A1128] font-semibold mb-2">
                    <Phone className="mr-2" size={20} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9B072] focus:border-transparent outline-none transition duration-300"
                    placeholder="+254 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="flex items-center text-[#0A1128] font-semibold mb-2">
                    <Building className="mr-2" size={20} />
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9B072] focus:border-transparent outline-none transition duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-[#0A1128] font-semibold mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9B072] focus:border-transparent outline-none transition duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="graphics-design">Graphics & Design</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="accounting-bookkeeping">Accounting & Bookkeeping</option>
                  <option value="virtual-assistance">Virtual Assistance</option>
                  <option value="kids-hub">Kids Hub</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="flex items-center text-[#0A1128] font-semibold mb-2">
                  <MessageSquare className="mr-2" size={20} />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9B072] focus:border-transparent outline-none transition duration-300 resize-vertical"
                  placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-bold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What services does JAKOM offer?",
                answer: "We offer comprehensive business solutions including Graphics & Design, Data Analysis, Accounting & Bookkeeping, Virtual Assistance, and educational programs through our Kids Hub."
              },
              {
                question: "How quickly can you start on my project?",
                answer: "Most projects can begin within 1-2 business days after initial consultation and agreement on project scope and requirements."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes, we work with startups, small businesses, and large enterprises. Our solutions are scalable and can be tailored to meet your specific needs and budget."
              },
              {
                question: "What are your payment terms?",
                answer: "Payment terms vary by project type and scope. We offer flexible arrangements including milestone-based payments and monthly retainers for ongoing services."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Absolutely! We believe in building long-term partnerships and provide ongoing support, maintenance, and consultation as needed."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1a2332] rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#F8F8F8] mb-3">{faq.question}</h3>
                <p className="text-[#CCD2E3] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 border-t border-[#C9B072]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#333333] mb-10 leading-relaxed">
            Don't wait - reach out today and let's discuss how we can help transform your business with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:emmanuelomondiobare@gmail.com" className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Email Us Now
            </a>
            <a href="tel:+254794255000" className="px-10 py-4 border-2 border-[#C9B072] text-[#C9B072] font-bold text-xl rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
              Call Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
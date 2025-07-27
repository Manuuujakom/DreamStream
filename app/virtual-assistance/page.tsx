import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Headset, 
  Calendar, 
  Mail, 
  Phone, 
  FileText, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Virtual Assistance Services - JAKOM',
  description: 'Professional virtual assistance services to free your time and focus on core business activities. Efficient administrative support for growing businesses.',
  keywords: 'virtual assistant, administrative support, business support, remote assistance, executive assistant, customer service',
}

export default function VirtualAssistancePage() {
  const services = [
    {
      icon: Mail,
      title: "Administrative Support",
      description: "Comprehensive administrative assistance to keep your business operations running smoothly and efficiently.",
      features: ["Email management", "Document preparation", "Data entry", "File organization"]
    },
    {
      icon: Calendar,
      title: "Scheduling & Planning",
      description: "Professional calendar management and event coordination to optimize your time and productivity.",
      features: ["Calendar management", "Appointment scheduling", "Meeting coordination", "Travel planning"]
    },
    {
      icon: Phone,
      title: "Customer Support",
      description: "Professional customer service and support to maintain excellent relationships with your clients.",
      features: ["Customer inquiries", "Phone support", "Live chat support", "Follow-up communications"]
    },
    {
      icon: Globe,
      title: "Digital Marketing Support",
      description: "Assistance with online marketing activities to enhance your digital presence and reach.",
      features: ["Social media management", "Content creation", "SEO tasks", "Online research"]
    }
  ]

  const benefits = [
    {
      title: "Cost Effective",
      description: "Save on overhead costs while getting professional support when you need it.",
      icon: "💰"
    },
    {
      title: "Flexible Scaling",
      description: "Scale support up or down based on your business needs and seasonal demands.",
      icon: "📈"
    },
    {
      title: "Expert Skills",
      description: "Access to specialized skills and expertise without the commitment of full-time hiring.",
      icon: "🎯"
    },
    {
      title: "Time Freedom",
      description: "Focus on core business activities while we handle administrative tasks.",
      icon: "⏰"
    }
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
                Professional <span className="text-[#C9B072]">Virtual</span> Assistance
              </h1>
              <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8">
                Efficient administrative support that frees your time to focus on core business activities. Get professional assistance when you need it, how you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact-us" className="px-8 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                  Get Support Today
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-[#C9B072] text-[#C9B072] font-semibold text-lg rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Virtual Assistant at Work"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              Our Virtual Services
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              From administrative tasks to customer support, we provide comprehensive virtual assistance tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#C9B072] text-[#0A1128] rounded-full mr-4">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1128]">{service.title}</h3>
                </div>
                <p className="text-[#333333] mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#333333]">
                      <CheckCircle className="text-[#4CAF50] mr-3" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Why Choose Virtual Assistance?
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Virtual assistance offers flexibility, cost savings, and access to skilled professionals without the overhead of full-time employees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">{benefit.title}</h3>
                <p className="text-[#CCD2E3] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              How It Works
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Getting started with virtual assistance is simple and straightforward. Here's how we make it work for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Discuss your needs and requirements with our team" },
              { step: "02", title: "Matching", description: "We match you with the right virtual assistant for your tasks" },
              { step: "03", title: "Onboarding", description: "Quick setup and orientation to get started immediately" },
              { step: "04", title: "Support", description: "Ongoing support and regular check-ins to ensure success" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C9B072] text-[#0A1128] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-[#0A1128] mb-3">{phase.title}</h3>
                <p className="text-[#333333]">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Industries We Support
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Our virtual assistants have experience across various industries and can adapt to your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Healthcare",
              "Real Estate",
              "E-commerce",
              "Legal",
              "Marketing",
              "Technology",
              "Finance",
              "Education",
              "Consulting",
              "Manufacturing",
              "Retail",
              "Non-profit"
            ].map((industry, index) => (
              <div key={index} className="bg-[#1a2332] rounded-lg p-4 text-center hover:bg-[#2a3342] transition duration-300">
                <p className="text-[#F8F8F8] font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-8">
              What Our Clients Say
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-xl text-[#333333] italic mb-6 leading-relaxed">
                "Working with JAKOM's virtual assistant has been a game-changer for our business. They handle all our administrative tasks efficiently, allowing us to focus on growth and client relationships. Highly recommended!"
              </p>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-[#0A1128]">Sarah Johnson</p>
                  <p className="text-[#666666]">CEO, TechStart Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1128] border-t border-[#C9B072]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
            Ready to Get Professional Support?
          </h2>
          <p className="text-xl text-[#CCD2E3] mb-10 leading-relaxed">
            Let us handle your administrative tasks so you can focus on what matters most - growing your business and serving your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Get Started Now
            </Link>
            <Link href="/about-us" className="px-10 py-4 border-2 border-[#C9B072] text-[#C9B072] font-bold text-xl rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
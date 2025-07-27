import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'About Us - JAKOM',
  description: 'Learn about JAKOM\'s mission to simplify operations, enhance efficiency, and foster growth through innovative tech solutions and unparalleled expertise.',
  keywords: 'about JAKOM, company mission, tech solutions, business services, team, values, Emmanuel Obare',
}

export default function AboutUsPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to solve complex business challenges."
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "JAKOM was established with a vision to provide integrated tech solutions for businesses."
    },
    {
      year: "2021", 
      title: "Service Expansion",
      description: "Added data analysis and virtual assistance services to our portfolio."
    },
    {
      year: "2022",
      title: "Kids Hub Launch",
      description: "Launched our educational programs to empower the next generation with tech skills."
    },
    {
      year: "2023",
      title: "Growing Impact",
      description: "Serving clients across multiple industries with comprehensive business solutions."
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
                About <span className="text-[#C9B072]">JAKOM</span>
              </h1>
              <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8">
                More than just a service provider, we are your dedicated partner in navigating the complexities of modern business. Our mission is to simplify operations, enhance efficiency, and foster growth through innovative tech solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact-us" className="px-8 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                  Work With Us
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="#story" className="px-8 py-4 border-2 border-[#C9B072] text-[#C9B072] font-semibold text-lg rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="p-4 bg-[#C9B072] text-[#0A1128] rounded-full">
                  <Target size={48} />
                </div>
              </div>
              <h2 className="text-4xl font-extrabold text-[#0A1128] mb-6">Our Mission</h2>
              <p className="text-xl text-[#333333] leading-relaxed">
                To simplify business operations, enhance efficiency, and foster growth for enterprises of all sizes through innovative technology solutions and unparalleled expertise. We are committed to delivering integrated services that truly make a difference in our clients' success.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="p-4 bg-[#4CAF50] text-white rounded-full">
                  <Eye size={48} />
                </div>
              </div>
              <h2 className="text-4xl font-extrabold text-[#0A1128] mb-6">Our Vision</h2>
              <p className="text-xl text-[#333333] leading-relaxed">
                To be the leading provider of integrated technology solutions, empowering businesses worldwide to achieve their full potential. We envision a future where technology seamlessly enhances human capability and drives meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Our Story
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Founded with a passion for technology and a commitment to excellence, JAKOM has grown from a small startup to a trusted partner for businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C9B072] text-[#0A1128] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-[#F8F8F8] mb-3">{milestone.title}</h3>
                <p className="text-[#CCD2E3]">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              Our Values
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              These core values guide everything we do and shape the way we interact with our clients, partners, and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#C9B072] text-[#0A1128] rounded-full">
                    <value.icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0A1128] mb-4">{value.title}</h3>
                <p className="text-[#333333] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Meet Our Founder
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Driven by passion and guided by expertise, our leadership team brings years of experience and innovation to every project.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-[#1a2332] rounded-xl p-8 shadow-lg max-w-md text-center">
              <div className="w-32 h-32 bg-[#C9B072] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={64} className="text-[#0A1128]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F8F8F8] mb-2">Emmanuel Obare</h3>
              <p className="text-[#C9B072] font-semibold mb-4">Founder & CEO</p>
              <p className="text-[#CCD2E3] leading-relaxed">
                With a passion for technology and business innovation, Emmanuel founded JAKOM to bridge the gap between complex technical solutions and practical business needs. His vision drives our commitment to excellence and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
                alt="Professional team working"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-[#0A1128] mb-6">
                Why Choose <span className="text-[#C9B072]">JAKOM?</span>
              </h2>
              <p className="text-xl text-[#333333] leading-relaxed mb-8">
                We combine technical expertise with deep business understanding to deliver solutions that not only work but drive real results for your organization.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Proven track record of successful project delivery",
                  "Comprehensive range of integrated services",
                  "Client-focused approach with personalized solutions",
                  "Commitment to innovation and continuous improvement",
                  "Transparent communication and reliable support"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-[#333333]">
                    <CheckCircle className="text-[#4CAF50] mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="px-8 py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1128] border-t border-[#C9B072]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#CCD2E3] mb-10 leading-relaxed">
            Let's discuss how JAKOM's comprehensive solutions can empower your success and drive meaningful growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Get Started Today
            </Link>
            <Link href="/graphics-design" className="px-10 py-4 border-2 border-[#C9B072] text-[#C9B072] font-bold text-xl rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
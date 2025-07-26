import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Palette, 
  PenTool, 
  Camera, 
  Video, 
  Layout, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Graphics & Design Services - JAKOM',
  description: 'Professional graphics and design services including logo design, branding, web design, print design, and digital marketing materials. Create stunning visuals that capture attention.',
  keywords: 'graphics design, logo design, branding, web design, print design, digital marketing, visual identity, graphic designer',
}

export default function GraphicsDesignPage() {
  const services = [
    {
      icon: Palette,
      title: "Logo Design & Branding",
      description: "Create memorable brand identities that resonate with your target audience and stand out in the marketplace.",
      features: ["Custom logo design", "Brand guidelines", "Color palette selection", "Typography selection"]
    },
    {
      icon: Layout,
      title: "Web & Digital Design",
      description: "Modern, responsive web designs and digital assets that enhance user experience and drive engagement.",
      features: ["Website mockups", "UI/UX design", "Social media graphics", "Digital banners"]
    },
    {
      icon: PenTool,
      title: "Print Design",
      description: "Professional print materials that make a lasting impression at trade shows, meetings, and marketing campaigns.",
      features: ["Business cards", "Brochures & flyers", "Posters & banners", "Packaging design"]
    },
    {
      icon: Smartphone,
      title: "Digital Marketing Assets",
      description: "Eye-catching graphics optimized for various digital platforms to boost your online presence and engagement.",
      features: ["Social media posts", "Email templates", "Ad creatives", "Infographics"]
    }
  ]

  const portfolio = [
    {
      title: "Corporate Branding Package",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "E-commerce Website Design",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "Marketing Campaign Materials",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
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
                Stunning <span className="text-[#C9B072]">Graphics & Design</span> Solutions
              </h1>
              <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8">
                Transform your brand with professional graphics and design services that capture attention, communicate your message effectively, and drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact-us" className="px-8 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                  Get Design Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="#portfolio" className="px-8 py-4 border-2 border-[#C9B072] text-[#C9B072] font-semibold text-lg rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Graphics Design Workspace"
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              Our Design Services
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              From concept to completion, we deliver comprehensive design solutions that elevate your brand and engage your audience.
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Explore some of our recent design projects that showcase creativity, functionality, and results-driven design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="bg-[#1a2332] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="px-3 py-1 bg-[#C9B072] text-[#0A1128] text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#F8F8F8] mt-3">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              Our Design Process
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              We follow a proven process to ensure every project meets your expectations and delivers measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your brand, goals, and target audience" },
              { step: "02", title: "Concept", description: "Creating initial concepts and design directions" },
              { step: "03", title: "Design", description: "Developing polished designs with your feedback" },
              { step: "04", title: "Delivery", description: "Final files and assets ready for implementation" }
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

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1128] border-t border-[#C9B072]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-[#CCD2E3] mb-10 leading-relaxed">
            Let's create stunning visuals that capture attention, communicate your message, and drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Start Your Project
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
'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  BarChart2, 
  DollarSign, 
  Headset, 
  Paintbrush 
} from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'

export default function HomePage() {
  const observedSections = useRef(new Set<HTMLElement>())
  const setSectionRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      observedSections.current.add(node)
    }
  }, [])

  const handleAppSectionIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up-active')
        const observer = (entry.target as any).currentObserver
        if (observer) {
          observer.unobserve(entry.target)
        }
      }
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleAppSectionIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    })
    observedSections.current.forEach(section => {
      if (section) {
        observer.observe(section)
        ;(section as any).currentObserver = observer
      }
    })
    return () => {
      observedSections.current.forEach(section => {
        if (section && (section as any).currentObserver) {
          ;(section as any).currentObserver.unobserve(section)
        }
      })
      observer.disconnect()
      observedSections.current.clear()
    }
  }, [handleAppSectionIntersect])

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F8F8F8] font-sans overflow-x-hidden">
      <Header />
      
      <section className="relative hero-section px-6 bg-gray-100 overflow-hidden bg-particles">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(201,176,114,0.05)] to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1128] leading-tight mt-8 mb-4 hero-text-animate">
            JAKOM: Your <span className="shimmer-text text-[#C9B072]">One-Stop</span> Tech Solution
          </h1>
          <p className="text-xl md:text-2xl text-[#333333] mb-8 hero-text-animate" style={{ animationDelay: '2.5s' }}>
            Empowering Your Business with Seamless Integration and Expert Support.
          </p>
        </div>
        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-center mt-8 md:mt-0">
          <div className="jo-logo-container">
            <Image
              src="https://i.imgur.com/GnYpS80.png"
              alt="JAKOM Logo"
              width={700}
              height={420}
              className="jo-logo"
              onError={(e) => { 
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src = 'https://placehold.co/700x420/E0E0E0/C9B072?text=Logo+Missing'
              }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100 text-center">
        <div className="flex justify-center">
          <Link 
            href="/contact-us"
            className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 hero-text-animate" 
            style={{ animationDelay: '3s' }}
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <section className="py-20 bg-[#0A1128] container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-[#F8F8F8] mb-16 fade-in-up" ref={setSectionRef}>
          Our Integrated Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ServiceCard icon={Paintbrush} title="Graphics & Design" description="Stunning visuals that capture attention and communicate your brand's unique story effectively." delay={0} path="/graphics-design" />
          <ServiceCard icon={BarChart2} title="Data Analysis" description="Unlock actionable insights from your data to drive informed decisions and strategic growth." delay={100} path="/data-analysis" />
          <ServiceCard icon={DollarSign} title="Accounting & Bookkeeping" description="Expert financial management to ensure accuracy, compliance, and peace of mind." delay={200} path="/accounting-bookkeeping" />
          <ServiceCard icon={Headset} title="Virtual Assistance" description="Efficient administrative support, freeing your time to focus on core business activities." delay={300} path="/virtual-assistance" />
        </div>
      </section>

      <section className="py-20 bg-gray-100 border-t border-[#C9B072] container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center fade-in-up" ref={setSectionRef}>
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=350"
              alt="Kids Hub"
              width={500}
              height={350}
              className="rounded-xl shadow-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left fade-in-up" ref={setSectionRef}>
            <h2 className="text-5xl font-extrabold text-[#0A1128] mb-6">
              Empowering the Next Generation: <span className="text-[#4CAF50]">Kids Hub</span>
            </h2>
            <p className="text-xl text-[#333333] leading-relaxed mb-8">
              At JAKOM, we believe in nurturing talent from a young age. Our Kids Hub offers engaging and interactive programs designed to introduce children to the exciting world of technology, creativity, and problem-solving. Spark curiosity and build foundational skills for a brighter future!
            </p>
            <Link href="/kids-hub" className="px-8 py-3 bg-[#C9B072] text-[#0A1128] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Explore Kids Hub
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A1128] border-t border-[#C9B072] container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-[#F8F8F8] mb-6 fade-in-up" ref={setSectionRef}>
            About JAKOM
          </h2>
          <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8 fade-in-up" ref={setSectionRef}>
            JAKOM is more than just a service provider; we are your dedicated partner in navigating the complexities of modern business. Our mission is to simplify operations, enhance efficiency, and foster growth for enterprises of all sizes through innovative tech solutions and unparalleled expertise. We pride ourselves on delivering integrated services that truly make a difference.
          </p>
          <Link href="/about-us" className="px-8 py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
            Read Our Full Story
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-100 border-t border-[#C9B072] text-center px-6">
        <h2 className="text-5xl font-extrabold text-[#0A1128] mb-6 fade-in-up" ref={setSectionRef}>
          Ready to Elevate Your Business?
        </h2>
        <p className="text-xl text-[#333333] mb-10 fade-in-up" ref={setSectionRef}>
          Let's discuss how JAKOM's comprehensive solutions can empower your success.
        </p>
        <Link href="/contact-us" className="px-12 py-4 bg-[#C9B072] text-[#0A1128] font-bold text-xl rounded-full shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-opacity-90 animate-pulse fade-in-up inline-flex items-center justify-center">
          Contact Us Now
        </Link>
      </section>

      <Footer />
    </div>
  )
}
'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
// Import LucideIcon AND LucideProps
import { LucideIcon, LucideProps } from 'lucide-react'

interface ServiceCardProps {
  // Change the type of icon to be a React ComponentType that accepts LucideProps
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  delay: number;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay, path }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    )
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <Link href={path} className="block">
      <div
        ref={cardRef}
        className={`
          bg-[#0A1128] border border-[#C9B072] rounded-xl p-8 flex flex-col items-center text-center shadow-lg
          transition-all duration-700 ease-out transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          hover:scale-105 hover:shadow-2xl service-card
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="p-4 bg-[#C9B072] text-[#0A1128] rounded-full mb-4 inline-flex items-center justify-center">
          <Icon size={48} />
        </div>
        <h3 className="text-2xl font-bold text-[#F8F8F8] mb-3">{title}</h3>
        <p className="text-[#CCD2E3] text-lg leading-relaxed">{description}</p>
        <div className="mt-6 px-6 py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-md">
          Learn More
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
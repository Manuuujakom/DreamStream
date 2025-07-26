import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  School, 
  Gamepad2, 
  Code, 
  Palette, 
  Brain, 
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Kids Hub - Fun Learning Programs - JAKOM',
  description: 'Engaging and interactive programs for children to explore technology, creativity, and problem-solving. Spark curiosity and build foundational skills for a brighter future.',
  keywords: 'kids programming, children technology, coding for kids, creative learning, STEM education, kids hub, children courses',
}

export default function KidsHubPage() {
  const programs = [
    {
      icon: Code,
      title: "Coding Adventures",
      description: "Introduction to programming through fun games and interactive activities that make learning to code exciting.",
      ageRange: "8-14 years",
      features: ["Scratch programming", "Basic Python", "Game creation", "Problem-solving skills"]
    },
    {
      icon: Palette,
      title: "Digital Art & Design",
      description: "Creative digital art programs that teach design principles while fostering artistic expression.",
      ageRange: "6-12 years", 
      features: ["Digital illustration", "Logo design", "Animation basics", "Color theory"]
    },
    {
      icon: Brain,
      title: "Logic & Problem Solving",
      description: "Develop critical thinking and analytical skills through puzzles, challenges, and brain teasers.",
      ageRange: "7-13 years",
      features: ["Logic puzzles", "Math games", "Pattern recognition", "Strategic thinking"]
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Learn to create simple games while understanding the fundamentals of game design and development.",
      ageRange: "10-16 years",
      features: ["Game design basics", "Simple 2D games", "Story creation", "User experience"]
    }
  ]

  const benefits = [
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Develop problem-solving skills that will benefit children in all areas of life and learning."
    },
    {
      icon: Code,
      title: "Future-Ready Skills",
      description: "Build foundational technology skills that are increasingly important in our digital world."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Work in teams and learn to communicate ideas effectively with peers."
    },
    {
      icon: Star,
      title: "Confidence Building",
      description: "Complete projects and overcome challenges to build self-confidence and perseverance."
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
                Empowering the <span className="text-[#4CAF50]">Next Generation</span>
              </h1>
              <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8">
                At JAKOM Kids Hub, we believe in nurturing talent from a young age. Our engaging programs introduce children to technology, creativity, and problem-solving in a fun, interactive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact-us" className="px-8 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                  Enroll Your Child
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="#programs" className="px-8 py-4 border-2 border-[#C9B072] text-[#C9B072] font-semibold text-lg rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
                  View Programs
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Children learning technology"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              Our Learning Programs
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Carefully designed programs that combine learning with fun, ensuring children develop valuable skills while enjoying the process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#4CAF50] text-white rounded-full mr-4">
                    <program.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A1128]">{program.title}</h3>
                    <p className="text-[#C9B072] font-semibold">{program.ageRange}</p>
                  </div>
                </div>
                <p className="text-[#333333] mb-6 leading-relaxed">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
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
              Why Choose Kids Hub?
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Our programs provide more than just technical skills - we develop well-rounded children ready for the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#4CAF50] text-white rounded-full">
                    <benefit.icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">{benefit.title}</h3>
                <p className="text-[#CCD2E3] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
                alt="Interactive Learning"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-[#0A1128] mb-6">
                Our Learning <span className="text-[#4CAF50]">Approach</span>
              </h2>
              <p className="text-xl text-[#333333] leading-relaxed mb-8">
                We believe learning should be engaging, interactive, and fun. Our hands-on approach ensures children not only understand concepts but can apply them creatively.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Interactive, hands-on learning activities",
                  "Small class sizes for personalized attention",
                  "Project-based learning with real outcomes",
                  "Regular progress tracking and feedback"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-[#333333]">
                    <CheckCircle className="text-[#4CAF50] mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="px-8 py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Programs by Age Group
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Age-appropriate learning paths designed to match developmental stages and interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                ageRange: "6-8 Years",
                title: "Foundation Explorer",
                description: "Basic concepts through visual programming and creative activities",
                focus: ["Visual programming", "Creative projects", "Basic logic", "Digital art"]
              },
              {
                ageRange: "9-12 Years", 
                title: "Junior Developer",
                description: "Introduction to real programming languages and game development",
                focus: ["Text-based coding", "Simple games", "Problem solving", "Team projects"]
              },
              {
                ageRange: "13-16 Years",
                title: "Tech Innovator", 
                description: "Advanced programming concepts and real-world project development",
                focus: ["Advanced coding", "Web development", "App creation", "Portfolio building"]
              }
            ].map((group, index) => (
              <div key={index} className="bg-[#1a2332] rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-center mb-6">
                  <span className="px-4 py-2 bg-[#4CAF50] text-white text-sm font-bold rounded-full">
                    {group.ageRange}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4 text-center">{group.title}</h3>
                <p className="text-[#CCD2E3] mb-6 text-center leading-relaxed">{group.description}</p>
                <ul className="space-y-3">
                  {group.focus.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-[#CCD2E3]">
                      <CheckCircle className="text-[#4CAF50] mr-3" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonial Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-8">
              What Parents Say
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-xl text-[#333333] italic mb-6 leading-relaxed">
                "My daughter absolutely loves the coding classes at JAKOM Kids Hub. She's not only learning valuable technical skills but also developing confidence and problem-solving abilities. The instructors are patient and make learning so much fun!"
              </p>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-[#0A1128]">Maria Rodriguez</p>
                  <p className="text-[#666666]">Parent of Sofia, age 10</p>
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
            Ready to Spark Your Child's Curiosity?
          </h2>
          <p className="text-xl text-[#CCD2E3] mb-10 leading-relaxed">
            Give your child the opportunity to explore, create, and learn valuable skills that will benefit them for life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Enroll Today
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
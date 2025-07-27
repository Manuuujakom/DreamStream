import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  BarChart2, 
  TrendingUp, 
  Database, 
  PieChart, 
  Target, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Data Analysis Services - JAKOM',
  description: 'Professional data analysis services to unlock actionable insights from your data. Drive informed decisions and strategic growth with expert data analytics and visualization.',
  keywords: 'data analysis, data analytics, business intelligence, data visualization, reporting, insights, statistics, data science',
}

export default function DataAnalysisPage() {
  const services = [
    {
      icon: BarChart2,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with comprehensive business intelligence solutions and strategic reporting.",
      features: ["Performance dashboards", "KPI tracking", "Trend analysis", "Executive reporting"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Organize, clean, and optimize your data infrastructure for better accessibility, accuracy, and decision-making.",
      features: ["Data cleaning & validation", "Database optimization", "Data integration", "Quality assurance"]
    },
    {
      icon: PieChart,
      title: "Statistical Analysis",
      description: "Advanced statistical methods to uncover patterns, correlations, and predictions that drive business success.",
      features: ["Predictive modeling", "Statistical testing", "Correlation analysis", "Forecasting"]
    },
    {
      icon: Target,
      title: "Custom Analytics",
      description: "Tailored analytics solutions designed specifically for your industry, business model, and unique challenges.",
      features: ["Industry-specific metrics", "Custom algorithms", "Specialized reporting", "Bespoke solutions"]
    }
  ]

  const industries = [
    { name: "E-commerce", description: "Sales analytics, customer behavior, inventory optimization" },
    { name: "Healthcare", description: "Patient data analysis, operational efficiency, compliance reporting" },
    { name: "Finance", description: "Risk assessment, fraud detection, portfolio analysis" },
    { name: "Manufacturing", description: "Quality control, supply chain optimization, production analytics" },
    { name: "Marketing", description: "Campaign performance, customer segmentation, ROI analysis" },
    { name: "Education", description: "Student performance, resource allocation, outcome measurement" }
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
                Unlock <span className="text-[#C9B072]">Data-Driven</span> Insights
              </h1>
              <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8">
                Transform your raw data into actionable insights that drive informed decisions, strategic growth, and competitive advantage in today's data-driven world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact-us" className="px-8 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                  Get Analysis Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-[#C9B072] text-[#C9B072] font-semibold text-lg rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Data Analysis Dashboard"
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
              Our Analytics Services
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              From basic reporting to advanced predictive analytics, we provide comprehensive data solutions tailored to your business needs.
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

      {/* Industries Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Our data analysis expertise spans across various industries, providing specialized insights and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-[#1a2332] rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold text-[#F8F8F8] mb-3">{industry.name}</h3>
                <p className="text-[#CCD2E3]">{industry.description}</p>
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
              Our Analysis Process
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              We follow a systematic approach to ensure accurate, reliable, and actionable insights from your data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Data Collection", description: "Gathering and consolidating data from multiple sources", icon: Database },
              { step: "02", title: "Data Processing", description: "Cleaning, validating, and preparing data for analysis", icon: Zap },
              { step: "03", title: "Analysis", description: "Applying statistical methods and analytical techniques", icon: BarChart2 },
              { step: "04", title: "Insights", description: "Presenting actionable findings and recommendations", icon: TrendingUp }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C9B072] text-[#0A1128] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <div className="flex justify-center mb-3">
                  <phase.icon className="text-[#0A1128]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0A1128] mb-3">{phase.title}</h3>
                <p className="text-[#333333]">{phase.description}</p>
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
              Why Choose Our Data Analysis?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", description: "Experienced data scientists and analysts with proven track records", icon: Target },
              { title: "Advanced Tools", description: "Cutting-edge analytics software and statistical modeling techniques", icon: Zap },
              { title: "Actionable Results", description: "Clear, practical insights that directly impact your business decisions", icon: TrendingUp }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#C9B072] text-[#0A1128] rounded-full">
                    <benefit.icon size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">{benefit.title}</h3>
                <p className="text-[#CCD2E3] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 border-t border-[#C9B072]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-[#333333] mb-10 leading-relaxed">
            Let us help you transform your data into actionable insights that drive growth, efficiency, and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Start Analysis Project
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
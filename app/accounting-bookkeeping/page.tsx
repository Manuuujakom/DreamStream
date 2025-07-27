import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  DollarSign, 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Accounting & Bookkeeping Services - JAKOM',
  description: 'Professional accounting and bookkeeping services to ensure accuracy, compliance, and peace of mind. Expert financial management for businesses of all sizes.',
  keywords: 'accounting, bookkeeping, financial management, tax preparation, payroll, compliance, financial reporting, business finance',
}

export default function AccountingBookkeepingPage() {
  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping Services",
      description: "Accurate daily financial record-keeping to maintain organized books and ensure your business stays financially healthy.",
      features: ["Daily transaction recording", "Bank reconciliation", "Accounts payable/receivable", "Monthly financial statements"]
    },
    {
      icon: FileText,
      title: "Tax Preparation",
      description: "Comprehensive tax planning and preparation services to maximize deductions and ensure compliance with regulations.",
      features: ["Business tax returns", "Personal tax planning", "Tax compliance", "Quarterly tax estimates"]
    },
    {
      icon: TrendingUp,
      title: "Financial Reporting",
      description: "Detailed financial reports and analysis to help you understand your business performance and make informed decisions.",
      features: ["Profit & loss statements", "Balance sheets", "Cash flow analysis", "Budget planning"]
    },
    {
      icon: Shield,
      title: "Payroll Management",
      description: "Complete payroll processing and management to ensure employees are paid accurately and on time, every time.",
      features: ["Payroll processing", "Tax withholdings", "Employee benefits", "Compliance reporting"]
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Focus on growing your business while we handle your financial management and compliance requirements."
    },
    {
      icon: Shield,
      title: "Ensure Compliance",
      description: "Stay compliant with tax laws and regulations with our expert knowledge and attention to detail."
    },
    {
      icon: TrendingUp,
      title: "Improve Cash Flow",
      description: "Better financial insights help you make decisions that improve cash flow and profitability."
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Professional financial management can identify cost savings and tax optimization opportunities."
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
                Expert <span className="text-[#C9B072]">Accounting &</span> Bookkeeping
              </h1>
              <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8">
                Professional financial management services to ensure accuracy, compliance, and peace of mind. Let us handle your books while you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact-us" className="px-8 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-[#C9B072] text-[#C9B072] font-semibold text-lg rounded-full hover:bg-[#C9B072] hover:text-[#0A1128] transition duration-300 inline-flex items-center justify-center">
                  View Services
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Accounting and Bookkeeping"
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
              Our Financial Services
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Comprehensive accounting and bookkeeping solutions designed to keep your finances organized, compliant, and optimized.
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
              Why Choose Professional Accounting?
            </h2>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto">
              Professional accounting services provide more than just number crunching - they offer strategic advantages for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#C9B072] text-[#0A1128] rounded-full">
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

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
              Our Accounting Process
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              We follow a systematic approach to ensure accuracy, compliance, and timely delivery of all financial services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate your current financial situation and requirements" },
              { step: "02", title: "Setup", description: "Organize systems and processes for efficient financial management" },
              { step: "03", title: "Management", description: "Handle daily bookkeeping and financial record maintenance" },
              { step: "04", title: "Reporting", description: "Provide regular reports and insights for informed decision-making" }
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

      {/* Compliance Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
                alt="Financial Compliance"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-[#F8F8F8] mb-6">
                Stay Compliant & <span className="text-[#C9B072]">Worry-Free</span>
              </h2>
              <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8">
                Our expertise in tax laws, regulations, and compliance requirements ensures your business stays on the right side of the law while optimizing your financial position.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Up-to-date with latest tax regulations",
                  "Automated compliance monitoring",
                  "Proactive risk management",
                  "Detailed audit trail maintenance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-[#CCD2E3]">
                    <CheckCircle className="text-[#4CAF50] mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="px-8 py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 border-t border-[#C9B072]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-6">
            Ready to Optimize Your Finances?
          </h2>
          <p className="text-xl text-[#333333] mb-10 leading-relaxed">
            Let our expert accounting team handle your financial management so you can focus on what you do best - growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Start Today
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
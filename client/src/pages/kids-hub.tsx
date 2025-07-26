import React, { useState } from 'react';
import { Link } from 'wouter';
import { 
  Home, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Menu, 
  X,
  BarChart2, 
  DollarSign, 
  Headset, 
  Paintbrush, 
  Info, 
  School,
  BookOpen,
  Palette,
  Gamepad2,
  CheckCircle
} from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A1128] py-4 shadow-xl">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-[#C9B072] text-4xl font-extrabold tracking-tight">
            <img src="https://i.imgur.com/zWVSml6.png" alt="JAKOM Logo" className="h-12 w-auto object-contain" />
          </a>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
              <Home className="mr-2" size={20} />Home
            </a>
          </Link>
          <Link href="/graphics-design">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
              <Paintbrush className="mr-2" size={20} />Graphics & Design
            </a>
          </Link>
          <Link href="/data-analysis">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
              <BarChart2 className="mr-2" size={20} />Data Analysis
            </a>
          </Link>
          <Link href="/accounting-bookkeeping">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
              <DollarSign className="mr-2" size={20} />Accounting & Bookkeeping
            </a>
          </Link>
          <Link href="/virtual-assistance">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
              <Headset className="mr-2" size={20} />Virtual Assistance
            </a>
          </Link>
          <Link href="/kids-hub">
            <a className="text-[#C9B072] transition duration-300 text-lg flex items-center">
              <School className="mr-2" size={20} />Kids Hub
            </a>
          </Link>
          <Link href="/about-us">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
              <Info className="mr-2" size={20} />About Us
            </a>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#F8F8F8] focus:outline-none">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-[#0A1128] py-4`}>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
              <Home className="mr-2" size={20} />Home
            </a>
          </Link>
          <Link href="/graphics-design">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
              <Paintbrush className="mr-2" size={20} />Graphics & Design
            </a>
          </Link>
          <Link href="/data-analysis">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
              <BarChart2 className="mr-2" size={20} />Data Analysis
            </a>
          </Link>
          <Link href="/accounting-bookkeeping">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
              <DollarSign className="mr-2" size={20} />Accounting & Bookkeeping
            </a>
          </Link>
          <Link href="/virtual-assistance">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
              <Headset className="mr-2" size={20} />Virtual Assistance
            </a>
          </Link>
          <Link href="/kids-hub">
            <a className="text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
              <School className="mr-2" size={20} />Kids Hub
            </a>
          </Link>
          <Link href="/about-us">
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
              <Info className="mr-2" size={20} />About Us
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A1128] border-t border-[#C9B072] py-12 text-[#CCD2E3]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="col-span-1">
          <Link href="/">
            <a className="inline-block mb-4">
              <img src="https://i.imgur.com/zWVSml6.png" alt="JAKOM Logo" className="h-10 w-auto object-contain mx-auto md:mx-0" />
            </a>
          </Link>
          <p className="text-sm leading-relaxed mt-2">
            Empowering your business with seamless integration and expert support.
          </p>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} JAKOM. All rights reserved.</p>
          <p className="mt-2 text-xs">Built by Obare Emmanuel</p>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about-us"><a className="hover:text-[#C9B072] transition duration-300">About Us</a></Link></li>
            <li><Link href="/contact-us"><a className="hover:text-[#C9B072] transition duration-300">Contact Us</a></Link></li>
            <li><Link href="/graphics-design"><a className="hover:text-[#C9B072] transition duration-300">Our Services</a></Link></li>
            <li><Link href="/kids-hub"><a className="hover:text-[#C9B072] transition duration-300">Kids Hub</a></Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">Legal & Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#C9B072] transition duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#C9B072] transition duration-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#C9B072] transition duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-[#C9B072] transition duration-300">Support</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">Get In Touch</h3>
          <div className="space-y-3 mb-6">
            <p className="flex items-center justify-center md:justify-start">
              <MapPin size={20} className="mr-3 text-[#C9B072]" />
              <span>Nairobi, Kenya</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Mail size={20} className="mr-3 text-[#C9B072]" />
              <a href="mailto:emmanuelomondiobare@gmail.com" className="hover:text-[#C9B072] transition duration-300">emmanuelomondiobare@gmail.com</a>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Phone size={20} className="mr-3 text-[#C9B072]" />
              <a href="tel:+254794255000" className="hover:text-[#C9B072] transition duration-300">+254 794 255 000</a>
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function KidsHubPage() {
  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F8F8F8] font-sans overflow-x-hidden">
      <Header />
      
      <div className="py-20 px-6 min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-6">Kids Hub</h1>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto leading-relaxed">
              Educational and creative services designed specifically for children's development and learning.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#0A1128] border border-[#C9B072] rounded-xl p-6 text-center service-card">
              <BookOpen className="w-16 h-16 text-[#C9B072] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-3">Educational Content</h3>
              <p className="text-[#CCD2E3]">Interactive learning materials and activities</p>
            </div>
            <div className="bg-[#0A1128] border border-[#C9B072] rounded-xl p-6 text-center service-card">
              <Palette className="w-16 h-16 text-[#C9B072] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-3">Creative Arts</h3>
              <p className="text-[#CCD2E3]">Art and craft projects for young minds</p>
            </div>
            <div className="bg-[#0A1128] border border-[#C9B072] rounded-xl p-6 text-center service-card">
              <Gamepad2 className="w-16 h-16 text-[#C9B072] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-3">Educational Games</h3>
              <p className="text-[#CCD2E3]">Fun learning games and activities</p>
            </div>
          </div>

          {/* Feature Highlight */}
          <div className="bg-gradient-to-r from-[rgba(201,176,114,0.1)] to-[rgba(76,175,80,0.1)] rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#F8F8F8] mb-4">Safe Learning Environment</h2>
                <p className="text-[#CCD2E3] mb-6">
                  We provide a secure, age-appropriate learning environment where children can explore, create, and learn at their own pace.
                </p>
                <ul className="space-y-2 text-[#CCD2E3]">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-2" />
                    Age-appropriate content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-2" />
                    Safe online environment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-2" />
                    Supervised activities
                  </li>
                </ul>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Kids Learning Activities" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact-us">
              <a className="px-8 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-lg text-lg">
                Enroll Your Child
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

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
  Clock,
  Globe
} from 'lucide-react';
import { trackEvent } from '../lib/analytics';

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
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
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
            <a className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Graphics & Design',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track form submission
    trackEvent('contact_form_submit', 'engagement', 'contact_page');
    
    // Here you would typically send the form data to your API
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: 'Graphics & Design',
      message: ''
    });
    
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#0A1128] border border-[#C9B072] rounded-xl p-8">
      <h2 className="text-2xl font-bold text-[#F8F8F8] mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[#F8F8F8] mb-2">Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-[#0A1128] border border-[#C9B072] rounded-lg text-[#F8F8F8]" 
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#F8F8F8] mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#0A1128] border border-[#C9B072] rounded-lg text-[#F8F8F8]" 
            placeholder="your@email.com" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#F8F8F8] mb-2">Service</label>
          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 bg-[#0A1128] border border-[#C9B072] rounded-lg text-[#F8F8F8]"
          >
            <option value="Graphics & Design">Graphics & Design</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
            <option value="Virtual Assistance">Virtual Assistance</option>
            <option value="Kids Hub">Kids Hub</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-[#F8F8F8] mb-2">Message</label>
          <textarea 
            rows={4} 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-[#0A1128] border border-[#C9B072] rounded-lg text-[#F8F8F8]" 
            placeholder="Tell us about your project..." 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F8F8F8] font-sans overflow-x-hidden">
      <Header />
      
      <div className="py-20 px-6 min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-6">Contact Us</h1>
            <p className="text-xl text-[#CCD2E3] max-w-3xl mx-auto leading-relaxed">
              Ready to take your business to the next level? Get in touch with our team today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[#0A1128] border border-[#C9B072] rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-[#C9B072] mr-3" />
                  <h3 className="text-xl font-bold text-[#F8F8F8]">Email</h3>
                </div>
                <p className="text-[#CCD2E3]">emmanuelomondiobare@gmail.com</p>
                <p className="text-[#CCD2E3]">support@jakom.com</p>
              </div>

              <div className="bg-[#0A1128] border border-[#C9B072] rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-[#C9B072] mr-3" />
                  <h3 className="text-xl font-bold text-[#F8F8F8]">Phone</h3>
                </div>
                <p className="text-[#CCD2E3]">+254 794 255 000</p>
                <p className="text-[#CCD2E3]">+1 (555) 987-6543</p>
              </div>

              <div className="bg-[#0A1128] border border-[#C9B072] rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-[#C9B072] mr-3" />
                  <h3 className="text-xl font-bold text-[#F8F8F8]">Business Hours</h3>
                </div>
                <p className="text-[#CCD2E3]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-[#CCD2E3]">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-[#CCD2E3]">Sunday: Closed</p>
              </div>

              <div className="bg-[#0A1128] border border-[#C9B072] rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-[#C9B072] mr-3" />
                  <h3 className="text-xl font-bold text-[#F8F8F8]">Follow Us</h3>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

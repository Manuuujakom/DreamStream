import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'wouter';
import { 
  BarChart2, 
  DollarSign, 
  Headset, 
  Paintbrush, 
  Code, 
  Info, 
  Users, 
  School, 
  Home, 
  Mail, 
  Phone, 
  MessageSquare, 
  Smartphone, 
  MapPin, 
  Send, 
  CheckCircle, 
  XCircle, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Menu, 
  X 
} from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const ServiceCard = ({ icon: Icon, title, description, delay, path }: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  delay: number;
  path: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    trackEvent('service_card_click', 'navigation', title);
  };

  return (
    <Link href={path}>
      <a className="block" onClick={handleClick}>
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
      </a>
    </Link>
  );
};

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

export default function HomePage() {
  const observedSections = useRef(new Set<HTMLElement>());
  const setSectionRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      observedSections.current.add(node);
    }
  }, []);

  const handleAppSectionIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up-active');
        const observer = (entry.target as any).currentObserver;
        if (observer) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleAppSectionIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    observedSections.current.forEach(section => {
      if (section) {
        observer.observe(section);
        (section as any).currentObserver = observer;
      }
    });
    return () => {
      observedSections.current.forEach(section => {
        if (section && (section as any).currentObserver) {
          (section as any).currentObserver.unobserve(section);
        }
      });
      observer.disconnect();
      observedSections.current.clear();
    };
  }, [handleAppSectionIntersect]);

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
            <img
              src="https://i.imgur.com/GnYpS80.png"
              alt="JAKOM Logo"
              className="jo-logo"
              onError={(e) => { 
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = 'https://placehold.co/700x420/E0E0E0/C9B072?text=Logo+Missing'; 
              }}
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100 text-center">
        <div className="flex justify-center">
          <Link href="/contact-us">
            <a 
              className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 hero-text-animate" 
              style={{ animationDelay: '3s' }}
              onClick={() => trackEvent('cta_click', 'engagement', 'get_started_today')}
            >
              Get Started Today
            </a>
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
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Kids Hub"
              className="rounded-xl shadow-2xl object-cover"
              loading="lazy"
              onError={(e) => { 
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = 'https://placehold.co/500x350/0A1128/4CAF50?text=Kids+Hub+Fun'; 
              }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left fade-in-up" ref={setSectionRef}>
            <h2 className="text-5xl font-extrabold text-[#0A1128] mb-6">
              Empowering the Next Generation: <span className="text-[#4CAF50]">Kids Hub</span>
            </h2>
            <p className="text-xl text-[#333333] leading-relaxed mb-8">
              At JAKOM, we believe in nurturing talent from a young age. Our Kids Hub offers engaging and interactive programs designed to introduce children to the exciting world of technology, creativity, and problem-solving. Spark curiosity and build foundational skills for a brighter future!
            </p>
            <Link href="/kids-hub">
              <a className="px-8 py-3 bg-[#C9B072] text-[#0A1128] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
                Explore Kids Hub
              </a>
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
          <Link href="/about-us">
            <a className="px-8 py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center">
              Read Our Full Story
            </a>
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
        <Link href="/contact-us">
          <a 
            className="px-12 py-4 bg-[#C9B072] text-[#0A1128] font-bold text-xl rounded-full shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-opacity-90 animate-pulse fade-in-up inline-flex items-center justify-center" 
            ref={setSectionRef}
            onClick={() => trackEvent('cta_click', 'engagement', 'contact_us_now')}
          >
            Contact Us Now
          </a>
        </Link>
      </section>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { ArrowLeft, Star, Briefcase, Zap, Users, ArrowUp } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import freelanceImage from "@assets/stock_images/business_meeting_con_e4b19421.jpg";
import heroImage from "@assets/hero_1766450847632.png";
import logo from "@assets/only_ZBT_1766448125486.jpeg";

export default function Freelancing() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-lg border-b border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex flex-col items-center justify-center text-center">
          <Link href="/" className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-1">
              <img src={logo} alt="Zainab Bi Trading" className="w-14 h-14 object-contain shadow-sm rounded-full" />
              <span className="font-serif text-3xl font-extrabold tracking-tight bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm">
                Zainab Bi Trading
              </span>
            </div>
            <div className="w-full max-w-md h-[2.5px] bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-1 opacity-80"></div>
            <span className="text-[10px] sm:text-xs text-blue-900 font-black uppercase tracking-[0.25em] drop-shadow-sm">
              Manual & CAD Pattern Maker | Trainer | Freelancer
            </span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center">
            <motion.div {...fadeInUp}>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">
                Expert <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Freelance Services</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed font-medium">
                Professional pattern making and design support for brands, factories, startups, and individual clients worldwide. Flexible engagement tailored to your specific needs and timeline.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-white" />
                  <span className="font-semibold text-white">Flexible Engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-white" />
                  <span className="font-semibold text-white">Quick Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-white" />
                  <span className="font-semibold text-white">Global Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Offered */}
      <motion.section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl font-bold mb-4">What I Offer</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Pattern Design",
                desc: "Custom pattern creation for all garment types and styles",
                services: ["Original designs", "Style development", "Sample patterns"],
              },
              {
                title: "Production Support",
                desc: "End-to-end technical support for manufacturing and CMT",
                services: ["Process guidance", "Quality review", "Technical approval"],
              },
              {
                title: "Collection Development",
                desc: "Complete pattern packages for seasonal collections and launches",
                services: ["Range planning", "Costing patterns", "Bulk production"],
              },
              {
                title: "Design Consultation",
                desc: "Expert advice on feasibility, production, and design optimization",
                services: ["Design review", "Cost reduction", "Production planning"],
              },
              {
                title: "CAD Digitization",
                desc: "Convert manual patterns to digital CAD files for modern production",
                services: ["Pattern digitization", "Digital grading", "Production files"],
              },
              {
                title: "Contract Work",
                desc: "Project-based or retainer-based freelance partnerships",
                services: ["Short-term projects", "Ongoing support", "Flexible terms"],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-border p-8 hover:border-secondary/50 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid={`card-freelance-${idx}`}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-secondary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Client Types */}
      <motion.section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 className="font-serif text-4xl font-bold mb-12" {...fadeInUp}>
            Who I Work With
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Designers", "Brands", "Factories", "Startups"].map((client, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-border p-6 hover:border-secondary/50 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid={`client-type-${idx}`}
              >
                <p className="font-bold text-lg">{client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss your project requirements and find the perfect freelance solution.
          </p>
          <Link href="/?scrollTo=contact-form">
            <motion.button 
              data-testid="button-freelance-contact" 
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              Inquire Now
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Placeholder for portfolio */}
      <motion.section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Portfolio</h2>
          <p className="text-lg text-muted-foreground">Featured projects and client work coming soon...</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl aspect-square border-2 border-dashed border-border flex items-center justify-center"
                data-testid={`portfolio-placeholder-${item}`}
              >
                <p className="text-muted-foreground">Project {item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          data-testid="button-scroll-to-top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Zainab Bi Trading" className="w-12 h-12 object-contain" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Zainab Bi Trading</span>
                  <span className="text-xs text-gray-400">By A.M Ansari</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">22 years of excellence in pattern making, training, and freelancing services.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
                <li><a href="https://maps.google.com/?q=Shop+No.+06,+Kanakia+Rd,+opp.+Fitness+pro,+Unique+Gardens,+Beverly+Park,+Mira+Road+East,+Mumbai,+Mira+Bhayandar,+Maharashtra+401107,+India" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Store Location</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><Link href="/training" className="text-gray-400 hover:text-white transition">Professional Training</Link></li>
                <li><Link href="/grading" className="text-gray-400 hover:text-white transition">Grading & Marking</Link></li>
                <li><Link href="/freelancing" className="text-gray-400 hover:text-white transition">Freelance Services</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><span className="font-semibold text-white">Phone:</span> +91 90295 98867</li>
                <li><span className="font-semibold text-white">Email:</span> <a href="mailto:zainabbitrading@gmail.com" className="text-gray-400 hover:text-white transition">zainabbitrading@gmail.com</a></li>
                <li><span className="font-semibold text-white">Hours:</span> Mon-Sat, 9:30 AM - 7:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <p className="text-center text-gray-400 text-sm">
              © 2024 Zainab Bi Trading. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

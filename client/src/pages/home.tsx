import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Star, BookOpen, Briefcase, ArrowUp } from "lucide-react";

import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/contact-form";

import freelanceImage8 from "@assets/stock_images/Computer-Grading-method.jpg";
import freelanceImage from "@assets/stock_images/marker.jpg";
import freelanceImage2 from "@assets/stock_images/richpeace.jpg"
import freelanceImage3 from  "@assets/stock_images/rich peace.jpg"
import freelanceImage4 from "@assets/stock_images/richpeacelogo.jpg"
import freelanceImage5 from "@assets/stock_images/Richpeace-Standing-Inkjet-Cutter-Plotter.jpg"
import freelanceImage6 from "@assets/stock_images/grade.jpg"
import freelanceImage7 from "@assets/stock_images/Richpeace-Digitizer.jpg"
import studentImage from "@assets/stock_images/training2.jpg"
import trainingImage from"@assets/stock_images/classroom 2.jpg"
import trainingImage2 from "@assets/stock_images/printing.jpg"

import professionalPhoto from "@assets/stock_images/professionalphoto.JPG";
import logo from "@assets/only_ZBT_1766448125486.jpeg";

export default function Home() {
  const [location] = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trainingServices = [
    {
      title: "Manual Pattern Making",
      desc: "Traditional hand-drafted patterns for all garment types - menswear, womenswear, and kidswear",
      skills: ["Basic to advanced techniques", "Measurements & grading", "Garment construction", "Interview training"],
    },
    {
      title: "CAD Software",
      desc: "Professional digital pattern design used by global fashion brands and factories",
      skills: ["On screen pattern making", "Software like Richpeace, Tuka, Gemini, Winda etc.", "Digital grading", "Production-ready files"],
    },
    {
      title: "Professional Skills",
      desc: "Industry-standard practices and workflow",
      skills: ["Scaling & marking", "Client communication", "Professional standards"],
    },
  ];

  const freelanceServices = [
    {
      title: "Pattern Design",
      desc: "Custom pattern creation for all garment types and styles",
      items: ["Original designs", "Style development", "Sample patterns"],
    },
    {
      title: "Pattern Grading",
      desc: "Professional size grading for all garment types maintaining proportional fit across sizes",
      items: ["Base size pattern grading", "Pattern Maker making", "Fabric consumption"],
    },
    {
      title: "Pattern Marking",
      desc: "Precise marking for production with detailed seam allowances and construction notes",
      items: ["Production-ready", "Clear markings", "Technical specs"],
    },
    {
      title: "Production Support",
      desc: "End-to-end technical support for manufacturing and CMT",
      items: ["Process guidance", "Quality review", "Technical approval"],
    },
    {
      title: "Collection Development",
      desc: "Complete pattern packages for seasonal collections and launches",
      items: ["Range planning", "Costing patterns", "Bulk production"],
    },
    {
      title: "Design Consultation",
      desc: "Expert advice on feasibility, production, and design optimization",
      items: ["Design review", "Cost reduction", "Production planning"],
    },
    {
      title: "Digital Conversion",
      desc: "Convert manual patterns to digital formats ready for production and CMT",
      items: ["CAD digitization", "Digital grading and marker making for softcopy", "Pattern digitizer"],
    },
    {
      title: "Contract Work",
      desc: "Project-based or retainer-based freelance partnerships",
      items: ["Short-term projects", "Ongoing support", "Flexible terms"],
    },
  ];

  const [expandedTraining, setExpandedTraining] = useState<number[]>(trainingServices.map((_, i) => i));
  const [expandedFreelance, setExpandedFreelance] = useState<number[]>(freelanceServices.map((_, i) => i));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true },
  };

  const navLinks = [
    { name: "Training", href: "#training-section" },
    { name: "Freelance", href: "#freelance-services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact-section" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-lg border-b border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto py-4 flex flex-col items-center justify-center text-center">
          <img
            src={logo}
            alt="Zainab Bi Trading"
            className="w-40 h-16 object-contain shadow-sm rounded-full mb-2"
          />
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-red-700 via-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Zainab Bi Trading
          </span>
          <div className="w-full max-w-md h-[2.5px] bg-gradient-to-r from-transparent via-blue-600 to-transparent my-2 opacity-80"></div>
          <span className="text-[11px] sm:text-sm text-blue-900 font-extrabold uppercase tracking-[0.25em] drop-shadow-[1.5px_1.5px_1px_rgba(0,0,0,0.4)]">
            Manual & CAD Pattern Maker | Trainer | Freelancer
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Floating Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden md:flex fixed top-6 right-6 z-[100] bg-white/80 backdrop-blur-md border border-border px-8 py-4 rounded-full shadow-2xl"
      >
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xs font-black text-foreground hover:text-primary transition-all uppercase tracking-[0.2em] hover:scale-110 inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.href.replace("#", ""))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      
      {/* Our Services */}
      <motion.section
        id="services"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
        {...staggerContainer}
      >
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl mb-6 text-gray-900 uppercase tracking-tighter"
            style={{ fontFamily: "'Arial', sans-serif", fontWeight: 900 }}
            {...fadeInUp}
          >
            Our Services
          </motion.h2>
          {/* Gradient line below heading */}
          <div className="mx-auto w-100 h-[2.5px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-80 mb-12"></div>
        </div>

        {/* Professional Training Section */}
        <div id="training-section" className="max-w-4xl mx-auto mb-12 scroll-mt-80">
          {/* Title and description */}
          <h3 className="text-3xl font-bold mb-4 text-gray-900 text-center">PROFESSIONAL TRAINING</h3>
          <p className="text-gray-700 mb-6 leading-relaxed font-medium text-center">
            Master pattern making with manual & CAD techniques. Hands-on guidance from the industry expert.
          </p>

      
          {/* Expanded Training Details */}
          <div className="space-y-4">
            {trainingServices.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
                {...fadeInUp}
              >
                <button
                  onClick={() => {
                    if (expandedTraining.includes(idx))
                      setExpandedTraining(expandedTraining.filter((i) => i !== idx));
                    else setExpandedTraining([...expandedTraining, idx]);
                  }}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedTraining.includes(idx) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedTraining.includes(idx) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                        <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                          {item.skills.map((skill, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium">
                              <div className="bg-blue-100 p-1 rounded-full">
                                <Star className="w-4 h-4 text-blue-600" />
                              </div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Placeholder for 3 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-200 h-48 rounded-xl overflow-hidden">
            <img src={studentImage} className="w-full h-full object-full" />
          </div>

          <div className="bg-gray-200 h-48 rounded-xl overflow-hidden">
            <img src={trainingImage} className="w-full h-full object-cover" />
          </div>

          <div className="bg-gray-200 h-48 rounded-xl overflow-hidden">
            <img src={trainingImage2} className="w-full h-full object-contain" />
          </div>
        </div>


        {/* Freelance Services Section */}
        <div id="freelance-services" className="max-w-4xl mx-auto mb-12 scroll-mt-80">
          {/* Title and description */}
          <h3 className="text-3xl font-bold mb-4 text-gray-900 text-center">FREELANCE SERVICES</h3>
          <p className="text-gray-700 mb-6 leading-relaxed font-medium text-center">
            Manual & CAD Pattern making, Grading, Marker making & technical support for brands and factories worldwide.
          </p>

         

          {/* Expanded Freelance Details */}
          <div className="space-y-4">
            {freelanceServices.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-border overflow-hidden hover:border-green-500/50 transition-all shadow-sm hover:shadow-md"
                {...fadeInUp}
              >
                <button
                  onClick={() => {
                    if (expandedFreelance.includes(idx))
                      setExpandedFreelance(expandedFreelance.filter((i) => i !== idx));
                    else setExpandedFreelance([...expandedFreelance, idx]);
                  }}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedFreelance.includes(idx) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-green-600" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedFreelance.includes(idx) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border bg-green-50/30">
                        <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                          {item.items.map((service, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium">
                              <div className="bg-green-100 p-1 rounded-full">
                                <Star className="w-4 h-4 text-green-600" />
                              </div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Placeholder for 3 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[freelanceImage8, freelanceImage, freelanceImage2, freelanceImage3,
            freelanceImage4, freelanceImage5, freelanceImage6, freelanceImage7].map(
            (img, i) => (
              <div key={i} className="bg-gray-200 h-48 rounded-xl overflow-hidden">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            )
          )}
        </div>

      </motion.section>


      {/* CTA Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8">Ready to Transform?</h2>
          <p className="text-lg text-white/95 mb-10 font-medium">
            Join our training programs or hire us for your freelance needs. Let's create something amazing together.
          </p>
          <a href="#contact-section">
            <motion.button className="bg-white text-pink-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition shadow-2xl hover:shadow-xl" whileHover={{ scale: 1.05 }}>
              Get in Touch Today
            </motion.button>
          </a>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section id="contact-section" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
          <ContactForm />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <img src={professionalPhoto} alt="A.M Ansari - Professional Pattern Maker" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border-8 border-white object-top" />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight text-gray-900 uppercase tracking-tighter" style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: 900 }}>
                About <span className="text-blue-600">A.M Ansari</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                Professional Garment Pattern Maker with 22 years of industry experience, working with designers, brands, factories, startups, and individual clients worldwide. He creates manual and CAD patterns for menswear, womenswear, and kidswear, including western, formal, and casual garments, along with grading, scaling, and marker making.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                A.M Ansari also offers in-person, one-on-one training in garment pattern making for beginners and advanced learners, using manual methods and Richpeace CAD software. If you are looking for professional pattern making support or want to learn pattern making with clear, practical guidance, feel free to reach out to discuss your requirements.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">22+ Years Experience</h4>
                    <p className="text-muted-foreground text-sm">Working with global designers and brands</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Richpeace CAD Expertise</h4>
                    <p className="text-muted-foreground text-sm">Professional CAD pattern creation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">One-on-One Training</h4>
                    <p className="text-muted-foreground text-sm">Personalized learning for all levels</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-gray-700">
          {/* Phone */}
          <div>
            <h4 className="font-bold mb-2">Phone</h4>
            <p>
              +91 90295 98867 <br />
              <a 
                href="https://wa.me/919029598867?text=Hi,%20I%20am%20interested%20in%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 hover:underline"
              >
                Available on WhatsApp
              </a>
            </p>
          </div>

          {/* Email */}
          <div>
            <h4 className="font-bold mb-2">Email</h4>
            <p>
              <a href="mailto:zainabbitrading@gmail.com" className="hover:underline">
                zainabbitrading@gmail.com
              </a>
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold mb-2">Location</h4>
            <p>
              <a 
                href="https://maps.google.com/?q=Shop+No.+06,+Kanakia+Rd,+opp.+Fitness+pro,+Unique+Gardens,+Beverly+Park,+Mira+Road+East,+Mumbai,+Maharashtra+401107,+India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline text-blue-600"
              >
                Shop No. 06, Kanakia Rd, opp. Fitness pro, Unique Gardens, Beverly Park, Mira Road East, Mumbai, Maharashtra 401107, India
              </a>
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold mb-2">Working Hours</h4>
            <p>Mon-Sat, 9:30 AM - 7:00 PM</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Zainab Bi Trading" className="w-12 h-12 object-contain" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Zainab Bi Trading</span>
                  <span className="text-xs text-gray-400">By A.M Ansari</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">22 years of excellence in Pattern Making, Training, & Freelancing services.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#contact-section" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                <li><a href="https://maps.google.com/?q=Shop+No.+06,+Kanakia+Rd,+opp.+Fitness+pro,+Unique+Gardens,+Beverly+Park,+Mira+Road+East,+Mumbai,+Mira+Bhayandar,+Maharashtra+401107,+India" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Store Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#training-section" className="text-gray-400 hover:text-white transition">Professional Training</a></li>
                <li><a href="#freelance-services" className="text-gray-400 hover:text-white transition">Freelance Services</a></li>
              </ul>
            </div>
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
            <p className="text-center text-gray-400 text-sm">© 2015 Zainab Bi Trading. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button onClick={scrollToTop} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition">
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}

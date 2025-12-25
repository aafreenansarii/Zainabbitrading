import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Grid3x3, Briefcase, Phone, Mail, MapPin, ArrowRight, Star, ArrowUp } from "lucide-react";
import { Link } from "wouter";
import trainingImage from "@assets/stock_images/group_of_people_in_a_793b95a1.jpg";
import freelanceImage from "@assets/stock_images/business_meeting_con_e4b19421.jpg";
import professionalPhoto from "@assets/professional_photo_1766695207315.JPG";
import ContactForm from "@/components/contact-form";
import logo from "@assets/only_ZBT_1766448125486.jpeg";
import heroImage from "@assets/hero_1766450847632.png";

export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
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

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-lg border-b border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex flex-col items-center justify-center text-center">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center">
            <motion.div {...fadeInUp}>
              <h1 className="font-serif text-6xl md:text-7xl font-bold mb-8 leading-tight text-white">
                Master <span className="bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">Pattern Making</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed font-medium">
                Learn both manual & CAD techniques from a 22-year industry expert. Transform your skills with hands-on training in Mira Road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services">
                  <motion.button 
                    data-testid="button-get-started" 
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                    whileHover={{ y: -2 }}
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
        {...staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Comprehensive solutions for pattern makers, fashion designers, and businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Training Service */}
            <Link href="/training">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative group"
                onHoverStart={() => setHoveredService("training")}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                {...fadeInUp}
                data-testid="card-service-training"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Professional Training</h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  Master pattern making with both manual and CAD software techniques. Learn from industry experts with hands-on guidance.
                </p>
                <ul className="space-y-3 text-sm font-semibold">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span>Manual pattern making</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span>CAD software training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span>One-on-one sessions</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </Link>

            {/* Grading & Marking Service */}
            <Link href="/grading">
              <motion.div
                className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border-2 border-orange-200 p-8 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative group"
                onHoverStart={() => setHoveredService("grading")}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                {...fadeInUp}
                data-testid="card-service-grading"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-pink-400/0 group-hover:from-orange-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Grid3x3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Grading & Marking</h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  Professional pattern grading and marking services tailored to your exact specifications and requirements.
                </p>
                <ul className="space-y-3 text-sm font-semibold">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></div>
                    <span>Precise grading</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></div>
                    <span>Custom marking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></div>
                    <span>Quick turnaround</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </Link>

            {/* Freelancing Service */}
            <Link href="/freelancing">
              <motion.div
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 p-8 hover:border-green-400 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative group"
                onHoverStart={() => setHoveredService("freelance")}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                {...fadeInUp}
                data-testid="card-service-freelance"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-teal-400/0 group-hover:from-green-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Freelance Services</h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  Expert freelancing support for your pattern making, design, and production needs. Flexible and professional solutions.
                </p>
                <ul className="space-y-3 text-sm font-semibold">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                    <span>Pattern design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                    <span>Production support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                    <span>Flexible engagement</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <img
                src={professionalPhoto}
                alt="A.M Ansari - Professional Pattern Maker"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border-8 border-white object-top"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-8 leading-tight">About <span className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">A.M Ansari</span></h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                I am a professional pattern maker with 22 years of industry experience, working with designers, brands, factories, startups, and individual clients worldwide. I create manual and CAD patterns for menswear, womenswear, and kidswear, including western, formal, and casual garments, along with grading, scaling, and marking.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                I also offer in-person, one-on-one training in pattern making for beginners and advanced learners, using manual methods and Richpeace CAD software. If you are looking for professional pattern making support or want to learn pattern making with clear, practical guidance, feel free to reach out to discuss your requirements.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">22+ Years Experience</h4>
                    <p className="text-muted-foreground">Working with global designers and brands</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Richpeace CAD Expertise</h4>
                    <p className="text-muted-foreground">Professional CAD pattern creation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">One-on-One Training</h4>
                    <p className="text-muted-foreground">Personalized learning for all levels</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-white mb-8">
            Ready to Transform?
          </h2>
          <p className="text-xl text-white/95 mb-10 font-medium">
            Join our training programs or hire us for your freelance needs. Let's create something amazing together.
          </p>
          <a href="#contact-form">
            <motion.button 
              data-testid="button-contact-cta" 
              className="bg-white text-pink-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition shadow-2xl hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              Get in Touch Today
            </motion.button>
          </a>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section id="contact-form" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 font-medium">We'd love to hear from you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Card */}
            <a
              href="https://maps.google.com/?q=Shop+No.+01,+Solan+Garden+Opp.+Fitness+Pro+Kanakia+Road,+Beverly+Park,+Mira+Road+East,+Mumbai,+Mira+Bhayandar,+401107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-200 p-10 text-center hover:border-red-400 hover:shadow-2xl transition-all cursor-pointer min-h-80"
                whileHover={{ y: -8, scale: 1.02 }}
                {...fadeInUp}
                data-testid="card-contact-address"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-gray-900">Location</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">Shop No. 01, Solan Garden Opp. Fitness Pro Kanakia Road, Beverly Park, Mira Road East, Mumbai, Mira Bhayandar - 401107</p>
              </motion.div>
            </a>

            {/* Work Hours Card */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border-2 border-purple-200 p-10 text-center hover:border-purple-400 hover:shadow-2xl transition-all cursor-pointer min-h-80"
              whileHover={{ y: -8, scale: 1.02 }}
              {...fadeInUp}
              data-testid="card-contact-hours"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">Work Hours</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                <span className="block font-bold text-base mb-2">Monday to Saturday</span>
                9:30 AM - 7:00 PM
              </p>
            </motion.div>

            {/* Phone & Email Card */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href="https://wa.me/919029598867?text=Hello%2C%20I%27m%20interested%20in%20your%20pattern%20making%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 p-10 text-center hover:border-green-400 hover:shadow-2xl transition-all cursor-pointer min-h-60"
                    whileHover={{ y: -8, scale: 1.02 }}
                    {...fadeInUp}
                    data-testid="card-contact-phone"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-gray-900">Phone</h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">+91 90295 98867<br />Available on WhatsApp</p>
                  </motion.div>
                </a>

                <a href="mailto:zainabbitrading@gmail.com">
                  <motion.div
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-10 text-center hover:border-blue-400 hover:shadow-2xl transition-all cursor-pointer min-h-60"
                    whileHover={{ y: -8, scale: 1.02 }}
                    {...fadeInUp}
                    data-testid="card-contact-email"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-gray-900">Email</h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">zainabbitrading@gmail.com</p>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
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
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                <li><a href="https://maps.google.com/?q=Shop+No.+01,+Solan+Garden+Opp.+Fitness+Pro+Kanakia+Road,+Beverly+Park,+Mira+Road+East,+Mumbai,+Mira+Bhayandar,+401107" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Store Location</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="/training" className="text-gray-400 hover:text-white transition">Professional Training</a></li>
                <li><a href="/grading" className="text-gray-400 hover:text-white transition">Grading & Marking</a></li>
                <li><a href="/freelancing" className="text-gray-400 hover:text-white transition">Freelance Services</a></li>
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

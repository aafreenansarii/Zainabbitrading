import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Users, Briefcase, Phone, Mail, MapPin, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import trainingImage from "@assets/stock_images/group_of_people_in_a_793b95a1.jpg";
import freelanceImage from "@assets/stock_images/business_meeting_con_e4b19421.jpg";
import consultingImage from "@assets/stock_images/professional_woman_w_62468fac.jpg";
import ContactForm from "@/components/contact-form";
import logo from "@assets/only_ZBT_1766448125486.jpeg";

export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Zainab Bi Trading" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Zainab Bi Trading</span>
              <span className="text-xs text-muted-foreground font-semibold">Manual & CAD Pattern Maker | Trainer | Freelancer</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold">
            <a href="#services" className="text-gray-700 hover:text-red-500 transition duration-300">Services</a>
            <a href="#about" className="text-gray-700 hover:text-red-500 transition duration-300">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-500 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-300/30 to-yellow-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-300/30 to-purple-300/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 mb-8 bg-gradient-to-r from-red-100 to-yellow-100 px-4 py-2 rounded-full border border-red-200">
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-sm font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Expert Training & Freelancing</span>
              </div>
              <h1 className="font-serif text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Master <span className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Pattern Making</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                Learn both manual & CAD techniques from a 22-year industry expert. Transform your skills with hands-on training in Mira Road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  data-testid="button-get-started" 
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                  whileHover={{ y: -2 }}
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  data-testid="button-learn-more" 
                  className="border-2 border-blue-500 text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition text-lg"
                  whileHover={{ y: -2 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={trainingImage}
                  alt="Pattern making training class"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
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
                  <Users className="w-8 h-8 text-white" />
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
                  <Zap className="w-8 h-8 text-white" />
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

      {/* Process Section */}
      <motion.section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-indigo-900 text-white" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6">How We Work</h2>
            <p className="text-xl font-medium text-purple-100">Simple, transparent, and professional process</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "Understand your needs and goals" },
              { num: "02", title: "Assessment", desc: "Evaluate your current skills" },
              { num: "03", title: "Training", desc: "Personalized hands-on learning" },
              { num: "04", title: "Delivery", desc: "Professional results & support" },
            ].map((step, idx) => (
              <motion.div key={idx} {...fadeInUp} data-testid={`card-process-${step.num}`} whileHover={{ y: -4 }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/50 transition-all">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">{step.num}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-purple-100">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <img
                src={freelanceImage}
                alt="Professional consulting"
                className="rounded-3xl shadow-2xl w-full h-full object-cover border-8 border-white"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-8 leading-tight">About <span className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Zainab Bi</span></h2>
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
      <motion.section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-white mb-8">
            Ready to Transform?
          </h2>
          <p className="text-xl text-white/95 mb-10 font-medium">
            Join our training programs or hire us for your freelance needs. Let's create something amazing together.
          </p>
          <motion.button 
            data-testid="button-contact-cta" 
            className="bg-white text-pink-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition shadow-2xl hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch Today
          </motion.button>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 font-medium">We'd love to hear from you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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

            <a
              href="https://wa.me/919029598867?text=Hello%2C%20I%27m%20interested%20in%20your%20pattern%20making%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 p-10 text-center hover:border-green-400 hover:shadow-2xl transition-all cursor-pointer min-h-80"
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
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-10 text-center hover:border-blue-400 hover:shadow-2xl transition-all cursor-pointer min-h-80"
                whileHover={{ y: -8, scale: 1.02 }}
                {...fadeInUp}
                data-testid="card-contact-email"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-gray-900">Email</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">zainabbitrading@gmail.com</p>
              </motion.div>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <img src={logo} alt="Zainab Bi Trading" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-lg">Zainab Bi Trading</span>
                <span className="text-xs text-gray-400">Professional Pattern Making</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm text-center md:text-right font-medium">Mira Road, Mumbai | Manual & CAD Pattern Making | Richpeace & Tuka Software</p>
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

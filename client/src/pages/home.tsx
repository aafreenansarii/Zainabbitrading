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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Zainab Bi Trading" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-secondary">Zainab Bi Trading</span>
              <span className="text-xs text-muted-foreground">Manual & CAD Pattern Maker | Trainer | Freelancer | Richpeace & Tuka</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="text-muted-foreground hover:text-primary transition">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 mb-6 bg-accent/10 px-3 py-1 rounded-full">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Expert Training & Freelancing</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master Pattern Making with <span className="text-accent">CAD & Manual</span> Techniques
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Learn from industry experts. Get professional grading, marking, and freelancing services. Transform your skills with hands-on training in Mira Road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button data-testid="button-get-started" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button data-testid="button-learn-more" className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/5 transition">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={trainingImage}
                  alt="Pattern making training class"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8"
        {...staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for pattern makers, fashion designers, and businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Training Service */}
            <Link href="/training">
              <motion.div
                className="bg-white rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onHoverStart={() => setHoveredService("training")}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid="card-service-training"
              >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Professional Training</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Master pattern making with both manual and CAD software techniques. Learn from industry experts with hands-on guidance.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>Manual pattern making</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>CAD software training</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>One-on-one sessions</span>
                </li>
              </ul>
              </motion.div>
            </Link>

            {/* Grading & Marking Service */}
            <Link href="/grading">
              <motion.div
                className="bg-white rounded-xl border border-border p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onHoverStart={() => setHoveredService("grading")}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid="card-service-grading"
              >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Grading & Marking</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professional pattern grading and marking services tailored to your exact specifications and requirements.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>Precise grading</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>Custom marking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>Quick turnaround</span>
                </li>
              </ul>
              </motion.div>
            </Link>

            {/* Freelancing Service */}
            <Link href="/freelancing">
              <motion.div
                className="bg-white rounded-xl border border-border p-8 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onHoverStart={() => setHoveredService("freelance")}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid="card-service-freelance"
              >
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Freelance Services</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Expert freelancing support for your pattern making, design, and production needs. Flexible and professional solutions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>Pattern design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>Production support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>Flexible engagement</span>
                </li>
              </ul>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">Simple, transparent, and professional process</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "Understand your needs and goals" },
              { num: "02", title: "Assessment", desc: "Evaluate your current skills" },
              { num: "03", title: "Training", desc: "Personalized hands-on learning" },
              { num: "04", title: "Delivery", desc: "Professional results & support" },
            ].map((step, idx) => (
              <motion.div key={idx} {...fadeInUp} data-testid={`card-process-${step.num}`}>
                <div className="bg-white rounded-xl p-8 border border-border">
                  <div className="text-4xl font-bold text-accent mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" className="py-20 px-4 sm:px-6 lg:px-8" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img
                src={freelanceImage}
                alt="Professional consulting"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-4xl font-bold mb-6">About Zainab Bi Trading</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                I am a professional pattern maker with 22 years of industry experience, working with designers, brands, factories, startups, and individual clients worldwide. I create manual and CAD patterns for menswear, womenswear, and kidswear, including western, formal, and casual garments, along with grading, scaling, and marking.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
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
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-primary" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join our training programs or hire us for your freelance needs. Let's create something amazing together.
          </p>
          <button data-testid="button-contact-cta" className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition shadow-lg hover:shadow-xl">
            Get in Touch Today
          </button>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">We'd love to hear from you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://maps.google.com/?q=Shop+No.+01,+Solan+Garden+Opp.+Fitness+Pro+Kanakia+Road,+Beverly+Park,+Mira+Road+East,+Mumbai,+Mira+Bhayandar,+401107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="bg-white rounded-xl border border-border p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer min-h-80"
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid="card-contact-address"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">Shop No. 01, Solan Garden Opp. Fitness Pro Kanakia Road, Beverly Park, Mira Road East, Mumbai, Mira Bhayandar - 401107</p>
              </motion.div>
            </a>

            <a
              href="https://wa.me/919029598867?text=Hello%2C%20I%27m%20interested%20in%20your%20pattern%20making%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="bg-white rounded-xl border border-border p-8 text-center hover:border-accent/50 hover:shadow-lg transition-all cursor-pointer min-h-80"
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid="card-contact-phone"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">+91 90295 98867<br />Available on WhatsApp</p>
              </motion.div>
            </a>

            <a href="mailto:zainabbitrading@gmail.com">
              <motion.div
                className="bg-white rounded-xl border border-border p-8 text-center hover:border-secondary/50 hover:shadow-lg transition-all cursor-pointer min-h-80"
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid="card-contact-email"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">zainabbitrading@gmail.com</p>
              </motion.div>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src={logo} alt="Zainab Bi Trading" className="w-10 h-10 object-contain" />
              <span className="font-bold">Zainab Bi Trading</span>
            </div>
            <p className="text-white/70 text-sm">Mira Road, Mumbai | Manual & CAD Pattern Making | Richpeace & Tuka Software</p>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-white/60 text-sm">
              © 2024 Zainab Bi Trading. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

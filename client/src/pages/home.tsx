import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, Grid3x3, Briefcase, Phone, Mail, MapPin, ArrowRight, Star, ArrowUp } from "lucide-react";
import { Link } from "wouter";
import trainingImage from "@assets/stock_images/group_of_people_in_a_793b95a1.jpg";
import freelanceImage from "@assets/stock_images/business_meeting_con_e4b19421.jpg";
import professionalPhoto from "@assets/professional_photo_1766695207315.JPG";
import ContactForm from "@/components/contact-form";
import logo from "@assets/only_ZBT_1766448125486.jpeg";
import heroImage from "@assets/WhatsApp_Image_2025-12-22_at_19.22.11_(3)_1767114423149.jpeg";

export default function Home() {
  const [location] = useLocation();
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setShowNav(window.scrollY > 100);
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

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact-form" },
  ];

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-6 right-6 z-[100] bg-white/80 backdrop-blur-md border border-border px-8 py-4 rounded-full shadow-2xl"
      >
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xs font-black text-foreground hover:text-primary transition-all uppercase tracking-[0.2em] hover:scale-110 inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

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
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] flex items-center justify-center bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={heroImage} 
          alt="Pattern Making Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-white/40 z-[1]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-5xl md:text-7xl mb-8 leading-tight text-black text-center" style={{ fontFamily: "'Cooper Black', serif", fontWeight: 900 }}>
                Master <span className="text-blue-600">Pattern Making</span>
              </h1>
              <p className="text-lg text-black mb-10 leading-relaxed font-bold text-center max-w-3xl mx-auto">
                Experience precision in manual and CAD pattern making, from expert-led training to professional services.
              </p>
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
            <h2 className="text-5xl md:text-6xl mb-6 text-gray-900 uppercase tracking-tighter" style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: 900 }}>Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Comprehensive solutions for Pattern Makers, Fashion Designers, and Businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Training Service */}
            <Link href="/training">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative group h-full flex flex-col"
                onHoverStart={() => setHoveredService("training")}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                {...fadeInUp}
                data-testid="card-service-training"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Professional Training</h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium flex-grow">
                  Master pattern making with manual and CAD techniques. Learn from industry experts with hands-on guidance and interview preparation.
                </p>
                <ul className="space-y-3 text-sm font-semibold mt-auto">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span>Manual & CAD training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span>Interview preparation</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </Link>

            {/* Freelancing & Production Service */}
            <Link href="/freelancing">
              <motion.div
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 p-8 hover:border-green-400 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative group h-full flex flex-col"
                onHoverStart={() => setHoveredService("freelance")}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                {...fadeInUp}
                data-testid="card-service-freelance"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-teal-400/0 group-hover:from-green-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Freelance & Production</h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium flex-grow">
                  Comprehensive pattern solutions including grading, marking, and technical design support for brands and factories worldwide.
                </p>
                <ul className="space-y-3 text-sm font-semibold mt-auto">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                    <span>Grading & Marking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                    <span>Technical Support</span>
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
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight text-gray-900 uppercase tracking-tighter" style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: 900 }}>About <span className="text-blue-600">A.M Ansari</span></h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                I am a professional Pattern Maker with 22 years of industry experience, working with designers, brands, factories, startups, and individual clients worldwide. I create manual and CAD patterns for menswear, womenswear, and kidswear, including western, formal, and casual garments, along with grading, scaling, and marking.
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

      {/* Achievements Section */}
      <motion.section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" {...fadeInUp}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl mb-6 text-gray-900 uppercase tracking-tighter" style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: 900 }}>Achievements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Over two decades of excellence in the pattern making industry.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-600 mb-3">22+</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Years Exp</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-600 mb-3">500+</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Students</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-600 mb-3">50+</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Brands</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-600 mb-3">100%</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Practical</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" {...staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl mb-6 text-gray-900 uppercase tracking-tighter" style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: 900 }}>What People Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Real feedback from students and professionals who have trained with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Fashion Designer",
                content: "The manual pattern making course was eye-opening. Ansari sir's 22 years of experience really shows in his teaching style.",
                rating: 5
              },
              {
                name: "Priya Patel",
                role: "Student",
                content: "Learning Richpeace CAD here was the best decision for my career. The one-on-one attention is exactly what I needed.",
                rating: 5
              },
              {
                name: "Mohammed Zaid",
                role: "Garment Exporter",
                content: "We use their grading and marking services regularly. Precision is top-notch and delivery is always on time.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                whileHover={{ y: -10 }}
                {...fadeInUp}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed font-medium">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600 font-semibold">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform?
          </h2>
          <p className="text-lg text-white/95 mb-10 font-medium">
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
            <h2 className="text-5xl md:text-6xl mb-6 text-gray-900 uppercase tracking-tighter" style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: 900 }}>Get In Touch</h2>
            <p className="text-lg text-gray-600 font-medium">We'd love to hear from you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Card */}
            <a
              href="https://maps.google.com/?q=Shop+No.+06,+Kanakia+Rd,+opp.+Fitness+pro,+Unique+Gardens,+Beverly+Park,+Mira+Road+East,+Mumbai,+Mira+Bhayandar,+Maharashtra+401107,+India"
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
                <p className="text-gray-700 text-sm leading-relaxed font-medium">Shop No. 06, Kanakia Rd, opp. Fitness pro, Unique Gardens, Beverly Park, Mira Road East, Mumbai, Mira Bhayandar, Maharashtra 401107, India</p>
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
                <li><a href="https://maps.google.com/?q=Shop+No.+06,+Kanakia+Rd,+opp.+Fitness+pro,+Unique+Gardens,+Beverly+Park,+Mira+Road+East,+Mumbai,+Mira+Bhayandar,+Maharashtra+401107,+India" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Store Location</a></li>
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

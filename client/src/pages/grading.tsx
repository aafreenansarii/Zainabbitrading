import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, Zap, Clock, CheckCircle, ArrowUp, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import gradingImage from "@assets/stock_images/professional_woman_w_62468fac.jpg";
import heroImage from "@assets/hero_1766450847632.png";
import logo from "@assets/only_ZBT_1766448125486.jpeg";

export default function Grading() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  
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

  const services = [
    {
      title: "Pattern Grading",
      desc: "Professional size grading for all garment types maintaining proportional fit across sizes",
      features: ["Base size pattern grading", "Pattern Maker making", "Fabric consumption"],
    },
    {
      title: "Pattern Marking",
      desc: "Precise marking for production with detailed seam allowances and construction notes",
      features: ["Production-ready", "Clear markings", "Technical specs"],
    },
    {
      title: "Digital Conversion",
      desc: "Convert manual patterns to digital formats ready for production and CMT",
      features: ["CAD digitization", "Digital grading and marker making for softcopy", "Pattern digitizer"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Link href="/">
        <motion.button
          className="fixed top-8 left-8 z-[60] bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-border hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
          whileHover={{ x: -4 }}
          data-testid="button-back-home"
        >
          <ArrowLeft className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transition-colors" />
        </motion.button>
      </Link>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-lg border-b border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
          <Link href="/" className="flex flex-col items-center flex-1">
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
          <div className="hidden md:flex items-center gap-8 pr-4">
            <Link href="/#services" className="text-sm font-bold text-foreground hover:text-orange-600 transition-colors uppercase tracking-wider">Services</Link>
            <Link href="/#about" className="text-sm font-bold text-foreground hover:text-orange-600 transition-colors uppercase tracking-wider">About</Link>
            <Link href="/?scrollTo=contact-form" className="text-sm font-bold text-foreground hover:text-orange-600 transition-colors uppercase tracking-wider">Contact</Link>
          </div>
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
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center">
            <motion.div {...fadeInUp}>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-black text-center">
                Professional Grading & <span className="text-orange-600">Marking Services</span>
              </h1>
              <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium text-center max-w-3xl mx-auto">
                Expert pattern grading and marking tailored to your exact specifications. With 22 years of experience, we deliver precise, production-ready patterns for factories, brands, and designers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-orange-600" />
                  <span className="font-semibold text-gray-900">Quick Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <span className="font-semibold text-gray-900">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                  <span className="font-semibold text-gray-900">100% Precision</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">Click on a service to see specialized features</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-border overflow-hidden hover:border-orange-500/50 transition-all shadow-sm hover:shadow-md"
                {...fadeInUp}
              >
                <button
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-orange-600" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border bg-orange-50/30">
                        <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium">
                              <div className="bg-orange-100 p-1 rounded-full">
                                <Star className="w-4 h-4 text-orange-600" />
                              </div>
                              {feature}
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
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-pink-600" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Need Professional Grading?</h2>
          <p className="text-lg text-white/90 mb-8">
            Send us your patterns and let's create production-ready graded sizes.
          </p>
          <Link href="/?scrollTo=contact-form">
            <motion.button 
              data-testid="button-grading-contact" 
              className="inline-block bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              Inquire Now
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Photos Section */}
      <motion.section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Work Samples</h2>
          <p className="text-lg text-muted-foreground">Portfolio and work samples coming soon...</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl aspect-square border-2 border-dashed border-border flex items-center justify-center"
              >
                <p className="text-muted-foreground">Sample {item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

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
              <p className="text-gray-400 text-sm">22 years of excellence in pattern making, training, and freelancing services.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
                <li><a href="https://maps.google.com/?q=Shop+No.+06,+Kanakia+Rd,+opp.+Fitness+pro,+Unique+Gardens,+Beverly+Park,+Mira+Road+East,+Mumbai,+Mira+Bhayandar,+Maharashtra+401107,+India" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Store Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><Link href="/training" className="text-gray-400 hover:text-white transition">Professional Training</Link></li>
                <li><Link href="/grading" className="text-gray-400 hover:text-white transition">Grading & Marking</Link></li>
                <li><Link href="/freelancing" className="text-gray-400 hover:text-white transition">Freelance Services</Link></li>
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
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-gray-400 text-sm">© 2024 Zainab Bi Trading. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

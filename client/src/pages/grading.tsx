import { motion } from "framer-motion";
import { ArrowLeft, Star, Zap, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import gradingImage from "@assets/stock_images/professional_woman_w_62468fac.jpg";
import logo from "@assets/only_ZBT_1766448125486.jpeg";

export default function Grading() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src={logo} alt="Zainabbi Trading" className="w-10 h-10 object-contain" />
            <span className="font-bold text-sm text-secondary">Back to Home</span>
          </Link>
          <span className="font-bold text-lg text-secondary">Grading & Marking</span>
          <div className="w-10 h-10"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Professional Grading & <span className="text-accent">Marking Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Expert pattern grading and marking tailored to your exact specifications. With 22 years of experience, we deliver precise, production-ready patterns for factories, brands, and designers worldwide.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Quick Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="font-semibold">100% Precision</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={gradingImage} alt="Grading services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl font-bold mb-4">Our Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Pattern Grading",
                desc: "Professional size grading for all garment types maintaining proportional fit across sizes",
                features: ["All size ranges", "Manual & CAD", "Consistent proportions"],
              },
              {
                title: "Pattern Marking",
                desc: "Precise marking for production with detailed seam allowances and construction notes",
                features: ["Production-ready", "Clear markings", "Technical specs"],
              },
              {
                title: "Scaling Services",
                desc: "Accurate pattern scaling for customization and bulk production requirements",
                features: ["Precise scaling", "Custom sizes", "Quality assured"],
              },
              {
                title: "Digital Conversion",
                desc: "Convert manual patterns to digital formats ready for production and CMT",
                features: ["CAD digitization", "Production files", "Technical accuracy"],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-border p-8 hover:border-accent/50 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid={`card-grading-${idx}`}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-primary" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Need Professional Grading?</h2>
          <p className="text-lg text-white/90 mb-8">
            Send us your patterns and let's create production-ready graded sizes.
          </p>
          <a
            href="mailto:zainabbitrading@gmail.com"
            data-testid="button-grading-contact"
            className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition shadow-lg hover:shadow-xl"
          >
            Request Quote
          </a>
        </div>
      </motion.section>

      {/* Placeholder for work samples */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Work Samples</h2>
          <p className="text-lg text-muted-foreground">Portfolio and work samples coming soon...</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl aspect-square border-2 border-dashed border-border flex items-center justify-center"
                data-testid={`sample-placeholder-${item}`}
              >
                <p className="text-muted-foreground">Sample {item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/70">© 2024 Zainabbi Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import { motion } from "framer-motion";
import { ArrowLeft, Star, Briefcase, Zap, Users } from "lucide-react";
import { Link } from "wouter";
import freelanceImage from "@assets/stock_images/business_meeting_con_e4b19421.jpg";
import logo from "@assets/only_ZBT_1766448125486.jpeg";

export default function Freelancing() {
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
          <span className="font-bold text-lg text-secondary">Freelance Services</span>
          <div className="w-10 h-10"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Expert <span className="text-secondary">Freelance Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Professional pattern making and design support for brands, factories, startups, and individual clients worldwide. Flexible engagement tailored to your specific needs and timeline.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-secondary" />
                  <span className="font-semibold">Flexible Engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-secondary" />
                  <span className="font-semibold">Quick Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-secondary" />
                  <span className="font-semibold">Global Clients</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={freelanceImage} alt="Freelance work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Offered */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8">
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
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
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
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-primary" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss your project requirements and find the perfect freelance solution.
          </p>
          <a
            href="mailto:zainabbitrading@gmail.com"
            data-testid="button-freelance-contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition shadow-lg hover:shadow-xl"
          >
            Start a Project
          </a>
        </div>
      </motion.section>

      {/* Placeholder for portfolio */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/70">© 2024 Zainabbi Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

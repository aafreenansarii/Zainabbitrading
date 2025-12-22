import { motion } from "framer-motion";
import { ArrowLeft, Star, Users, Clock, Award } from "lucide-react";
import { Link } from "wouter";
import trainingImage from "@assets/stock_images/group_of_people_in_a_793b95a1.jpg";
import logo from "@assets/generated_images/zbt_logo_design_orange_pink_fashion.png";

export default function Training() {
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
          <span className="font-bold text-lg text-secondary">Professional Training</span>
          <div className="w-10 h-10"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Professional Pattern Making <span className="text-primary">Training</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Master the art of pattern making with 22 years of industry expertise. Learn both manual techniques and Richpeace CAD software from a professional pattern maker working with global brands.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="font-semibold">One-on-One Sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Flexible Schedule</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Hands-On Learning</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={trainingImage} alt="Training session" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Training Details */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl font-bold mb-4">What You'll Learn</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Manual Pattern Making",
                desc: "Traditional hand-drafted patterns for all garment types - menswear, womenswear, and kidswear",
                skills: ["Basic to advanced techniques", "Measurements & grading", "Garment construction"],
              },
              {
                title: "Richpeace CAD Software",
                desc: "Professional digital pattern design used by global fashion brands and factories",
                skills: ["Pattern digitization", "Digital grading", "Production-ready files"],
              },
              {
                title: "Garment Types",
                desc: "Master patterns for various categories and styles",
                skills: ["Western wear", "Formal & casual", "All body types"],
              },
              {
                title: "Professional Skills",
                desc: "Industry-standard practices and workflow",
                skills: ["Scaling & marking", "Client communication", "Professional standards"],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
                {...fadeInUp}
                data-testid={`card-training-${idx}`}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-primary" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Start Your Training?</h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us to discuss your learning goals and schedule your sessions.
          </p>
          <a
            href="mailto:zainabbitrading@gmail.com"
            data-testid="button-training-contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition shadow-lg hover:shadow-xl"
          >
            Inquire Now
          </a>
        </div>
      </motion.section>

      {/* Placeholder for photos section */}
      <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Training Gallery</h2>
          <p className="text-lg text-muted-foreground">Photos and work samples coming soon...</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl aspect-square border-2 border-dashed border-border flex items-center justify-center"
                data-testid={`photo-placeholder-${item}`}
              >
                <p className="text-muted-foreground">Photo {item}</p>
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

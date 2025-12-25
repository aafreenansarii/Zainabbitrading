import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "pattern-making",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted to ansariaafreend@gmail.com:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "pattern-making",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-xl border border-border p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

        {submitted && (
          <motion.div
            className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg text-accent font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✓ Thank you for contacting. Our team will reach out to you shortly!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Full Name
              </label>
              <input
                data-testid="input-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Phone Number
              </label>
              <input
                data-testid="input-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 90295 98867"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Email Address
            </label>
            <input
              data-testid="input-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Service Interested In
            </label>
            <select
              data-testid="select-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition bg-white"
            >
              <option value="pattern-making">Pattern Making Training</option>
              <option value="grading">Grading & Marking Services</option>
              <option value="freelancing">Freelancing Services</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Message
            </label>
            <textarea
              data-testid="textarea-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              required
            ></textarea>
          </div>

          <button
            data-testid="button-submit-form"
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
}

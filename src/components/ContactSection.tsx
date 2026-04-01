import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:asmabanukamanur@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-heading text-3xl text-center mb-10 text-foreground"
      >
        Contact
      </motion.h2>
      <div className="max-w-xl mx-auto text-center space-y-3 mb-10">
        <p className="font-body text-muted-foreground flex items-center justify-center gap-2">
          <Mail size={16} className="text-primary" /> asmabanukamanur@gmail.com
        </p>
        <p className="font-body text-muted-foreground flex items-center justify-center gap-2">
          <Phone size={16} className="text-primary" /> 7893209083
        </p>
        <p className="font-body text-muted-foreground flex items-center justify-center gap-2">
          <Linkedin size={16} className="text-primary" />
          <a href="#" className="text-primary hover:underline">LinkedIn</a>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-input border border-primary/30 px-4 py-3 rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:glow-border transition-shadow"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-input border border-primary/30 px-4 py-3 rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:glow-border transition-shadow"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="bg-input border border-primary/30 px-4 py-3 rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:glow-border transition-shadow resize-none"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-6 py-3 rounded font-body text-sm hover:opacity-80 transition-opacity"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="relative z-10 max-w-3xl mx-auto px-6 py-20">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-heading text-3xl text-center mb-8 text-foreground"
    >
      About Me
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="font-body text-muted-foreground leading-relaxed text-center"
    >
      I'm a passionate Computer Science Engineering student driven by curiosity and discipline.
      My interests span across <span className="text-primary font-medium">Software Engineering</span>,{" "}
      <span className="text-primary font-medium">Cloud Computing</span>, and{" "}
      <span className="text-primary font-medium">problem-solving</span>.
      I aim to build systems that are quiet in appearance but powerful in execution—crafted with precision,
      clarity, and calm intent.
    </motion.p>
  </section>
);

export default AboutSection;

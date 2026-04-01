import { motion } from "framer-motion";

const education = [
  { title: "B.Tech CSE (2024–2028)", detail: "CGPA: 8.4" },
  { title: "Intermediate", detail: "97%" },
  { title: "SSC", detail: "52.2%" },
];

const EducationSection = () => (
  <section id="education" className="relative z-10 py-20 px-6">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-heading text-3xl text-center mb-10 text-foreground"
    >
      Education
    </motion.h2>
    <div className="max-w-2xl mx-auto border-l-2 border-primary/50 pl-6 space-y-8">
      {education.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
        >
          <h3 className="font-heading text-lg text-foreground">{item.title}</h3>
          <p className="font-body text-primary text-sm mt-1">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;

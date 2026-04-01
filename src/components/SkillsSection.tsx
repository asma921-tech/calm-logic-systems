import { motion } from "framer-motion";

const skills = ["C", "Java", "Python", "Data Structures", "MySQL", "Firebase", "MS Access", "Windows", "Linux", "MacOS"];

const SkillsSection = () => (
  <section id="skills" className="relative z-10 py-20 px-6">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-heading text-3xl text-center mb-10 text-foreground"
    >
      Skills
    </motion.h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.08, backgroundColor: "hsl(0 100% 27%)" }}
          className="bg-card border border-primary/30 p-4 text-center font-body text-sm text-foreground rounded transition-colors cursor-default"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;

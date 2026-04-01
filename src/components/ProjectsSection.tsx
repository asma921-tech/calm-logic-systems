import { motion } from "framer-motion";

const projects = [
  { title: "Student Management System", desc: "A dynamic system to manage student data efficiently." },
  { title: "Weather Web App", desc: "Displays real-time weather using API integration." },
  { title: "Cloud Backup Tool", desc: "Simple tool for uploading files to cloud storage." },
];

const ProjectsSection = () => (
  <section id="projects" className="relative z-10 py-20 px-6">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-heading text-3xl text-center mb-10 text-foreground"
    >
      Projects
    </motion.h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="bg-card border border-primary/30 p-6 rounded transition-shadow hover:glow-border-strong cursor-default"
        >
          <h3 className="font-heading text-lg text-foreground mb-2">{p.title}</h3>
          <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  "97% in Intermediate",
  "AP EAMCET Rank: 38892",
  "ISTE Member",
  "Workshops attended",
];

const AchievementsSection = () => (
  <section className="relative z-10 py-20 px-6">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-heading text-3xl text-center mb-10 text-foreground"
    >
      Achievements
    </motion.h2>
    <div className="max-w-2xl mx-auto space-y-4">
      {achievements.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3 font-body text-muted-foreground"
        >
          <Award size={16} className="text-primary shrink-0" />
          {a}
        </motion.div>
      ))}
    </div>
  </section>
);

export default AchievementsSection;

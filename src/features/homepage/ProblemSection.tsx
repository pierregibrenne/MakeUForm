import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative container mx-auto px-4 py-16 max-w-7xl"
    >
      {/* Contenu principal */}
      <div className="text-center">
        <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase text-red-500">
          Le problème avec les outils actuels
        </h2>
        <p className="text-red text-lg max-w-3xl mx-auto mt-4">
          Les solutions existantes sont compliquées, chronophages et inefficaces.
        </p>
      </div>

      {/* Grille des problèmes */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-6 bg-black backdrop-blur-lg rounded-lg border border-gray-700 shadow-lg"
          >
            <div className="text-3xl">{problem.icon}</div>
            <h3 className="text-xl font-semibold text-white mt-4">{problem.title}</h3>
            <p className="text-gray-400 mt-2">{problem.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

// Liste des problèmes
const problems = [
  {
    icon: "❌",
    title: "Trop de complexité",
    description: "Des interfaces lourdes et difficiles à prendre en main.",
  },
  {
    icon: "⌛",
    title: "Perte de temps",
    description: "Trop de temps passé à paramétrer les outils.",
  },
  {
    icon: "💸",
    title: "Coût élevé",
    description: "Des solutions trop chères pour une utilisation basique.",
  },
];

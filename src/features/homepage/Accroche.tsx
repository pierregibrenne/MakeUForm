import { motion } from "framer-motion";
// import Meteors from "@/components/ui/meteors"
import SectionVideo from "./SectionVideo";
export default function HeroSection() {
  const words = ["Créer", "vos", "formulaires", "en", "ligne"];
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: i * 0.2 }, // Décalage de 0.2s entre chaque mot
    }),
  };
  return (
    <section className="flex flex-col items-center text-center space-y-6 py-20">
             {/* <Meteors number={5} /> */}
      {/* Badge Announcement avec Gradient Animé */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex items-center space-x-2 rounded-full bg-red-100 px-2 py-1 text-sm font-medium text-red-700"
      >
       <div className="flex items-center space-x-2 rounded-full bg-red-100 px-4 py-1 text-sm font-medium">
      <span className="flex items-left gap-1 rounded-full bg-white/50 px-1 py-0.1 text-red-500">📣<span>RoadMap</span>
  </span>
  <span className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 
                   bg-clip-text text-transparent 
                   animate-gradient bg-[size:200%]">
    Ici la RoadMap de SocialEase →
  </span>
</div>
      </motion.div>
      {/* Titre principal animé */}
      <motion.h1
        initial="hidden"
        animate="visible"
        className="text-5xl font-bold text-black"
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} custom={i} className="mr-2 max-w-1xl">
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Sous-titre */}
      <p className="text-gray-500 text-lg max-w-2xl">
      Ici on adresse le probleme en mode: ne perdez plus de temps sur exel et faire des calculs</p>
      {/* Bouton Call to Action */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg flex items-center space-x-2"
      >
        <span>🚀 Commencer Gratuitement</span>
      </motion.button>

      {/* Texte d'information */}
      <p className="text-gray-400 text-sm">
        7 Jours gratuits pour tester 
      </p>
      <SectionVideo />
    </section>
  );
}

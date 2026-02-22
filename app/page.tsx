"use client"
// import Image from "next/image";
import { motion } from 'framer-motion';

const phrases = [
  "MODA MASCULINA PREMIUM",
  "ESTILO • ELEGÂNCIA • PRESENÇA",
  "NOVA COLEÇÃO DISPONÍVEL",
  "QUALIDADE QUE IMPRESSIONA",
  "LOOKS PARA HOMENS DE ATITUDE",
  "CONFORTO E SOFISTICAÇÃO",
]

export default function Home() {
  const goldGradient = "linear-gradient(to right, transparent, #D4AF37, transparent)";
  return (

    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden">


      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="uppercase tracking-[0.5em] text-sm mb-4 block font-light"
      >Em breve
      </motion.span>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >

        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-[#D4AF37]">
          Mr. Madoda
        </h1>

        {/* Linha Dourada Animada */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="h-[1px] mt-6"
          style={{ background: goldGradient }}
        />
      </motion.div>

      {/* Glow Dourado de fundo */}
      <div className="absolute w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10" />

      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black py-4">

        {/* Fade lateral esquerdo */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />

        {/* Fade lateral direito */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...phrases, ...phrases, ...phrases].map((text, index) => (
            <span
              key={index}
              className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-light"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

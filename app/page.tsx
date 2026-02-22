"use client"
// import Image from "next/image";
import { motion } from 'framer-motion';
export default function Home() {
  const goldGradient = "linear-gradient(to right, transparent, #D4AF37, transparent)";
  return (

    <section className="h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white">


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
    </section>
  );
}

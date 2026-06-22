import { motion } from 'framer-motion'

export const ServicesHero = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-black border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none"
        >
          WHAT <br /> WE DO
        </motion.h2>
      </div>
    </section>
  )
}

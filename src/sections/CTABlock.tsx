import { motion } from 'framer-motion'

export const CTABlock = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-tight">
          READY TO <br className="hidden md:block" /> SHIP FASTER?
        </h2>
        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <button 
            onClick={scrollToContact}
            className="bg-black text-white px-12 py-6 text-xl md:text-2xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  )
}

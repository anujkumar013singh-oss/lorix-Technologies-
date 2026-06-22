import { motion } from 'framer-motion'

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-massive font-black leading-[0.9] tracking-tighter uppercase break-words">
            End-to-End <br />
            Digital Product <br />
            Delivery
          </h1>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-8">
            <div className="max-w-xl">
              <h2 className="text-hero-sub font-bold uppercase tracking-tight text-zinc-400 mb-4 leading-tight">
                PMO Consulting for SaaS · EdTech · Service Platforms
              </h2>
              <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-lg">
                We build, manage, and ship digital products faster—with structured execution, agile systems, and zero chaos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-white text-black px-8 py-4 text-lg font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors whitespace-nowrap"
              >
                Start Your Project
              </button>
              <button 
                onClick={scrollToWork}
                className="border border-white/20 px-8 py-4 text-lg font-black uppercase tracking-widest hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

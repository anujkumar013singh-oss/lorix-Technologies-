import { motion } from 'framer-motion'

const pricingModels = [
  {
    title: 'FIXED PROJECT',
    description: 'Defined scope, fixed timeline, fixed cost.'
  },
  {
    title: 'RETAINER MODEL',
    description: 'Ongoing delivery and PMO support.'
  },
  {
    title: 'SPRINT-BASED',
    description: 'Pay per sprint cycle with flexible scaling.'
  }
]

export const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="bg-black py-24 px-6 md:px-12 border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter mb-24">
          PRICING <br /> MODELS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {pricingModels.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 p-8 md:p-12 bg-zinc-950 group hover:border-white transition-colors duration-500"
            >
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">
                {model.title}
              </h3>
              <p className="text-xl text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white text-black p-8 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div>
            <span className="text-xl font-black uppercase tracking-widest block mb-4">
              STARTING FROM
            </span>
            <h3 className="text-5xl md:text-[10rem] font-black leading-none tracking-tighter">
              $5K — $50K+
            </h3>
          </div>
          <div className="max-w-xs text-center lg:text-right">
            <p className="text-xl font-bold uppercase tracking-tight mb-8">
              Every project is different. Custom quote based on scope, complexity, and timeline.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-black text-white px-8 py-4 text-xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors w-full"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

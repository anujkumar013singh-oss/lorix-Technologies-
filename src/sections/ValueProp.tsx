import { motion } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'DELIVERY SPEED',
    description: 'Ship faster with structured sprint execution and real-time tracking.'
  },
  {
    number: '02',
    title: 'EXECUTION CLARITY',
    description: 'No confusion. Clear ownership, clear milestones, clear outcomes.'
  },
  {
    number: '03',
    title: 'SCALABLE SYSTEMS',
    description: 'From MVP to scale without breaking workflows.'
  }
]

export const ValueProp = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <span className="absolute -top-12 -left-4 text-[8rem] font-black text-white/5 leading-none select-none group-hover:text-white/10 transition-colors">
                {item.number}
              </span>
              <div className="relative pt-8">
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

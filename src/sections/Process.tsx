import { motion } from 'framer-motion'

const steps = [
  {
    id: '01',
    title: 'DISCOVERY',
    description: 'Understand requirements, goals, and constraints.'
  },
  {
    id: '02',
    title: 'PLANNING',
    description: 'Define roadmap, sprint structure, and milestones.'
  },
  {
    id: '03',
    title: 'EXECUTION',
    description: 'Agile delivery with continuous tracking.'
  },
  {
    id: '04',
    title: 'DELIVERY',
    description: 'Launch with full QA validation.'
  },
  {
    id: '05',
    title: 'SUPPORT',
    description: 'Post-launch optimization and scaling.'
  }
]

export const Process = () => {
  return (
    <section id="process" className="bg-black py-24 px-6 md:px-12 border-y border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter mb-24 leading-none">
          HOW <br /> WE WORK
        </h2>

        <div className="flex flex-col gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:items-center border-b border-white/10 pb-16 last:border-0"
            >
              <span className="text-6xl md:text-8xl font-black text-white/5 leading-none select-none">
                {step.id}
              </span>
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

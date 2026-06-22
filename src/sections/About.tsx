import { motion } from 'framer-motion'

const experience = [
  { label: 'YEARS EXPERIENCE', value: '5+' },
  { label: 'PROJECTS DELIVERED', value: '50+' },
  { label: 'GLOBAL CLIENTS', value: '20+' }
]

const trustFactors = [
  'Proven delivery frameworks',
  'Transparent execution',
  'Data-driven decisions'
]

export const About = () => {
  return (
    <section id="about" className="bg-black py-24 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter mb-24 leading-none">
          WHO <br /> WE ARE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <p className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-relaxed text-zinc-300">
              Lorix Technologies is a digital product delivery and consulting partner focused on structured execution, scalable systems, and measurable outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-black uppercase tracking-widest text-white underline decoration-white underline-offset-8 mb-4">
              TRUST FACTORS
            </h4>
            <ul className="flex flex-col gap-4">
              {trustFactors.map((factor, i) => (
                <li key={i} className="text-xl md:text-2xl font-bold text-zinc-500 uppercase flex items-center gap-4">
                  <span className="w-4 h-[2px] bg-white"></span>
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 p-12 bg-zinc-950 flex flex-col items-center text-center"
            >
              <span className="text-6xl md:text-7xl font-black mb-2 tracking-tighter">
                {item.value}
              </span>
              <span className="text-lg font-black uppercase tracking-widest text-zinc-500">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

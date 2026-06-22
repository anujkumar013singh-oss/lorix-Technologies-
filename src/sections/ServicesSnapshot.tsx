import { motion } from 'framer-motion'

const services = [
  {
    title: 'PROJECT DELIVERY',
    description: 'From idea to launch—fully managed execution.'
  },
  {
    title: 'PMO CONSULTING',
    description: 'Set up scalable systems, governance, and reporting.'
  },
  {
    title: 'AGILE / SPRINT MANAGEMENT',
    description: 'Structured sprints, velocity tracking, backlog control.'
  },
  {
    title: 'UAT & QA COORDINATION',
    description: 'Zero-bug releases with controlled testing workflows.'
  }
]

export const ServicesSnapshot = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-16">
          SERVICES SNAPSHOT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/10 p-12 bg-zinc-950 hover:bg-white hover:text-black transition-all duration-500 cursor-default"
            >
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">
                {service.title}
              </h3>
              <p className="text-2xl font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

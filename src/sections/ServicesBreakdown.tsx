import { motion } from 'framer-motion'

const detailedServices = [
  {
    id: '01',
    title: 'PROJECT DELIVERY',
    description: 'End-to-end product execution from concept to deployment.',
    details: ['Planning', 'Development Coordination', 'Delivery Ownership']
  },
  {
    id: '02',
    title: 'PMO CONSULTING',
    description: 'Build structured delivery systems for scaling teams.',
    details: ['Governance', 'Reporting Frameworks', 'Workflow Optimization']
  },
  {
    id: '03',
    title: 'AGILE / SPRINT MANAGEMENT',
    description: 'Run high-efficiency sprint cycles.',
    details: ['Backlog Prioritization', 'Velocity Tracking', 'Team Alignment']
  },
  {
    id: '04',
    title: 'UAT & QA COORDINATION',
    description: 'Ensure release quality.',
    details: ['Structured Testing', 'Bug Tracking', 'Final Validation Workflows']
  }
]

export const ServicesBreakdown = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-[30vh]">
          {detailedServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="sticky top-[15vh] bg-zinc-950 border border-white/10 p-12 md:p-24 min-h-[60vh] flex flex-col justify-center shadow-2xl"
              style={{ top: `${15 + idx * 2}vh` }}
            >
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <span className="text-8xl font-black text-white/10 leading-none">
                  {service.id}
                </span>
                <div className="flex-1">
                  <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 text-xl font-bold uppercase tracking-wider text-zinc-500">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

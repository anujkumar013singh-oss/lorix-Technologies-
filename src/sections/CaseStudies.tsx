import { motion } from 'framer-motion'

const cases = [
  {
    name: 'SaaS Platform Optimization',
    before: [
      'Delayed releases',
      'Poor sprint visibility',
      'High bug rate'
    ],
    after: [
      'Structured sprint cycles',
      'Clear PMO system',
      'Controlled QA pipeline'
    ],
    results: [
      { label: 'DELIVERY SPEED', value: '+40%' },
      { label: 'BUG RATE', value: '-60%' },
      { label: 'TEAM EFFICIENCY', value: '2X' }
    ]
  },
  {
    name: 'EdTech Scalability Project',
    before: [
      'Unstructured backlog',
      'Fragmented team communication',
      'Bottlenecked deployments'
    ],
    after: [
      'Centralized PMO Dashboard',
      'Daily agile syncs',
      'Automated QA workflows'
    ],
    results: [
      { label: 'PROJECT THROUGHPUT', value: '+55%' },
      { label: 'RELEASE CYCLE', value: '-45%' },
      { label: 'CLIENT SATISFACTION', value: '98%' }
    ]
  }
]

export const CaseStudies = () => {
  return (
    <section id="work" className="bg-black py-24 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none mb-8">
            REAL DELIVERY.<br />REAL RESULTS.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {cases.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-white/20 pt-16"
            >
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                PROJECT: {project.name}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                <div>
                  <h4 className="text-xl font-black uppercase tracking-widest text-zinc-500 mb-6 underline decoration-zinc-700 underline-offset-8">
                    BEFORE
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {project.before.map((item, i) => (
                      <li key={i} className="text-xl md:text-2xl font-bold text-zinc-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-widest text-white mb-6 underline decoration-white underline-offset-8">
                    AFTER
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {project.after.map((item, i) => (
                      <li key={i} className="text-xl md:text-2xl font-bold text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.results.map((result, i) => (
                  <div key={i} className="bg-zinc-950 p-8 md:p-12 border border-white/10 group hover:bg-white hover:text-black transition-colors duration-500">
                    <span className="text-5xl md:text-7xl font-black leading-none block mb-4 tracking-tighter">
                      {result.value}
                    </span>
                    <span className="text-lg md:text-xl font-black uppercase tracking-tighter opacity-50 group-hover:opacity-100">
                      {result.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

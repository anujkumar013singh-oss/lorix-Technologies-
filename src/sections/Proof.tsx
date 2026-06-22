import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

/**
 * Data for the high-energy stats marquee.
 */
const STATS_DATA = [
  { label: "PROJECTS DELIVERED", value: "50+" },
  { label: "TIME-TO-MARKET", value: "30%" },
  { label: "ACTIVE CLIENTS", value: "20+" },
  { label: "SUCCESS RATE", value: "95%" },
  { label: "TEAM EFFICIENCY", value: "2X" },
]

/**
 * Data for the testimonials marquee.
 */
const TESTIMONIALS_DATA = [
  { quote: "THE FASTEST DELIVERY CYCLE WE'VE EVER EXPERIENCED.", author: "SAAS FOUNDER" },
  { quote: "PMO CONSULTING THAT ACTUALLY SCALES WITHOUT CHAOS.", author: "EDTECH CEO" },
  { quote: "ZERO BUGS. PURE PERFORMANCE. HIGHLY RECOMMENDED.", author: "PLATFORM LEAD" },
  { quote: "THEY DON'T JUST BUILD, THEY STRATEGIZE FOR GROWTH.", author: "SERVICE OWNER" },
]

/**
 * Proof section with multiple marquees inspired by requested principles.
 */
export const Proof = () => {
  return (
    <section className="bg-black border-y border-white/10 overflow-hidden flex flex-col">
      {/* Stats Marquee - High Energy */}
      <div className="py-12 border-b border-white/5">
        <Marquee 
          speed={300} 
          direction="left" 
          gradient={false} 
          autoFill={true}
        >
          {STATS_DATA.map((item, idx) => (
            <div key={idx} className="flex items-center mx-12 group cursor-default">
              <span className="text-[clamp(4rem,12vw,8rem)] font-black uppercase tracking-tighter text-outline group-hover:text-white transition-all duration-500">
                {item.value}
              </span>
              <div className="flex flex-col ml-4">
                <span className="text-sm md:text-base font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Testimonials Marquee - Slower Rhythm */}
      <div className="py-24">
        <Marquee 
          speed={100} 
          direction="left" 
          gradient={false} 
          autoFill={true}
        >
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div key={idx} className="mx-24 max-w-2xl group cursor-default">
              <p className="text-[clamp(1.5rem,4vw,3rem)] font-black uppercase tracking-tight leading-tight text-outline group-hover:text-white transition-all duration-700">
                "{item.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-white/10 group-hover:w-20 group-hover:bg-white transition-all duration-700" />
                <span className="text-sm md:text-lg font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

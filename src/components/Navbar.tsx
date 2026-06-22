import { motion } from 'framer-motion'

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'work' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span 
          className="text-2xl font-black uppercase tracking-tighter cursor-pointer z-[101]"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          LORIX
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black px-6 py-2 text-sm font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Start Project
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

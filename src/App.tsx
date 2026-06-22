import { Hero } from './sections/Hero'
import { ValueProp } from './sections/ValueProp'
import { ServicesSnapshot } from './sections/ServicesSnapshot'
import { Proof } from './sections/Proof'
import { CTABlock } from './sections/CTABlock'
import { ServicesHero } from './sections/ServicesHero'
import { ServicesBreakdown } from './sections/ServicesBreakdown'
import { CaseStudies } from './sections/CaseStudies'
import { Pricing } from './sections/Pricing'
import { About } from './sections/About'
import { Process } from './sections/Process'
import { Contact } from './sections/Contact'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <ValueProp />
      <ServicesSnapshot />
      <Proof />
      <CTABlock />
      <ServicesHero />
      <ServicesBreakdown />
      <CaseStudies />
      <Pricing />
      <About />
      <Process />
      <Contact />
    </main>
  )
}

export default App

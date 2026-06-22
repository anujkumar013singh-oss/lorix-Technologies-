import { motion } from 'framer-motion'
import { useState } from 'react'

const INITIAL_FORM = { name: '', email: '', projectType: 'SAAS PLATFORM', message: '' }

export const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const text = await res.text()
      let data
      try {
        data = JSON.parse(text)
      } catch {
        throw new Error('Server error – please try again later')
      }

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <section id="contact" className="bg-black py-24 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter mb-24 leading-none">
          START YOUR <br /> PROJECT
        </h2>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-8 py-24"
          >
            <span className="text-8xl">✓</span>
            <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
              THANK YOU.<br />WE'LL BE IN TOUCH.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="border border-white/20 px-8 py-4 text-lg font-black uppercase tracking-widest hover:bg-white/10 transition-colors mt-8"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form className="flex flex-col gap-12 max-w-4xl" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 border-b border-white/20 pb-4 group focus-within:border-white transition-colors">
              <label className="text-xl font-black uppercase tracking-widest text-zinc-500">
                NAME
              </label>
              <input
                type="text"
                placeholder="YOUR FULL NAME"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                required
                className="bg-transparent text-3xl md:text-6xl font-black uppercase tracking-tighter focus:outline-none placeholder:text-zinc-900"
              />
            </div>

            <div className="flex flex-col gap-4 border-b border-white/20 pb-4 group focus-within:border-white transition-colors">
              <label className="text-xl font-black uppercase tracking-widest text-zinc-500">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
                className="bg-transparent text-3xl md:text-6xl font-black uppercase tracking-tighter focus:outline-none placeholder:text-zinc-900"
              />
            </div>

            <div className="flex flex-col gap-4 border-b border-white/20 pb-4 group focus-within:border-white transition-colors">
              <label className="text-xl font-black uppercase tracking-widest text-zinc-500">
                PROJECT TYPE
              </label>
              <select
                value={form.projectType}
                onChange={(e) => updateField('projectType', e.target.value)}
                className="bg-transparent text-3xl md:text-6xl font-black uppercase tracking-tighter focus:outline-none appearance-none cursor-pointer"
              >
                <option className="bg-black">SAAS PLATFORM</option>
                <option className="bg-black">EDTECH</option>
                <option className="bg-black">PMO CONSULTING</option>
                <option className="bg-black">OTHER</option>
              </select>
            </div>

            <div className="flex flex-col gap-4 border-b border-white/20 pb-4 group focus-within:border-white transition-colors">
              <label className="text-xl font-black uppercase tracking-widest text-zinc-500">
                MESSAGE
              </label>
              <textarea
                rows={3}
                placeholder="TELL US ABOUT YOUR PROJECT"
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                required
                className="bg-transparent text-3xl md:text-6xl font-black uppercase tracking-tighter focus:outline-none placeholder:text-zinc-900 resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-500 font-black uppercase tracking-wider">{errorMsg}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-8 mt-12">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-black px-12 py-6 text-xl md:text-2xl font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'SENDING...' : 'Book a Call'}
              </button>
              <button
                type="button"
                className="border border-white/20 px-12 py-6 text-xl md:text-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Get a Custom Plan
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

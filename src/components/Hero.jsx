import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-10 md:pt-16">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/70" />
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900"
            >
              The modern, glassy AI Notepad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-slate-700 max-w-xl"
            >
              Create, organize, and polish notes instantly. Zero typing lag. AI that cleans, rewrites, and generates text for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <Link to="/app" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow hover:shadow-md transition">
                Open Notepad <ArrowRight size={18} />
              </Link>
              <a href="#ai" className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-white/50 px-5 py-3 rounded-xl text-slate-800">
                Explore AI
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette + gradient overlays, pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs tracking-wide">CARNE DI QUALITÀ • DRY AGED • GRIGLIA A CARBONE</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl leading-tight font-extrabold tracking-tight text-white">
              Red Beef
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">BURGER • BBQ • STEAKHOUSE</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Un tempio per gli amanti della carne. Tagli pregiati, affumicature lente e burger succulenti in un ambiente contemporaneo.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#menu" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all">
                Scopri il Menu
              </a>
              <a href="#book" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/10 text-white border border-white/15 backdrop-blur hover:bg-white/15 transition-colors">
                Prenota un tavolo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

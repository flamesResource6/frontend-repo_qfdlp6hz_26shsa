import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section id="book" className="relative py-20 md:py-28 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Prenota il tuo tavolo</h2>
            <p className="mt-4 text-white/70 text-lg">Chiama per disponibilità e informazioni su gruppi ed eventi.</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="tel:+391234567890" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/30">
                <Phone className="w-4 h-4" /> +39 123 456 7890
              </a>
              <a href="#locations" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white border border-white/15 backdrop-blur">
                <MapPin className="w-4 h-4" /> Dove siamo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          >
            <h3 className="text-white font-semibold">Orari</h3>
            <ul className="mt-3 text-white/70 text-sm space-y-1">
              <li>Lun-Gio: 12:00 - 15:00 / 19:00 - 23:00</li>
              <li>Ven: 12:00 - 15:00 / 19:00 - 00:00</li>
              <li>Sab-Dom: 12:00 - 00:00</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useMemo } from 'react'
import { motion } from 'framer-motion'

const imgs = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559630939-3d06e164aa48?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1400&auto=format&fit=crop'
]

export default function Gallery() {
  const columns = useMemo(() => [imgs.slice(0,2), imgs.slice(2,4), imgs.slice(4,6)], [])
  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Gallery</h2>
          <p className="mt-4 text-white/70 text-lg">Uno sguardo ai nostri piatti e all’atmosfera.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <div key={i} className="grid gap-6">
              {col.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i + idx) * 0.05 }}
                  className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
                >
                  <img src={src} alt="piatto" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

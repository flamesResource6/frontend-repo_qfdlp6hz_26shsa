import { motion } from 'framer-motion'
import { Flame, UtensilsCrossed, Beef, Drumstick, Leaf, Coffee } from 'lucide-react'

const features = [
  {
    icon: Beef,
    title: 'Steakhouse d’autore',
    desc: 'Tagli selezionati, dry aged e frollature lunghe per sapori intensi.'
  },
  {
    icon: Drumstick,
    title: 'BBQ & affumicature',
    desc: 'Low & slow con legni selezionati per carni morbide e profumate.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Burger iconici',
    desc: 'Pane artigianale, blend proprietario e topping a regola d’arte.'
  },
  {
    icon: Leaf,
    title: 'Contorni e salse',
    desc: 'Ricette fatte in casa per accompagnare ogni morso alla perfezione.'
  },
  {
    icon: Coffee,
    title: 'Cocktail & pairing',
    desc: 'Mixology contemporanea e birre craft selezionate.'
  },
  {
    icon: Flame,
    title: 'Fuoco vivo',
    desc: 'Griglia a carbone e cotture millimetriche per caramellizzazioni perfette.'
  }
]

export default function Showcase() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Carne, fuoco e tecnica
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Un’esperienza che unisce selezione maniacale delle materie prime e creatività in cucina.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-red-500/30">
                {<f.icon className="w-6 h-6" />}
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

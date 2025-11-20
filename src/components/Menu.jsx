import { motion } from 'framer-motion'

const menu = [
  {
    cat: 'Burger',
    items: [
      { name: 'Red Classic', desc: 'Manzo, cheddar, lattuga, pomodoro, salsa house', price: '12' },
      { name: 'Smoky BBQ', desc: 'Manzo, bacon, cipolla caramellata, cheddar, BBQ', price: '14' },
      { name: 'Truffle King', desc: 'Manzo, provola, crema al tartufo, funghi', price: '16' }
    ]
  },
  {
    cat: 'Grill & Steak',
    items: [
      { name: 'Picanha', desc: 'Taglio brasiliano, cottura a temperatura', price: '23' },
      { name: 'Costata Dry Aged', desc: 'Frollatura 30+ giorni, al hg', price: '7/100g' },
      { name: 'Tomahawk', desc: 'Per 2 persone, cottura alla brace', price: '65' }
    ]
  },
  {
    cat: 'Sides',
    items: [
      { name: 'Patate Rustiche', desc: 'Doppia cottura, sale affumicato', price: '5' },
      { name: 'Cole Slaw', desc: 'Cavolo cappuccio, carota, dressing', price: '5' }
    ]
  }
]

export default function Menu() {
  return (
    <section id="menu" className="relative py-20 md:py-28 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Menu</h2>
          <p className="mt-4 text-white/70 text-lg">Classici iconici e specialità alla brace.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {menu.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <h3 className="text-white font-semibold tracking-wide uppercase">{section.cat}</h3>
              <ul className="mt-4 space-y-4">
                {section.items.map((it, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-medium">{it.name}</p>
                      <p className="text-white/60 text-sm">{it.desc}</p>
                    </div>
                    <span className="text-white/80">€{it.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const scrollers = el.querySelectorAll('[data-animate]')
    scrollers.forEach((scroller) => {
      const inner = scroller.querySelector('.inner')
      inner.innerHTML += inner.innerHTML
    })
  }, [])

  return (
    <section className="relative py-10 md:py-16 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-purple-600/10 to-transparent pointer-events-none" />
      <div ref={ref} className="relative overflow-hidden">
        <div
          data-animate
          className="[--duration:30s] group flex whitespace-nowrap will-change-transform animate-[marquee_var(--duration)_linear_infinite]"
        >
          <div className="inner flex gap-6 md:gap-10 items-center text-white/80 text-sm md:text-base px-6">
            {items.map((it, idx) => (
              <span key={idx} className="inline-flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        `}
      </style>
    </section>
  )
}

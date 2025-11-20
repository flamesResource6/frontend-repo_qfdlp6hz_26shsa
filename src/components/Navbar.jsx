import { useState, useEffect } from 'react'
import { Menu, X, Beef, Phone, MapPin } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-purple-600 text-white shadow-lg shadow-red-500/20">
              <Beef className="w-5 h-5" />
            </div>
            <span className="text-white font-semibold tracking-wide text-lg md:text-xl group-hover:opacity-90">RED BEEF</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">Chi siamo</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#locations">Location</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all">
              <Phone className="w-4 h-4" /> Prenota
            </a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white border border-white/10">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLink href="#about" onClick={() => setOpen(false)}>Chi siamo</NavLink>
            <NavLink href="#menu" onClick={() => setOpen(false)}>Menu</NavLink>
            <NavLink href="#gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
            <NavLink href="#locations" onClick={() => setOpen(false)}>Location</NavLink>
            <a href="#book" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white w-max">
              <Phone className="w-4 h-4" /> Prenota
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" />
              <span>Italia</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

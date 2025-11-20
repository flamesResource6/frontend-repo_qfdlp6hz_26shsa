export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Red Beef. Tutti i diritti riservati.</p>
        <div className="text-white/60 text-sm">Made with ❤️</div>
      </div>
    </footer>
  )
}

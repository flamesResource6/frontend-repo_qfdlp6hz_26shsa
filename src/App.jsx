import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Showcase from './components/Showcase'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600/40">
      <Navbar />
      <Hero />
      <Marquee items={[
        'Burger gourmet',
        'Affumicature low & slow',
        'Tagli dry aged',
        'Cocktail pairing',
        'Pane artigianale',
        'Ingredienti selezionati'
      ]} />
      <Showcase />
      <Menu />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

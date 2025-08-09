import Header from './components/Header'
import Navbar from './components/Navbar'
import CareerHighlights from './components/CareerHighlights'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Header />
      <Navbar />
      <main className='container space-y-6 pb-16'>
        <section id='about' className='card'>
          <h2 className='text-2xl font-bold mb-2'>About</h2>
          <p>
            Hi — I’m Sherveen. Mechanical Engineer focused on EV powertrains & product development.
            I design high-voltage battery systems, develop firmware and testing frameworks, and lead
            interdisciplinary student engineering teams.
          </p>
        </section>

        <CareerHighlights />
        <div id='skills' className='grid md:grid-cols-3 gap-4'>
          <div className='md:col-span-2'><Skills /></div>
          <Awards />
        </div>

        <Timeline />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

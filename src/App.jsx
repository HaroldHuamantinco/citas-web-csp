import Header from './components/layout/Header.jsx'
import TopBar from './components/layout/TopBar.jsx'
import Hero from './sections/Hero.jsx'
import Highlights from './sections/Highlights.jsx'
import Benefits from './sections/Benefits.jsx'
import Steps from './sections/Steps.jsx'
import Reschedule from './sections/Reschedule.jsx'
import Faq from './sections/Faq.jsx'
import ContactCta from './sections/ContactCta.jsx'
import Footer from './components/layout/Footer.jsx'

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Benefits />
        <Steps />
        <Reschedule />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}

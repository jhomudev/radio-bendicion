import { useEffect } from 'react'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import ContactsSection from './components/sections/ContactsSection'
import ProgramationSection from './components/sections/ProgramationSection'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App () {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='relative w-full flex flex-col font-nunito'>
      <Header />
      <HomeSection />
      <ProgramationSection />
      <ContactsSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App

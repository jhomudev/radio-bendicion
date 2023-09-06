import { useEffect } from 'react'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import ContactsSection from './components/sections/ContactsSection'
import ProgramationSection from './components/sections/ProgramationSection'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Button } from '@nextui-org/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import usePage from './hooks/usePage'

function App () {
  const { scrollToSection, section } = usePage()

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    scrollToSection(section.current)
  }, [section])

  return (
    <div className='relative w-full flex flex-col font-nunito scroll-smooth'>
      <Header />
      <HomeSection />
      <ProgramationSection />
      <ContactsSection />
      <AboutSection />
      <Footer />
      <Button
        isIconOnly color='warning' variant='faded' aria-label='Subir'
        className='fixed bottom-5 right-5'
        onPress={() => { scrollToSection() }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </div>
  )
}

export default App

import { useEffect } from 'react'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import ContactsSection from './components/sections/ContactsSection'
import ProgramationSection from './components/sections/ProgramationSection'
import Footer from './components/Footer'
import Header from './components/Header'
import { Button } from '@nextui-org/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import usePage from './hooks/usePage'
import { motion, useScroll } from 'framer-motion'

function App () {
  const { scrollToSection, section } = usePage()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    scrollToSection(section.current)
  }, [section])

  return (
    <div className='relative w-full flex flex-col font-nunito scroll-smooth'>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='fixed left-0 top-0 z-50 w-full h-2 bg-primary origin-left'
      />
      <Header />
      <HomeSection />
      <ProgramationSection />
      <ContactsSection />
      <AboutSection />
      <Footer />
      <Button
        as={motion.button}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1
        }}
        aria-label='Ir arriba'
        className='fixed bottom-5 z-20 right-5'
        isIconOnly
        color='warning'
        variant='faded'
        onPress={() => { scrollToSection() }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </div>
  )
}

export default App

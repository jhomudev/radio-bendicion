import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/button'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Footer, Header } from './components'
import { usePage } from './hooks'
import { AboutSection, ContactsSection, HomeSection, ProgramationSection } from './sections'

function App () {
  const { scrollToSection, section } = usePage()
  const { scrollYProgress, scrollY } = useScroll()
  const [y, setY] = useState(0)

  useEffect(() => {
    scrollToSection(section.current)
  }, [section])

  scrollY.on('change', (latest) => {
    setY(latest)
  })

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
        animate={{ opacity: y > 300 ? 1 : 0, transition: { type: 'tween', duration: 0.3 } }}
        aria-label='Ir arriba'
        className='fixed bottom-5 z-20 right-5'
        isIconOnly
        color='warning'
        variant='faded'
        onPress={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </div>
  )
}

export default App

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@nextui-org/button'
import { motion } from 'framer-motion'
import { usePlayer, usePage } from '@/hooks'
import { Carousel, Player } from '@/components'

function HomeSection () {
  const { isPlay, togglePlay } = usePlayer()
  const { homeSection } = usePage()

  return (
    <section ref={homeSection} className='section-site flex z-30'>
      <Carousel />
      <main className='flex-1 container px-10 py-20 md:py-10 relative z-20 mx-auto w-full min-h-screen flex flex-col lg:flex-row gap-5 lg:gap-20 items-center justify-center'>
        <div className='content text-center lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { type: 'spring' } }}
          >
            <h1 className='text-mygray text-4xl font-bold uppercase font-dosis'>Somos <strong className='text-mygold'>Radio bendición <br /> 90.5 FM</strong>
            </h1>
            <h2 className='text-myorange text-xl font-bold uppercase font-kumbh'>Samugari</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }}
          >
            <p className='mt-3 text-mygray font-kumbh'>La radio que te bendice y edifica tu espíritu. Somos una radio digital que transmite desde Perú para todo el el público en general de habla quechua y hispana.</p>
            <p className='text-mygray italic mt-3 '>"Aclamad con júbilo al SEÑOR, toda la tierra; prorrumpid y cantad con gozo, cantad alabanzas." <wbr />Salmos 98:4 </p>
          </motion.div>
          <br />
          <Button
            aria-label='Reproducir o pausar radio'
            as={motion.button}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { type: 'tween', duration: 1 } }}
            variant='solid'
            size='lg'
            color='secondary'
            startContent={<FontAwesomeIcon icon={isPlay ? faPause : faPlay} />}
            onPress={togglePlay}
          >
            {isPlay ? 'Pause' : 'Play'}
          </Button>
        </div>
        <Player />
      </main>
    </section>
  )
}
export default HomeSection

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@nextui-org/button'
import Carousel from './../Carousel'
import Player from './../Player'
import usePlayer from '../../hooks/usePlayer'
import usePage from '../../hooks/usePage'

function HomeSection () {
  const { isPlay, togglePlay } = usePlayer()
  const { homeSection } = usePage()

  return (
    <section ref={homeSection} className='section-site flex z-30'>
      <Carousel />
      <main className='flex-1 container px-10 relative z-20 mx-auto w-full h-screen flex flex-col lg:flex-row gap-5 lg:gap-20 items-center justify-center'>
        <div className='content text-center lg:text-left'>
          <h1 className='text-mygray text-4xl font-bold uppercase font-dosis'>Somos <strong className='text-mygold'>radio bendición <br /> 90.5 fm</strong></h1>
          <h2 className='text-mypink text-xl font-bold uppercase font-kumbh'>Samugari</h2>
          <p className='mt-3 text-mygray font-kumbh'>La radio que te bendice y edifica tu espíritu. Somos una radio digital que transmite desde Perú para todo el el público en general de habla quechua y hispana.</p>
          <p className='text-mygray italic mt-3 '>"Aclamad con júbilo al SEÑOR, toda la tierra; prorrumpid y cantad con gozo, cantad alabanzas." Salmos 98:4</p>
          <br />
          <Button variant='solid' size='lg' color='secondary' onPress={togglePlay}>
            <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
            {isPlay ? 'Pause' : 'Play'}
          </Button>
        </div>
        <Player />
      </main>
    </section>
  )
}
export default HomeSection
